// import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
// import { Input } from "../ui/input";
import { Facebook, Instagram, Leaf, Twitter } from "lucide-react";
import Image from "next/image";
// bg-[#013220] 
function FooterSection() {
  return (
   

<footer className="w-full  text-lightGreen  mx-auto px-4 py-8  bg-gradient-to-r from-[#004d40]  to-[#00695c]  relative overflow-hidden">
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

