'use client';
import { useToast } from '@/hooks/use-toast';
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

  const { toast } = useToast()
  const [loading, setLoading] = useState(false);

  async function sendMessageToTelegram(message: string) {
    setLoading(true);
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: new URLSearchParams({ message: message }).toString(),
    });
    const data = await response.json();
    if (data.success) {
      setLoading(false);
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you soon",
        variant: "default",
      })
    } else {
      setLoading(false);
      toast({ 
        title: "Failed to send message",
        description: "Please try again later",
        variant: "destructive",
      })
    }
  }
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
    sendMessageToTelegram(JSON.stringify(formData));
     
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
        disabled={loading || !formData.name || !formData.email || !formData.phone || !formData.message}
        className="w-full bg-darkgreen hover:bg-darkgreen/90 text-white py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] font-medium"
      >
        Send Message
      </button>
    </form>
  );
}