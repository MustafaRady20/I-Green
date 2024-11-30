'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, {  once:true, amount: 'all',  }) 
    
  
  return (  
    <main className="w-full bg-[#ffffff] relative  overflow-hidden px-4 pt-24 h-full">
      <section  ref={ref} className="container mx-auto max-w-6xl relative  w-full ">
        <div className="grid grid-cols-2 text-deepGreen gap-8 text-center md:grid-cols-4 lg:grid-cols-4">
          <StatItem value={24} suffix="+" label="years of experience" isInView={isInView} />
          <StatItem value={1000} label="Projects Completed" isInView={isInView} />
          <StatItem value={4.9} decimals={1} label="Customer Satisfaction" isInView={isInView} />
          <StatItem value={2} label="Service Awards" isInView={isInView} />
          {/* <StatItem value={2} label="Service Awards" isInView={isInView} /> */}
        </div>
          {/* <motion.div  className="absolute h-full   opacity-70   right-0  inset-0 " 
            initial={{ x: 100 }} 
            animate={{ x: -100  }} 
            transition={{ duration: 1.75 }}
          >
            <Image 
              src={"/tree3.png"}  
              width={200} 
              height={200} 
              alt="sd" 
              className="object-cover object-center absolute right-24 -bottom-5 " 
            />
          </motion.div> */}

      </section>
    </main>
  )
}

interface StatItemProps {
  value: number
  suffix?: string
  decimals?: number
  label: string
  isInView: boolean
}

function StatItem({ value, suffix = '', decimals = 0, label, isInView }: StatItemProps) {
  return (
    <div> 
      <motion.div 
        className="text-5xl text-darkgreen font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CountingNumber value={value} suffix={suffix} decimals={decimals} isInView={isInView} />
      </motion.div>
      <motion.div 
        className="text-2xl text-darkgray"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {label}
      </motion.div>
    </div>
  )
}

interface CountingNumberProps {
  value: number
  suffix?: string
  decimals?: number
  isInView: boolean
}
 

function CountingNumber({ value, suffix = '', decimals = 0, isInView }: CountingNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)

  React.useEffect(() => {
    if (!isInView || !ref.current || !scroll ) return

    const animationDuration = 2500 // 2 seconds
    const frameDuration = 1000 / 60 // 60 fps
    const totalFrames = Math.round(animationDuration / frameDuration)

    let frame = 0
    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const currentCount = Math.round(value * progress)

      if (ref.current) {
        ref.current.textContent = currentCount.toFixed(decimals) + suffix
      }

      if (frame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)

    return () => clearInterval(counter)
  }, [value, suffix, decimals, isInView])

  return <span ref={ref}>0{suffix}</span>
}

export default Stats
