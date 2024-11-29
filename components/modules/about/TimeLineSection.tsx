import React from 'react'

function TimeLineSection() {
  return (
    <main className="relative px-6 pb-28  h-full  w-full overflow-hidden">
    <div className=" mx-auto px-4 flex justify-center items-center">
      <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
        {/* Left Column */}
        <div className="space-y-8 md:col-span-2">
          <div className="">
            <h3 className="text-lg text-[#134A55] font-bold">
              Lorem Ipsum
            </h3>
            <p className="text-[#134A55] text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="h-32 hidden md:block"></div>
          <div className="">
            <h3 className="text-lg text-[#134A55] font-bold">
              Lorem Ipsum
            </h3>
            <p className="text-[#134A55] text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* Center Line */}
        <div className="hidden md:flex flex-col w-24 mx-auto items-center">
          <div className="w-1 rounded-full bg-[#134A55] h-full"></div>
          <div className="absolute top-0 w-4 h-4 bg-[#134A55] rounded-full"></div>
          <div className="absolute top-40 w-4 h-4 bg-[#134A55] rounded-full"></div>
          <div className="absolute top-80 w-4 h-4 bg-[#134A55] rounded-full"></div>
          <div className="absolute top-[470px] w-4 h-4 bg-[#134A55] rounded-full"></div>
        </div>

        {/* Right Column */}
        <div className="space-y-8 md:col-span-2">
          <div className="h-32 hidden md:block"></div>
          <div className="w-full">
            <h3 className="text-lg text-[#134A55] font-bold">
              Lorem Ipsum
            </h3>
            <p className="text-[#134A55] text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="h-32 hidden md:block"></div>
          <div className="w-full">
            <h3 className="text-lg text-[#134A55] font-bold">
              Lorem Ipsum
            </h3>
            <p className="text-[#134A55] text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default TimeLineSection