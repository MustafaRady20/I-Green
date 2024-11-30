import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <div className="absolute inset-0">
          <Image
            layout="fill"
            src="/hero.jpg"
            alt="Plant terrarium on desk"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative h-full flex items-center px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Contacts</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
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
                <Button className="w-auto bg-green-700 hover:bg-green-800">
                  Get Free Quote
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="h-[600px] lg:h-auto relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926!3d48.8583736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTEnMzAuMCJOIDLCsDE3JzMyLjQiRQ!5e0!3m2!1sen!2s!4v1629789309"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

