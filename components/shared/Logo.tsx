import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className="flex items-center  space-x-2">
    {/* <Film className="h-8 w-8 text-primary" /> */}
    <Image src="/logo.svg" alt="Logo" width={60} height={60} />

    <span className="text-2xl text-[#134A55] font-bold ">Suiiz Media</span>
  </div>  )
}

export default Logo