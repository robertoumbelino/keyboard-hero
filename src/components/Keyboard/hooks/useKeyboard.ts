import { useState, useEffect } from 'react'

import { useEventListener } from '../../../hooks/useEventListener'

// @ts-ignore
import musicPath from '../../../assets/sounds/top-gear.mp3'

// @ts-ignore
import mistakeSoundPath from '../../../assets/sounds/mistake.mp3'

// @ts-ignore
import finalSoundPath from '../../../assets/sounds/final.mp3'

// @ts-ignore
import scoreSoundPath from '../../../assets/sounds/score.mp3'

/**
 * Props.
 */
type Point = {
  hits: number
  mistakes: number
}

/**
 * Setup.
 */
const letters = 'abcdefghijqklmnopqrstuvwxyzç'

/**
 * Get a random value from list.
 */
const randomize = (list: string | string[]) =>
  list[Math.floor(Math.random() * list.length)]

/**
 * Hook.
 */
export const useKeyboard = () => {
  /**
   * States.
   */
  const [time, setTime] = useState(0)
  const [music] = useState(new Audio(musicPath))
  const [point, setPoint] = useState<Point>({ hits: 0, mistakes: 0 })
  const [isRunning, setIsRunning] = useState(false)
  const [randomizedKey, setRandomizedKey] = useState('')

  /**
   * Key event.
   */
  const handleKeyUp = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase()

    /**
     * Not running.
     */
    if (!isRunning) {
      const isTappedEnter = key === 'enter'

      /**
       * Start game.
       */
      if (isTappedEnter) return handleStart()

      return
    }

    /**
     * Is not letter.
     */
    const isNotLetter = letters.includes(key)

    /**
     * Don't consider a mistake when the key not be a letter.
     */
    if (!isNotLetter) return

    /**
     * Check if key typed is equal than generated.
     */
    const isEqual = key === randomizedKey

    /**
     * Is equal, generate a new key.
     */
    if (isEqual) {
      /**
       * Play positive sound effect.
       */
      new Audio(scoreSoundPath).play()

      /**
       * Set new point.
       */
      setPoint({ ...point, hits: point.hits + 1 })

      /**
       * Get letters without current key.
       */
      const lettersWithoutCurrentKey = letters
        .split('')
        .filter(letter => letter !== randomizedKey)
        .join('')

      return setRandomizedKey(randomize(lettersWithoutCurrentKey))
    }

    /**
     * Play negative sound effect.
     */
    new Audio(mistakeSoundPath).play()

    /**
     * Not equal, is a mistake.
     */
    setPoint({ ...point, mistakes: point.mistakes + 1 })
  }

  /**
   * Stop.
   */
  const stopGame = () => {
    /**
     * Stop musics.
     */
    music.pause()

    setIsRunning(false)
    setRandomizedKey('')
  }

  /**
   * Start click.
   */
  const handleStart = () => {
    /**
     * Not start again.
     */
    if (isRunning) return

    /**
     * Play music.
     */
    music.play()

    /**
     * Start.
     */
    setTime(60)
    setPoint({ hits: 0, mistakes: 0 })
    setIsRunning(true)
    setRandomizedKey(randomize(letters))
  }

  /**
   * Count down.
   */
  useEffect(() => {
    setTimeout(() => {
      if (time <= 0) return stopGame()

      setTime(time - 1)
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  /**
   * Change song.
   */
  useEffect(() => {
    const isFinal10Seconds = time <= 5

    if (isFinal10Seconds) new Audio(finalSoundPath).play()
  }, [time, music])

  /**
   * Events.
   */
  useEventListener('keyup', handleKeyUp)

  return {
    /**
     * States.
     */
    randomizedKey,
    setRandomizedKey,

    point,
    setPoint,

    time,
    setTime,

    isRunning,

    handleStart
  }
}
