import { ImageIcon, Layout, Monitor, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

function AboutUsSection() {
  return (
    <section className='lg:px-[289.5px]  font-["Sono"] px-6 text-[#134A55] py-[120px] lg:py-60'>
      <header className="text-center flex gap-11 flex-col justify-center items-center ">
        <h1 className="lg:text-6xl font-semibold  text-4xl lg:leading-[72px]">
          What We do ?
        </h1>
        <p className=" text-xl font-normal  leading-[42px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate
        </p>
      </header>
      <article className="flex flex-col w-full h-full mt-11">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row-dense gap-8">
          <div className="bg-[#FAFAFA] p-6 lg:col-span-1 rounded-lg">
            <Monitor className="w-6 h-6 mb-4 text-gray-800" />
            <h3 className="text-lg  mb-3">Web Design</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              From concept to launch, we create stunning, user-centric websites
              that elevate your brand and engage your audience.
            </p>
          </div>

          <div className="bg-[#FAFAFA] p-6 lg:col-span-1 rounded-lg">
            <Star className="w-6 h-6 mb-4 text-gray-800" />
            <h3 className="text-lg  mb-3">UI/UX Design</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              From concept to launch, we create stunning, user-centric websites
              that elevate your brand and engage your audience.
            </p>
          </div>

          <div className="bg-[#FAFAFA] p-6 lg:col-span-1 rounded-lg">
            <Layout className="w-6 h-6 mb-4 text-gray-800" />
            <h3 className="text-lg  mb-3">Responsive Design</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              From concept to launch, we create stunning, user-centric websites
              that elevate your brand and engage your audience.
            </p>
          </div>

          <div className="bg-[#FAFAFA] lg:col-span-1 lg:row-span-2  p-6 rounded-lg">
            <ShoppingBag className="w-6 h-6 mb-4 text-gray-800" />
            <h3 className="text-lg  mb-3">E-commerce Solutions</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              From concept to launch, we create stunning, user-centric websites
              that elevate your brand and engage your audience.
            </p>
            <div className="relative w-full h-48 rounded-lg overflow-hidden mt-4">
              <Image
                src="/boxes.jpeg"
                alt="Custom development preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="bg-[#FAFAFA] p-6 flex lg:col-span-2  lg:row-span-1 items-start justify-between w-full  rounded-lg">
            <div className="flex flex-col space-y-4">
              <ImageIcon className="w-6 h-6 mb-2 text-gray-800" />
              <h3 className="text-lg  mb-1">Custom Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                From concept to launch, we create stunning, user-centric
                websites that elevate your brand and engage your audience.
              </p>
            </div>
            <div className="relative w-1/2  rounded-lg overflow-hidden">
              <Image
                src="/boxes.jpeg"
                alt="Custom development preview"
                width={200}
                height={200}
                className="object-cover w-48 h-48"
              />
            </div>
          </div>
          <div className="bg-[#FAFAFA] p-6 lg:col-span-1 rounded-lg">
            <Layout className="w-6 h-6 mb-4 text-gray-800" />
            <h3 className="text-lg  mb-3">Responsive Design</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              From concept to launch, we create stunning, user-centric websites
              that elevate your brand and engage your audience.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default AboutUsSection;
