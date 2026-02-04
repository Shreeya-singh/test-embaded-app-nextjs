'use client'
import React, { useEffect, useState } from 'react'

export const TOTAL_TIME = 5 // minutes

const Test = () => {
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME * 60)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    if (!isActive) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive])

  return (
    <div className="relative w-[300px] h-[300px] flex justify-center items-center">
      {isActive && (
        <p className="text-5xl text-black">
          {formatTime(timeLeft)}
        </p>
      )}
    </div>
  )
}

export default Test

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}
