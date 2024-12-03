'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/components/utils/cn';
import { serviceContents, works } from '@/data/constants';
import { useParams } from 'next/navigation';


// interface ServiceContentProps {
//   serviceId: string;
// }

export function ServiceContent( ) {

  const params = useParams();

  
  const content = serviceContents[params.id as keyof typeof serviceContents];
  // if (!content) {
  //   return null;
  // }
  return (
    <div className="flex-1 p-12 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl font-semibold text-darkgreen mb-8">{content.title}</h1>
        <div className="space-y-6">
          {content.content.map((paragraph, index) => (
            <p key={index} className="text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-darkgreen mb-8">Works</h2>
          <div className="grid grid-cols-1   w-full h-full  gap-6  lg:grid-cols-2 " style={
            {
              // gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              // gridAutoRows: "200px"

            }

          }>
            {works.map((image) => (
              <div
                key={image.id}
                className={cn(

                  "group relative cursor-pointer  overflow-hidden rounded-lg  transition-all hover:opacity-90",
                  // sizeStyle[image.size]
                )}
              // onClick={() => setSelectedImage(image.id)}
              >
                <Image
                  src={image.image}
                  alt={image.title}
                  width={1920}
                  height={1080}
                  className={`object-cover   transition-transform duration-300 group-hover:scale-105 object-center w-full h-full `}
                />
                {/* // className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" */}

                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-white text-sm font-medium">View Image</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}