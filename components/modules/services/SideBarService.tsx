 "use client";
import { useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import React from 'react';


const services = [
  { id: 'gardens', title: 'Gardens' },
  { id: 'urban', title: 'Urban' },
  { id: 'maintenance', title: 'Maintenance' },
  { id: 'events', title: 'Events' }
];
 
export function Sidebar( ) {
  const params = useParams();

  
  const router = useRouter();

   
  const handleServiceChange = (id: string) => {     
      router.push(`/services/${id}`)
  };
  return (
    <div className="md:w-64  p-12 ">
      <h2 className="text-3xl font-semibold text-darkgreen  mb-6">Services</h2>
      <nav className="space-y-4">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => handleServiceChange(service.id)}
            className={`w-full text-left py-2 text-xl   transition-colors duration-200 ${
              params.id === service.id
                ? 'text-deepGreen underline-offset-4 underline  font-medium'
                : 'text-darkgray hover:text-Gold'
            }`}
          >
            {service.title}
          </button>
        ))}
      </nav>
    </div>
  );
}


//  

import { ChevronDown, ChevronUp } from 'lucide-react'

interface SideNavProps {
  services: { name: string; subservices: string[] }[]
  selectedService?: string
  selectedSubservice?: string
  onServiceSelect?: (service: string) => void
  onSubserviceSelect?: (subservice: string) => void
}

export default function SideNav({
  services,
  selectedService,
  selectedSubservice,
  
}: SideNavProps) {
  return (
    <nav className="w-full md:w-64 mb-8 md:mb-0 md:mr-8">
      {services.map((service) => (
        <div key={service.name} className="mb-4">
          <button
            // onClick={() => onServiceSelect(service.name)}
            className={`w-full text-left p-2 rounded flex justify-between items-center transition-all duration-300 ${
              selectedService === service.name
                ? 'bg-[var(--neon-green)] text-darkgreen neon-border'
                : 'bg-[var(--dark-surface)] text-darkgreen hover:bg-[var(--neon-blue)] hover:text-Gold'
            }`}
          >
            {service.name}
            {selectedService === service.name ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>
          {selectedService === service.name && (
            <ul className="ml-4 mt-2 space-y-2">
              {service.subservices.map((subservice) => (
                <li key={subservice}>
                  <button
                    // onClick={() => onSubserviceSelect(subservice)}
                    className={`w-full text-left p-2 rounded transition-all duration-300 ${
                      selectedSubservice === subservice
                        ? 'bg-[var(--neon-blue)] text-darkgreen neon-border'
                        : 'text-[var(--neon-purple)] hover:bg-[var(--neon-purple)] hover:text-Gold'
                    }`}
                  >
                    {subservice}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </nav>
  )
}

