'use client';
import React, { useState } from 'react';
// import { MapPin, Phone, Mail } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: 'residential',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-darkgreen/10 border border-Gold/20 rounded-lg focus:border-Gold focus:ring-1 focus:ring-Gold transition-all"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 bg-darkgreen/10 border border-Gold/20 rounded-lg focus:border-Gold focus:ring-1 focus:ring-Gold transition-all"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>
      <div>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 bg-darkgreen/10 border border-Gold/20 rounded-lg focus:border-Gold focus:ring-1 focus:ring-Gold transition-all"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <select
          className="w-full px-4 py-3 bg-darkgreen/10 border border-Gold/20 rounded-lg focus:border-Gold focus:ring-1 focus:ring-Gold transition-all"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        >
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="industrial">Industrial</option>
        </select>
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full px-4 py-3 bg-darkgreen/10 border border-Gold/20 rounded-lg focus:border-Gold focus:ring-1 focus:ring-Gold transition-all resize-none"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-darkgreen hover:bg-darkgreen/90 text-white py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] font-medium"
      >
        Send Message
      </button>
    </form>
  );
}