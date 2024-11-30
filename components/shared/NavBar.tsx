"use client";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "../ui/button";

import { useState } from "react";
import { LeafIcon, Menu, XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { FaBehanceSquare } from "react-icons/fa";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
// import { TopBar } from "./TopBar";
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  }

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  }

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
      : "  transition-transform delay-150 absolute mx-auto top-14 lg:top-10 "
  } transition-all ease-linear  duration-300 w-full top-10 z-50  isolate bg-clip-padding h-36 px-4 py-4`}
>
      <div className={`mx-auto bg-[#013220] text-white ${scroll ? ' w-full ' : '' }  font-serif transition-colors  flex  max-w-6xl py-2 px-12  rounded-3xl   items-center justify-between`}>
        <Link className="lg:flex items-center hidden   justify-center" href="#">
          <Image src="/logo.png" className=" " alt="Logo" width={100} height={100}  />
       
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden lg:items-center text-2xl font-medium  font-serif    lg:justify-center space-x-11 w-full lg:flex`}>
          <Link className="text-bronze " href="/">
            Home
          </Link>
          <Link className="hover:text-[#D4AF37] " href="/about">
            About
          </Link>
          <Link className=" hover:text-[#D4AF37]" href="/services">
            Services
          </Link>
          <Link className=" hover:text-[#D4AF37]" href="/gallery">
            Gallery
          </Link>
          <Link className=" hover:text-[#D4AF37]" href="/contact">
            Contact
          </Link>
        </div>
      
        {/* Get Quote Button */}
        {/* <Button className="hidden lg:flex rounded-[16px] lg:w-40 bg-[#ebdfc4] px-4 py-2  font-medium text-teal-900 shadow-sm hover:bg-teal-50">
          Get Quote
        </Button> */}

        <Button  className="text-[#013220] border   hover:bg-Gold border-yellow-500 bg-Gold hover:text-white rounded-lg font-medium">
            <LeafIcon className="w-4 h-4 mr-2 " />
            GET YOUR QUOTE
          </Button>
            {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={toggleMenu}>
          <Menu size={30} />
          
        </button>
      </div>
      {/* Mobile Side Drawer Menu */}
      {/* <div
        className={`fixed top-0 h-screen right-0 transition-all duration-200   px-6 flex flex-col justify-around py-12 w-full   bg-lightGreen  shadow-lg  
          ${isMenuOpen ? "translate-x-0 animate-in  " : "translate-x-full h-full hidden"}`}
      >
        <header className="flex justify-between w-full  ">
        <Image src="/logo.png" className=" " alt="Logo" width={100} height={100}  />
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
        <div className="flex flex-col h-full w-full mt-20 font-normal text-3xl gap-y-11">
        <Link className="text-bronze " href="/">
            Home
          </Link>
          <Link className="hover:text-[#D4AF37] " href="/about">
            About
          </Link>
          <Link className=" hover:text-[#D4AF37]" href="/services">
            Services
          </Link>
          <Link className=" hover:text-[#D4AF37]" href="/gallery">
            Gallery
          </Link>
          <Link className=" hover:text-[#D4AF37]" href="/contact">
            Contact
          </Link>
        </div>
        <div className="flex justify-center space-x-6">
          <FaBehanceSquare size={30} />
          <BsInstagram size={30} />
          <BsLinkedin size={30} /> 

        </div>
      </div> */}

<AnimatePresence>
{isMenuOpen && (
  <motion.div
    initial="closed"
    animate="open"
    exit="closed"
    variants={menuVariants}
    className="fixed top-0 right-0 h-screen w-full bg-lightGreen shadow-lg flex flex-col justify-between py-12 px-6 z-50"
  >
    <header className="flex justify-between w-full">
      <Image src="/logo.png" alt="Logo" width={100} height={100} /> 

      <button onClick={toggleMenu}>
        <XIcon
          size={30}
          color="#134A55"
          className={`duration-75 text-[#134A55] transition-transform ${
            isMenuOpen ? 'rotate-0' : 'rotate-45'
          }`}
        /> 
      </button>
    </header>
    <nav className="flex flex-col h-full w-full mt-20 font-normal text-3xl gap-y-11">
      {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item, index) => (
        <motion.div
          key={item}
          variants={linkVariants}
          transition={{ delay: 0.1 * index }}
        >
          <Link
            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            className={`hover:text-[#D4AF37] transition-colors ${
              item === 'Home' ? 'text-bronze' : ''
            }`}
            onClick={toggleMenu}
          >
            {item}
          </Link>
        </motion.div>
      ))}
    </nav>
    <motion.div
      className="flex justify-center space-x-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <FaBehanceSquare size={30} className="text-[#134A55] hover:text-[#D4AF37] transition-colors" />
      <BsInstagram size={30} className="text-[#134A55] hover:text-[#D4AF37] transition-colors" />
      <BsLinkedin size={30} className="text-[#134A55] hover:text-[#D4AF37] transition-colors" />
    </motion.div>
  </motion.div>
)}
</AnimatePresence>
    </nav>
    </>
  );
}

export default NavBar;


