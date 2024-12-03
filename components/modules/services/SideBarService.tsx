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