import { useEffect, useState } from 'react'
import { Leaf, TreeDeciduous, Sprout, Flower2, Sun } from 'lucide-react'

const icons = [Leaf, TreeDeciduous, Sprout, Flower2, Sun]

export function LoadingSpinner() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 5) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-screen bg-[#1a3a1a]">
      <div className="relative w-40 h-40 md:w-60 md:h-60" aria-label="Loading" role="status">
        {icons.map((Icon, index) => {
          const angle = (index * 360) / icons.length
          const x = 50 + 40 * Math.cos((angle * Math.PI) / 180)
          const y = 50 + 40 * Math.sin((angle * Math.PI) / 180)
          return (
            <div
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                animation: `pulse 1.5s ease-in-out ${index * 0.3}s infinite`,
              }}
            >
              <Icon
                className="w-8 h-8 md:w-12 md:h-12 text-[#ffd700]"
                style={{ transform: `rotate(${rotation}deg)` }}
              />
            </div>
          )
        })}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-[#2d5a2d] border-t-[#ffd700] animate-spin"></div>
        </div>
      </div>
    </div>
  )
}
