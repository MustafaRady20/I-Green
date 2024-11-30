// import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
// import { Input } from "../ui/input";
import { Facebook, Instagram, Leaf, Twitter } from "lucide-react";
import Image from "next/image";

function FooterSection() {
  return (
    // <footer className="w-full bg-[#013220]">
    //   <div className="container text-lightGreen mx-auto px-4 py-12">
    //     <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
    //       {/* Services Column */}
    //       <div className="space-y-4 text-lightGreen">
    //         <h3 className="text-lg font-semibold">Services</h3>
    //         <nav className="flex flex-col space-y-2">
    //           <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Lawn Maintenance</Link>
    //           <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Irrigation Systems</Link>
    //           <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Landscape Lighting</Link>
    //           <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Seasonal Cleanup</Link>
    //           <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Garden Design</Link>
    //           <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Snow removal</Link>
    //           <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Hardscaping</Link>
    //         </nav>
    //       </div>

    //       {/* Get Started Column 1 */}
    //       <div className="space-y-4">
    //         <h3 className="text-lg font-semibold">Get Started</h3>
    //         <nav className="flex flex-col space-y-2">
    //           <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Careers</Link>
    //           <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Information</Link>
    //           <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">About LawnShaper</Link>
    //           <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Commercial Partners</Link>
    //           <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Contact Us</Link>
    //           <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Blog</Link>
    //         </nav>
    //       </div>

    //       {/* Get Started Column 2 */}
    //       <div className="space-y-4">
    //         <h3 className="text-lg font-semibold">Get Started</h3>
    //         <nav className="flex flex-col space-y-2">
    //           <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Why LawnShaper</Link>
    //           <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Get a Free Estimate</Link>
    //           <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Customer Login</Link>
    //           <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Service Areas</Link>
    //           <Link href="#" className="text-lightGreen hover:text-[#8B9D3C]">Services</Link>
    //         </nav>
    //       </div>

    //       {/* Newsletter Signup */}
    //       <div className="space-y-4">
    //         <h3 className="text-lg font-semibold">Feel free to contact-us.</h3>
    //         <form className="space-y-4">
    //           <div className="flex gap-2">
    //             <Input
    //               type="email"
    //               placeholder="Your email address"
    //               className="flex-1"
    //             />
    //             <Button className=" bg-green-700 rounded-lg  font-medium  hover:bg-yellow-500 hover:text-green-900 transition-colors duration-300 text-Gold">
    //                Request a Quote
    //             </Button>
    //           </div>
    //           {/* <p className="text-sm text-lightGreen">
    //             Sign up to receive our Free Lawn Care Guide and to stay in the loop with new service offerings and updates!
    //           </p> */}
    //         </form>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Bottom Bar */}
    //   <div className="border-t border-bronze">
    //     <div className="container mx-auto px-4 py-4">
    //       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    //         <div className="text-sm text-lightGreen">
    //           <p>LawnShaper 2024 All Rights Reserved</p>
    //           <p>55 Main Street, 2nd Blok, 3rd Floor, New York City</p>
    //         </div>
    //         <div className="flex items-center gap-8 text-sm  text-lightGreen">
    //           <div className="flex items-center gap-2">
    //             <span>Just Mail Us:</span>
    //             <Link href="mailto:support@gmail.com" className="text-Gold hover:text-lightgreen transition-colors duration-300hover:underline">
    //               support@gmail.com
    //             </Link>
    //           </div>
    //           <div className="flex items-center gap-2">
    //             <span>Need help? Call Us:</span>
    //             <Link href="tel:+1800900122" className="text-Gold hover:text-lightgreen transition-colors duration-300 hover:underline">
    //               +1800900122
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>



<footer className="w-full  text-lightGreen  mx-auto px-4 py-8 bg-[#013220]  relative overflow-hidden">
{/* Background Decorative Leaves */}
<div className="absolute right-52 -bottom-10 opacity-10">
  <Image src="/tree3.png" width={800} height={600} className=" h-full w-full " alt="Logo" />
</div>
{/* <div className="absolute left-0 bottom-0 opacity-10">
  <Image src="/tree2.png" width={900} height={600} className= "  h-full w-full " alt="Logo" />
</div> */}
<div className="absolute left-0 bottom-0 opacity-5">
  <Leaf className="w-64 h-64 -rotate-45" />
</div>
<div className="absolute right-0 bottom-0 opacity-5">
  <Leaf className="w-64 h-64 rotate-45" />
</div>

<div className="container mx-auto px-4 flex flex-col items-center gap-6">
  {/* Logo */}
  <div className="flex items-center gap-2 ">
    {/* <Leaf className="w-6 h-6" />  */}
    <div className="lg:flex items-center hidden   justify-center" >
          <Image src="/logo.png" className=" " alt="Logo" width={100} height={100}  />
       
        </div>
    {/* <span className="text-2xl font-medium">I-Green</span> */}
  </div>

  {/* Free Quote Button */}
  <Link
    href="#quote"
    className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-Gold text-Gold hover:bg-green-50 transition-colors"
  >
    <Leaf className="w-4 h-4" />
    <span>Free Quote</span>
  </Link>

  {/* Contact Info */}
  <div className="text-center ">
    <p className="mb-1">Call Us: 800-454-9722</p>
    <p>New York, USA - 1060 Firs Avenue, Muswell Hill</p>
  </div>

  {/* Social Links */}
  <div className="flex gap-4 ">
    <Link href="#" className="hover:text-bronze ">
      <Facebook className="w-5 h-5" />
      <span className="sr-only">Facebook</span>
    </Link>
    <Link href="#" className="hover:text-bronze ">
      <Twitter className="w-5 h-5" />
      <span className="sr-only">Twitter</span>
    </Link>
    <Link href="#" className="hover:text-bronze ">
      <Instagram className="w-5 h-5" />
      <span className="sr-only">Instagram</span>
    </Link>
  </div>

  {/* Copyright */}
  <div className="text-center text-sm text-darkgray space-y-1">
    <p>© 2025 I-Green. All rights reserved.</p>
    <p>Proudly powered by WordPress</p>
  </div>
</div>
</footer>
  );
}

export default FooterSection;

