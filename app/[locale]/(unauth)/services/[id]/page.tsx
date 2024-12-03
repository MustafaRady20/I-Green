/* eslint-disable @typescript-eslint/no-unused-vars */




import { Hero } from '@/components/modules/services/HeroService';
import { ServiceContent } from '@/components/modules/services/ServiceContent';
// import { ServiceContent } from '@/components/modules/services/ServiceContent'
import { Sidebar } from '@/components/modules/services/SideBarService';
import { Link } from '@/i18n/routing';
import React from 'react'


const services = [
  { id: 'gardens', title: 'Gardens' },
  { id: 'urban', title: 'Urban' },
  { id: 'maintenance', title: 'Maintenance' },
  { id: 'events', title: 'Events' }
];



export async function getStaticPaths() {
  // Replace with your projects' IDs

  const paths = services.map((service) => ({
    params: { id: service.id },
  }));

  return { paths, fallback: false }; // 404 for undefined project IDs
}


function page({
  children, params
}: { children: React.ReactNode, params: { id: string } }) {



  return (
    <div className="h-full bg-[#fbfaf6] overflow-hidden flex flex-col w-full">
      <Hero />
      <div className="h-full md:px-48 md:py-12  flex-col-reverse md:flex-row flex">
        <Sidebar />
        <main className="flex-1">
          {/* {
            children
        } */}
          <ServiceContent />
        </main>
      </div>
    </div>
  )
}

export default page