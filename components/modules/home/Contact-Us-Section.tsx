 
 import ContactForm from '@/components/shared/ContactForm'
import ContactInfo from '@/components/shared/ContactInfo'
import LocationMap from '@/components/shared/LocationMap'
import React from 'react'
 
 function ContactUsSection() {
   return (

        <main className=" h-full w-full overflow-hidden bg-[#fbfaf6] ">
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-darkgreen mb-4">Find Our Nearest Location</h1>
          <div className="flex items-center justify-center space-x-4 text-Gold">
            <span>New York</span>
            <span>•</span>
            <span>Los Angeles</span>
            <span>•</span>
            <span>Houston</span>
            <span>•</span>
            <span>Philadelphia</span>
            <span>•</span>
            <span>San Antonio</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <LocationMap />
            <ContactInfo />
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-Gold/10">
            <h2 className="text-2xl font-bold text-darkgreen mb-6">Send Your Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
   )
 }
 
 export default ContactUsSection