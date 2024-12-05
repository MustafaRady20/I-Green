'use client'
import React from 'react';
// import { motion } from 'framer-motion';
import Image from 'next/image';
// import { cn } from '@/components/utils/cn';
// import { serviceContents, works } from '@/data/constants';
// import { useParams } from 'next/navigation';


// interface ServiceContentProps {
//   serviceId: string;
// }
const content = {
  title: `FutureScape Services`,
  description: `Our cutting-edge sfd technology for $sd is designed to revolutionize your outdoor spaces. We utilize advanced eco-friendly nanotech and AI-driven solutions to create sustainable, self-maintaining landscapes of the future.`,
  videoUrl: 'https://www.example.com/futuristic-landscape-video.mp4',
  galleryImages: [
    '/futuristic-landscape-1.jpg',
    '/futuristic-landscape-2.jpg',
    '/futuristic-landscape-3.jpg',
  ],
}

export function ServiceContent( ) {

  // const params = useParams();

  
  // const content = serviceContents[params.id as keyof typeof serviceContents];
  // if (!content) {
  //   return null;
  // }
  return (
    // <div className="flex-1 p-12 ">
    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5 }}
    //     className="max-w-4xl"
    //   >
    //     <h1 className="text-4xl font-semibold text-darkgreen mb-8">{content.title}</h1>
    //     <div className="space-y-6">
    //       {content.content.map((paragraph, index) => (
    //         <p key={index} className="text-gray-600 leading-relaxed">
    //           {paragraph}
    //         </p>
    //       ))}
    //     </div>

    //     <div className="mt-16">
    //       <h2 className="text-3xl font-semibold text-darkgreen mb-8">Works</h2>
    //       <div className="grid grid-cols-1   w-full h-full  gap-6  lg:grid-cols-2 " style={
    //         {
    //           // gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    //           // gridAutoRows: "200px"

    //         }

    //       }>
    //         {works.map((image) => (
    //           <div
    //             key={image.id}
    //             className={cn(

    //               "group relative cursor-pointer  overflow-hidden rounded-lg  transition-all hover:opacity-90",
    //               // sizeStyle[image.size]
    //             )}
    //           // onClick={() => setSelectedImage(image.id)}
    //           >
    //             <Image
    //               src={image.image}
    //               alt={image.title}
    //               width={1920}
    //               height={1080}
    //               className={`object-cover   transition-transform duration-300 group-hover:scale-105 object-center w-full h-full `}
    //             />
    //             {/* // className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" */}

    //             <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    //             <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    //               <span className="text-white text-sm font-medium">View Image</span>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </motion.div>
    // </div>
    <div className="flex-1  p-6 rounded-lg neon-border">
      <h2 className="text-3xl font-bold mb-4 text-darkgreen neon-text">{content.title}</h2>
      <p className="mb-6 text-darkgreen">{content.description}</p>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-[var(--neon-blue)]">Holographic Preview</h3>
        <div className="relative w-full max-w-2xl aspect-video">
          {/* <video
            autoPlay
            loop 
            muted
            playsInline
            width={1920}
            height={1080}

            controls 
            className="w-full h-full object-cover rounded-lg"
             src='/Royalty Stock Footage And Video Footage2.mp4'
            poster="/pexels-q-l-1447393640-29512043.jpg"
          >
            <source src={'/Royalty Stock Footage And Video Footage2.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <video
      className={` absolute inset-0 h-full w-full object-cover `}
      autoPlay
      muted
      loop
      playsInline
  poster='/pexels-q-l-1447393640-29512043.jpg'
      preload="auto"
    >
      <source
        src="/Royalty Stock Footage And Video Footage2.mp4"
        type="video/mp4"
      />{" "}
      Your browser does not support the video tag.
    </video>
          {/* <div className="absolute inset-0 bg-gradient-to-r from-datext-darkgreen via-[var(--neon-blue)] to-[var(--neon-purple)] opacity-20 rounded-lg"></div> */}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-[var(--neon-purple)]">Quantum Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {content.galleryImages.map((src, index) => (
            <div key={index} className="relative group">
              <Image
           src={ '/pexels-q-l-1447393640-29512043.jpg'}
           alt={`Gallery Image ${index + 1}`}
                width={300}
                height={200}
                className="rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-datext-darkgreen via-[var(--neon-blue)] to-[var(--neon-purple)] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}