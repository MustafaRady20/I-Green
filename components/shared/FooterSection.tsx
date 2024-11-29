import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";

function FooterSection() {
  return (
    <footer className="w-full bg-[#013220]">
      <div className="container text-lightGreen mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Services Column */}
          <div className="space-y-4 text-lightGreen">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Lawn Maintenance</Link>
              <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Irrigation Systems</Link>
              <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Landscape Lighting</Link>
              <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Seasonal Cleanup</Link>
              <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Garden Design</Link>
              <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Snow removal</Link>
              <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Hardscaping</Link>
            </nav>
          </div>

          {/* Get Started Column 1 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get Started</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Careers</Link>
              <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Information</Link>
              <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">About LawnShaper</Link>
              <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Commercial Partners</Link>
              <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Contact Us</Link>
              <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Blog</Link>
            </nav>
          </div>

          {/* Get Started Column 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get Started</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Why LawnShaper</Link>
              <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Get a Free Estimate</Link>
              <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Customer Login</Link>
              <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Service Areas</Link>
              <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Services</Link>
            </nav>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Feel free to contact-us.</h3>
            <form className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1"
                />
                <Button className=" bg-green-700 rounded-lg  font-medium  hover:bg-yellow-500 hover:text-green-900 transition-colors duration-300 text-Gold">
                   Request a Quote
                </Button>
              </div>
              {/* <p className="text-sm text-lightGreen">
                Sign up to receive our Free Lawn Care Guide and to stay in the loop with new service offerings and updates!
              </p> */}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-bronze">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-lightGreen">
              <p>LawnShaper 2024 All Rights Reserved</p>
              <p>55 Main Street, 2nd Blok, 3rd Floor, New York City</p>
            </div>
            <div className="flex items-center gap-8 text-sm  text-lightGreen">
              <div className="flex items-center gap-2">
                <span>Just Mail Us:</span>
                <Link href="mailto:support@gmail.com" className="text-Gold hover:text-lightgreen transition-colors duration-300hover:underline">
                  support@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <span>Need help? Call Us:</span>
                <Link href="tel:+1800900122" className="text-Gold hover:text-lightgreen transition-colors duration-300 hover:underline">
                  +1800900122
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
