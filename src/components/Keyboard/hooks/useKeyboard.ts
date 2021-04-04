import { useState, useEffect } from 'react'

import { useEventListener } from '../../../hooks/useEventListener'

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
  const [randomizedKey, setRandomizedKey] = useState('')
  const [point, setPoint] = useState<Point>({ hits: 0, mistakes: 0 })
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(0)

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
     * Not equal, is a mistake.
     */
    setPoint({ ...point, mistakes: point.mistakes + 1 })
  }

  /**
   * Stop.
   */
  const stopGame = () => {
    setIsRunning(false)
    setRandomizedKey('')
  }

  /**
   * Count down.
   */
  useEffect(() => {
    setTimeout(() => {
      if (time <= 0) return stopGame()

      setTime(time - 1)
    }, 1000)
  }, [time])

  /**
   * Start click.
   */
  const handleStart = () => {
    /**
     * Not start again.
     */
    if (isRunning) return

    /**
     * Start.
     */
    setTime(60)
    setPoint({ hits: 0, mistakes: 0 })
    setIsRunning(true)
    setRandomizedKey(randomize(letters))
  }

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
