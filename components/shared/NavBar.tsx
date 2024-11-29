"use client";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "../ui/button";

import { useState } from "react";
import { LeafIcon, XIcon } from "lucide-react";
import { FaBehanceSquare } from "react-icons/fa";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
// import { TopBar } from "./TopBar";
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // className={`${
  //   scroll
  //     ? " lg:sticky lg:!w-[70%] absolute mx-auto lg:top-5 rounded-3xl shadow-sm"
  //     : "absolute "
  // } transition-all duration-500   w-full top-8 z-50 isolate bg-clip-padding  shadow-lg ring-1 ring-black/5 h-20 px-4 py-4`}

  return (
    <> 
    {/* {
      !scroll && <TopBar /> 
    } */}
    <nav 
    // className={`lg:fixed w-full top-8 z-50   shadow-lg ring-1 ring-black/5 h-20 px-4 py-4`}



  className={`${
    scroll
      ? " lg:fixed  flex  items-center  lg:w-full overflow-hidden absolute mx-auto justify-center lg:top-0 "
      : "absolute  "
  } transition-all ease-linear  duration-300 w-full top-10 z-50  isolate bg-clip-padding     h-36 px-4 py-4`}
>
      <div className={`mx-auto bg-[#013220] text-white ${scroll ? ' w-full ' : '' }  font-serif transition-colors  flex  max-w-6xl py-2 px-12  rounded-3xl   items-center justify-between`}>
        <Link className="lg:flex items-center hidden   justify-center" href="#">
          <Image src="/logo.png" className=" " alt="Logo" width={100} height={100}  />
       
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden lg:items-center text-2xl font-medium  font-serif    lg:justify-center space-x-11 w-full lg:flex`}>
          <Link className="text-bronze " href="#">
            Home
          </Link>
          <Link className="hover:text-[#D4AF37] " href="/about">
            About
          </Link>
          <Link className=" hover:text-[#D4AF37]" href="#">
            Services
          </Link>
          <Link className=" hover:text-[#D4AF37]" href="#">
            Gallery
          </Link>
          <Link className=" hover:text-[#D4AF37]" href="#">
            Contact
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {/* <Menu size={30} /> */}
          <Image
            src="/menue.png"
            alt="Logo"
            width={40}
            quality={90}
            height={40}
          />
        </button>
        {/* Get Quote Button */}
        {/* <Button className="hidden lg:flex rounded-[16px] lg:w-40 bg-[#ebdfc4] px-4 py-2  font-medium text-teal-900 shadow-sm hover:bg-teal-50">
          Get Quote
        </Button> */}

        <Button className="text-[#013220] border   hover:bg-Gold border-yellow-500 bg-Gold hover:text-white rounded-lg font-medium">
            <LeafIcon className="w-4  h-4 mr-2 " />
            GET YOUR QUOTE
          </Button>
      </div>
      {/* Mobile Side Drawer Menu */}
      <div
        className={`fixed top-0 h-screen right-0 transition-transform duration-200 px-6 flex flex-col justify-around py-12 w-full   bg-[#F7F2E7]  shadow-lg  
          ${isMenuOpen ? "translate-x-0  " : "translate-x-full h-full hidden"}`}
      >
        <header className="flex justify-between  ">
          <Image src="/Layer_1.svg" alt="Logo" width={80} height={80} />
          <button onClick={toggleMenu}>
            <XIcon
              size={30}
              color="#134A55"
              className={`duration-75 text-[#134A55] transition-transform ${
                isMenuOpen ? "rotate-0" : "rotate-45"
              }`}
            />
          </button>
        </header>
        <div className="flex flex-col mt-20 font-normal text-3xl gap-y-11">
          <Link className="text-teal-900 hover:text-teal-700" href="#">
            About
          </Link>
          <Link className="text-teal-900 hover:text-teal-700" href="#">
            Marketing
          </Link>
          <Link className="text-teal-900 hover:text-teal-700" href="#">
            Media Production
          </Link>
          <Link className="text-teal-900 hover:text-teal-700" href="#">
            Tech
          </Link>
          <Link className="text-teal-900 hover:text-teal-700" href="#">
            Portfolio
          </Link>
          <Link className="text-teal-900 hover:text-teal-700" href="#">
            Blogs
          </Link>
          <Link className="text-[#ea5f0a] hover:text-teal-700" href="#">
            Jobs
          </Link>
          <Link className="text-teal-900 hover:text-teal-700" href="#">
            Language
          </Link>
        </div>
        <footer className="grid grid-cols-2 pt-8 gap-4 w-full">
          <div className=" flex flex-col">
            <div className="mb-7">
              <p className="text-[#EA5F0A]">
                20 <br /> 25
              </p>
            </div>
            <div className="flex justify-start gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <FaBehanceSquare className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <BsInstagram className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <BsLinkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="">
            <h4 className="font-normal text-base mb-7">Contact</h4>
            <a
              href="mailto:support@suiiz.com"
              className=" font-bold text-xl leading-6 hover:underline block mb-1"
            >
              support@suiiz.com
            </a>
            <a
              href="tel:012 345 6789"
              className=" font-bold text-xl leading-6 hover:underline block"
            >
              012 345 6789
            </a>
          </div>
        </footer>
      </div>
    </nav>
    </>
  );
}

export default NavBar;
