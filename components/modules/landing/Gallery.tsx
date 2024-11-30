'use client'

import { motion } from 'framer-motion'
import { TreesIcon as Tree, Mountain, Flower2, Home, Sprout, BuildingIcon as Buildings } from 'lucide-react'
import { useState } from 'react'
// import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
// import { DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

// Gallery item type
type GalleryItem = {
  id: number
  title: string
  category: string
  image: string
  icon: JSX.Element
}

// Sample gallery data
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Modern Garden Design',
    category: 'Gardens',
    image: '/potflower.jpg?height=400&width=600',
    icon: <Sprout className="w-6 h-6" />,
  },
  {
    id: 2,
    title: 'Urban Park Project',
    category: 'Urban',
    image: '/potflower.jpg?height=400&width=600',
    icon: <Buildings className="w-6 h-6" />,
  },
  {
    id: 3,
    title: 'Residential Landscape',
    category: 'Gardens',
    image: '/potflower.jpg?height=400&width=600',
    icon: <Home className="w-6 h-6" />,
  },
  {
    id: 4,
    title: 'Mountain Resort',
    category: 'Events',
    image: '/potflower.jpg?height=400&width=600',
    icon: <Mountain className="w-6 h-6" />,
  },
  {
    id: 5,
    title: 'Botanical Garden',
    category: 'Gardens',
    image: '/potflower.jpg?height=400&width=600',
    icon: <Flower2 className="w-6 h-6" />,
  },
  {
    id: 6,
    title: 'Forest Trail',
    category: 'Urban',
    image: '/potflower.jpg?height=400&width=600',
    icon: <Tree className="w-6 h-6" />,
  },
]

const categories = ['All', 'Events', 'Gardens', 'Interiors', 'Maintance', 'Urban']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  )
 
   const router = useRouter()
  return (
    <main className="w-full bg-[#fbfaf6] h-full pb-44 px-4 ">
 <section className='container pt-12 max-w-7xl mx-auto'>

 {/* header */} 
        <header className=" w-full text-deepGreen mb-4 flex justify-between items-start ">
            <div className="flex   flex-col  gap-2">
            <h1 className="text-4xl font-bold">Our Gallery</h1>
            <p className="text-lg text-darkgray">
            Explore our latest projects and designs
            </p> 
           
            </div>
            {/* <div className="flex mt-2  justify-end ">
            <button className="text-darkgreen hover:text-[#65a30d]  hover:underline inline-flex items-center gap-2 font-medium">
            VIEW GALLERY
            <ArrowRight className="h-4 w-4" />
          </button>
        </div> */}
          
        </header>

      {/* Filter Buttons */}
      <div className="flex flex-wrap text-deepGreen  justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category)}
            className={`transition-all hover:text-Gold duration-300 ${selectedCategory === category && "bg-darkgreen  text-white hover:bg-darkgreen"}  ` }

          >
            {category}
          </Button>
        ))}
      </div>
      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:min-h-[500px] md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-lg ">
              <Image 
               width={600}
                height={400}
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Futuristic Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent backdrop-blur-0" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* <DialogTrigger asChild> */}
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                    //   onClick={() => {
                    //     document.getElementById('gallery-item-title')!.textContent = item.title;
                    //     (document.getElementById('gallery-item-image') as HTMLImageElement).src = item.image;
                    //     (document.getElementById('gallery-item-image') as HTMLImageElement).alt = item.title;
                    //   }}
                      onClick={() =>  router.push('/gallery')}
                    >
                      View Gallery
                    </Button>
                  {/* </DialogTrigger> */}
                </div>

                {/* Title with Tech Effect */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="text-white text-xl font-bold mb-2"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.div
                    initial={{ width: '0%' }}
                    whileHover={{ width: '100%' }}
                    className="h-0.5 bg-primary"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More Button */}
      <div className="text-center  mt-12">
        <Button
          variant="link"
          className="group  text-darkgreen underline text-lg hover:animate-pulse hover:text-deepGreen  relative overflow-hidden"
        > 
          <Link href={"/gallery"} className="relative  z-10">Full portofolio </Link>
          {/* <div className="absolute inset-0 bg-Gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" /> */}
        </Button>
      </div>
      </section>

    </main>
  )
}

