import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-darkgreen/10 flex items-center justify-center">
          <MapPin className="w-6 h-6 text-Gold" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-dabg-darkgreen">Our Location</h3>
          <p className="text-dabg-darkgreen/80">123 Main Street, Apartment 4A, New York, NY 10001</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-darkgreen/10 flex items-center justify-center">
          <Phone className="w-6 h-6 text-Gold" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-dabg-darkgreen">Phone Number</h3>
          <p className="text-dabg-darkgreen/80">(555) 123-4567</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-darkgreen/10 flex items-center justify-center">
          <Mail className="w-6 h-6 text-Gold" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-dabg-darkgreen">Email Address</h3>
          <p className="text-dabg-darkgreen/80">contact@example.com</p>
        </div>
      </div>
    </div>
  );
}