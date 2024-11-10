"use client"

import { useState, useEffect } from "react"

export default function AnimatedCarsBackground() {
  const [cars, setCars] = useState<Array<{ id: number; top: number; delay: number; duration: number }>>([])

  useEffect(() => {
    // Generate random car positions and timings
    const newCars = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      top: Math.random() * 60 + 20, // 20-80% from top
      delay: i * 2,
      duration: 15 + Math.random() * 10, // 15-25s
    }))
    setCars(newCars)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      {cars.map((car) => (
        <div
          key={car.id}
          className="absolute animate-pulse"
          style={{
            top: `${car.top}%`,
            left: "-100px",
            animation: `moveRight ${car.duration}s linear ${car.delay}s infinite`,
          }}
        >
          <svg
            width="80"
            height="40"
            viewBox="0 0 80 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            {/* Electric car simple line illustration */}
            <path d="M 15 25 L 65 25" stroke="currentColor" strokeWidth="2" />
            <path d="M 20 25 Q 20 15 30 10 L 50 10 Q 60 15 60 25" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="25" cy="28" r="3" fill="currentColor" />
            <circle cx="55" cy="28" r="3" fill="currentColor" />
            {/* Electric bolt symbol */}
            <path d="M 40 12 L 38 18 L 42 18 L 40 24" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      ))}
      <style>{`
        @keyframes moveRight {
          from { transform: translateX(0); }
          to { transform: translateX(calc(100vw + 100px)); }
        }
      `}</style>
    </div>
  )
}
