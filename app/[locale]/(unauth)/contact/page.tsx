 "use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { LeafIcon } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <div className="absolute inset-0">
          <Image
            layout="fill"
            src="/hero.jpg"
            alt="Plant terrarium on desk"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* <div className="relative justify-center  h-[85%] max-w-6xl w-full flex items-end  px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Contact-us</h1>
        </div> */}
        <div className="absolute inset-0 bg-gradient-to-r w-full from-black/40 to-black/10" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative  flex flex-col justify-end h-[85%] px-16 max-w-6xl mx-auto"
      >
        <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
        Contact-us
        </h1>
        
      </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-44 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className=" p-6 rounded-lg">
              <h2 className="text-6xl font-bold text-darkgreen mb-8">
                Bring nature<br />in your home
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="Your address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="Your phone" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project">Project Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Full Project Management" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full">Full Project Management</SelectItem>
                      <SelectItem value="partial">Partial Project</SelectItem>
                      <SelectItem value="consultation">Consultation Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Project Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe briefly"
                    className="h-32"
                  />
                </div>
                {/* <Button className="w-auto bg-green-700 hover:bg-green-800">
                  Get Free Quote
                </Button> */}

                <Button
              size="lg"
              type="submit"
              className="w-full bg-darkgreen hover:bg-darkgreen/90 text-white py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] font-medium"
              asChild
            >
              <span className="flex text-deepGreen  cursor-pointer hover:text-white justify-center items-center" >
              <LeafIcon size={30}  className="    mr-2" />
                           Get Free Quote
              </span>
             
            </Button>

          
              </form>
            </div>

            {/* Map */}
            <div className="h-[500px] lg:h-auto relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3454.722275823645!2d31.449224075552575!3d30.016129974937787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAwJzU4LjEiTiAzMcKwMjcnMDYuNSJF!5e0!3m2!1sen!2seg!4v1733093236265!5m2!1sen!2seg" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

