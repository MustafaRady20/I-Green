 "use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { use } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { serviceContents } from '@/data/constants';
import { useParams } from 'next/navigation';

 
export function Hero() {
  const params = useParams();
  console.log(params, 'param of hero')
    // console.log(activeService, 'ss')
  const content = serviceContents[params.id as keyof typeof serviceContents];
 
  return (
    <div className="relative h-[500px] w-full   overflow-hidden">
      <div className="absolute w-full h-full inset-0">
        <Image
        width={1920}
        height={1080}
          src={content?.heroImage || '/pexels-q-l-1447393640-29512043.jpg'}
          alt={content?.heroImageAlt || 'Hero Image'}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r w-full from-black/40 to-black/10" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative  flex flex-col justify-end h-[85%] px-16 max-w-6xl mx-auto"
      >
        <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
          {content?.heroTitle ||'Hero Title'}
        </h1>
        {/* <p className="text-xl text-gray-200 max-w-2xl">
          {content?.heroDescription }
        </p> */}
        
        {/* <div className="absolute bottom-0  left-0 w-full h-24 bg-gradient-to-t to-transparent" /> */}
      </motion.div>
    </div>
  );
}