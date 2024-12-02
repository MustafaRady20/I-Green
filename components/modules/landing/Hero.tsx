'use client';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { LeafIcon } from "lucide-react"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import React from "react"
// import { TopBar } from "@/components/shared/TopBar";
import { motion } from "framer-motion"
// import { FaLeaf } from "react-icons/fa";

export function Hero() {
  const Gallery = [
    {
      id: 1,
      src: "/hero.jpg",
      alt: "Lawn care background",
    },
    {
      id: 2,
      src: "/hero.jpg",
      alt: "Lawn care background",
    },
    {
      id: 3,
      src: "/hero.jpg",
      alt: "Lawn care background",
    },
    {
      id: 4,
      src: "/hero.jpg",
      alt: "Lawn care background",
    },
    {
      id: 5,
      src: "/hero.jpg",
      alt: "Lawn care background",
    },
  ]

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  React.useEffect(() => {
    // Auto-play functionality
    const interval = setInterval(() => {
      api?.scrollNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [api])
  return (
    <div className="relative h-[500px]  md:h-[600px] 2xl:h-[850px] flex-col  flex items-center justify-center">
         
   {/* <TopBar />  */}
    
     
    <Carousel setApi={setApi}
      className="absolute  inset-0 h-full w-full"
      opts={{
        align: "start",
        loop: true,
      }} orientation="horizontal"     >
      <CarouselContent className=" h-[500px]   md:h-[600px] 2xl:h-[850px]">
        {Gallery.map((item,index) => (
          <CarouselItem className="relative z-30 p-0" key={item.id}>
            <Image
              src={item.src}
              alt={item.alt}
              className="object-cover   object-center w-full h-full"
              width={1920}
              height={1080}
              priority={index === 0}
              />

          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute inset-0  bg-lightGreen/5" /> 
      
      <div className="absolute right-4 top-1/2 flex z-30 -translate-y-1/2 flex-col gap-2">
        {Gallery.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className="group p-2"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                current === index
                  ? "bg-white"
                  : "bg-white/50 group-hover:bg-white/75"
              )}
            />
          </button>
        ))}
      </div>
    </Carousel>
    {/* <motion.div 
      className="absolute h-full -top-12 opacity-70  right-0  inset-0 " 
      initial={{ x: 100 }} 
      animate={{ x: -100  }} 
      transition={{ duration: 1.75 }}
    >
      <Image 
        src={"/circuit1.png"}  
        width={800} 
        height={600} 
        alt="sd" 
        className="object-cover object-center absolute -right-56 -rotate-90" 
      />
    </motion.div> */}

    {/* <motion.div className="absolute h-full -top-8 opacity-65 inset-0 " 
      initial={{ x: 100 }} 
      animate={{ x:  -50  }} 
      transition={{ duration: 1.75 }}  >

    <Image src={'/tree2.png'} alt={"sa"} width={600} height={400} className="absolute rotate-180  -right-40 -top-8" />

    </motion.div> */}
     
      {/* </div> */}

      {/* Content */}
      <motion.div  
      variants={
        {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }
      }
      initial={{ x: -100 }} 
      animate={{ x: 0  }} 
       transition={{ duration: 1.5 }}
      className="container    mx-auto px-4 relative z-10 text-white">
        <div className="md:max-w-2xl max-w-xs h-full   ">
          <h3 className=" text-sm  md:text-lg items-center flex font-normal mb-4">
            <div className="text-lightGreen flex mr-2 items-center  relative ">
              {/* <Image src="/leaf.png" width={40} height={40} className="rotate-180" alt="Logo" /> */}
              <Image src="/leaf.png" width={30} height={30} className="  " alt="Logo" />

            </div>
            <span className="text-bronze" >
              I
              </span>-GREEN  LANDSCAPE SOLUTIONS
          </h3>
          <h1 className="text-xl md:text-4xl text-white lg:text-5xl tracking-widest leading-relaxed font-bold mb-6">Innovating Landscapes with AI and Automation</h1>
          {/* <p className="text-lg md:text-xl mb-8 opacity-90">
            
          </p> */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="sm"
              className="bg-Gold border border-Gold/50 hover:bg-darkgreen hover:text-white transition-colors delay-150   text-darkgreen   rounded-lg  font-medium"
              asChild
            >
              <span className="flex text-deepGreen hover:text-white justify-center items-center" >
              <LeafIcon size={30}  className="    mr-2" />
              <Link className="   text-lg " href="/estimate">Read more</Link>
              </span>
             
            </Button>
            {/* <Button
              size="lg"
              // variant="default"
              className="bg-[#003300] text-white hover:text-Gold hover:bg-deepGreen   rounded-[8px]  font-medium"
              asChild
            >
              <Link href="/about">ABOUT US</Link>
            </Button> */}
          </div>
        </div>
      </motion.div>

      {/* <section className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
          
     
        </section> */}
    </div>
  )
}
{/* <Button className="text-white bg-[#006400] hover:bg-Gold rounded-xl font-medium">
<LeafIcon className="w-4  h-4 mr-2" />
GET YOUR QUOTE
</Button> */}