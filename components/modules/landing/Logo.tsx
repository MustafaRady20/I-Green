import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/logo.png"
              alt="Bloom Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </div>
  )
}

export default Logo