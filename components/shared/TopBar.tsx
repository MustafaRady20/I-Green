import {  Clock, MapPin } from 'lucide-react'

export function TopBar() {
  // bg-gradient-to-r from-[#95ab47]  to-darkgreen
  return (
<div className="w-full    bg-transparent  z-20 absolute top-0 h-12  text-white py-2 px-4">
   <div className="absolute inset-0 bg-black/25"/>
<div className="container z-10 mx-auto flex justify-between items-center text-sm">
      <div className="flex items-center gap-2">
        <span className=" z-10">Transforming landscapes with over 24 years of expertise.</span>
      </div>
      <div className="flex z-10 items-center gap-6">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-Gold" />
          <span>55 Main Street, 2nd Blok, 3rd Floor, New York City</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-Gold" />
          <span>Daily 8am to 6:30pm</span>
        </div>
      </div>
    </div>
  </div>
  )
}

