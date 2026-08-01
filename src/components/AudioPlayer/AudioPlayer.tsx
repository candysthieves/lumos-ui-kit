import clsx from 'clsx'
import { useRef, useState } from 'react'
import { PauseCircle, PlayCircle } from '@/assets/icons'
import { Typography } from '@/components'
import { Button } from '@/components/Button'
import { WAVE_FORM } from '@/constants'
import { formatTime } from '@/utils'
import s from './AudioPlayer.module.scss'

type AudioPlayerProps = {
  src: string
  className?: string
  waveform: number[]
}

export const AudioPlayer = ({ src, waveform = WAVE_FORM, className }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const playedBars = Math.floor(progress * waveform.length)

  const togglePlay = async () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      await audioRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    if (!audioRef.current) return

    setCurrentTime(audioRef.current.currentTime)
    setProgress(audioRef.current.currentTime / audioRef.current.duration)
  }

  const handleLoaded = () => {
    if (!audioRef.current) return

    setDuration(audioRef.current.duration)
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setProgress(0)
    setCurrentTime(0)
  }

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percent = x / rect.width

    audioRef.current.currentTime = percent * duration
  }

  return (
    <div className={clsx(s.audio, className)}>
      <audio
        ref={audioRef}
        src={src}
        preload={'auto'}
        onLoadedMetadata={handleLoaded}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      <Button className={s.playButton} onClick={togglePlay}>
        {isPlaying ? (
          <PauseCircle color={'var(--color-light-100)'} size={48} />
        ) : (
          <PlayCircle color={'var(--color-light-100)'} size={48} />
        )}
      </Button>

      <div className={s.content}>
        <div className={s.waveform} onClick={seek}>
          {waveform.map((height, index) => (
            <span
              key={index}
              className={clsx(s.bar, index <= playedBars && s.played)}
              style={{ height }}
            />
          ))}
        </div>

        <div className={s.footer}>
          {isPlaying && (
            <>
              <Typography
                color={'var(--color-accent-100)'}
                variant={'caption1'}
                className={s.currentTime}
              >
                {formatTime(currentTime)}
              </Typography>
              <span className={s.divider}>/</span>
            </>
          )}
          <Typography color={'var(--color-accent-100)'} variant={'caption1'}>
            {formatTime(duration)}
          </Typography>
        </div>
      </div>
    </div>
  )
}
