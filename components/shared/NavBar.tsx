"use client";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "../ui/button";

import { useState } from "react";
import { LeafIcon, Menu, XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { FaBehanceSquare } from "react-icons/fa";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

  

useEffect(() => {
  if (isMenuOpen) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  // Cleanup when the component unmounts
  return () => {
    document.body.classList.remove("no-scroll");
  };
}, [isMenuOpen]);


const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  const path = usePathname();
  const router = useRouter();
  return (
    <>
      <nav
        className={`
           transition-all overflow-hidden    absolute  mx-auto     lg:top-10 ease-linear  duration-150 w-full -top-2 z-50  isolate bg-clip-padding h-36 lg:px-4 py-2 2xl:py-4`}
      >
        <div
          className={`mx-auto  bg-[#013220]  text-white   font-serif transition-colors w-full  flex  2xl:max-w-5xl lg:max-w-4xl py-2 lg:px-8  px-10 2xl:px-12  lg:rounded-3xl   items-center justify-between`}
        >
          <Link
            className="lg:flex items-center hidden cursor-pointer   justify-center"
            href="/"
          >
            <Image
              src="/logo.png"
              className=" "
              alt="Logo"
              width={100}
              height={100}

            />
          </Link>

          {/* Desktop Menu */}
          <div
            className={`hidden lg:items-center text-lg xl:text-2xl font-medium  font-serif    lg:justify-center space-x-2 lg:space-x-9 2xl:space-x-11 w-full lg:flex`}
          >
            <Link
              className={`${path === "/" ? "text-bronze" : "text-white"
                } hover:text-[#D4AF37]`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`${path === "/about" ? "text-bronze" : "text-white"
                } hover:text-[#D4AF37]`}
              href="/about"
            >
              About
            </Link>
            <Link
              className={`${path.startsWith("/services") ? "text-bronze" : "text-white"
                } hover:text-[#D4AF37]`}
              href="/services/gardens"
            >
              Services
            </Link>
            <Link
              className={`${path === "/gallery" ? "text-bronze" : "text-white"
                } hover:text-[#D4AF37]`}
              href="/gallery"
            >
              Gallery
            </Link>
            <Link
              className={`${path === "/contact" ? "text-bronze" : "text-white"
                } hover:text-[#D4AF37]`}
              href="/contact"
            >
              Contact
            </Link>
          </div>

          {/* Get Quote Button */}
          {/* <Button className="hidden lg:flex rounded-[16px] lg:w-40 bg-[#ebdfc4] px-4 py-2  font-medium text-teal-900 shadow-sm hover:bg-teal-50">
          Get Quote
        </Button> */}

          <Button
            size={"lg"}
            onClick={
              () => {
                router.push("/contact");
              }}
            className="text-[#013220] border hidden lg:flex   hover:bg-Gold border-yellow-500 bg-Gold hover:text-white rounded-lg font-medium"
          >
            <LeafIcon className="w-4 h-4 mr-2 " />
            GET YOUR QUOTE
          </Button>
          <Link              href="/"
 className="lg:hidden flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <h1 className="text-xl font-bold  leading-loose tracking-widest">
            I-GREEN
            </h1>
          </Link>
          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={toggleMenu}>
            <Menu size={30} />
          </button>
        </div>
        {/* Mobile Side Drawer Menu */}
 
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 h-full overflow-y-hidden no-scroll   right-0 overflow-hidden w-full bg-[#fbfaf6] shadow-lg flex flex-col justify-around py-12 px-6 z-50"
            >
              <header className="flex justify-between w-full">
                <Link  onClick={toggleMenu}  href="/">
                  <Image src="/logo.png" alt="Logo" width={100} height={100} />
                </Link>
                <button onClick={toggleMenu}>
                  <XIcon
                    size={30}
                    color="#134A55"
                    className={`duration-75 text-[#134A55] transition-transform ${isMenuOpen ? "rotate-0" : "rotate-45"
                      }`}
                  />
                </button>
              </header>
              <nav className="flex flex-col h-full overflow-hidden w-full mt-10 font-normal text-3xl gap-y-6">
                {["Home", "About", "Services", "Gallery", "Contact"].map((item, index) => (
                  <motion.div
                    key={item}
                    variants={linkVariants}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={
                        item === "Home"
                          ? "/"
                          : item === "Services"
                            ? "/services/gardens"
                            : `/${item.toLowerCase()}`
                      }
                      className={`hover:text-[#D4AF37] transition-colors ${path === "/" && item === "Home"
                          ? "text-bronze"
                          : path === `/${item.toLowerCase()}` ||
                            (item === "Services" && path.startsWith("/services"))
                            ? "text-bronze"
                            : "text-[#013220]"
                        }`}
                      onClick={toggleMenu}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={linkVariants} transition={{ delay: 0.5 }}>
                  <Button
                    size={"sm"}
                    className="text-[#013220] border hover:bg-Gold border-yellow-500 bg-Gold hover:text-white rounded-lg font-medium"
                  >
                    <LeafIcon className="w-4 h-4 mr-2 " />
                    GET YOUR QUOTE
                  </Button>
                </motion.div>
              </nav>
              <motion.div
                className="flex justify-center items-center mt-2 space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <FaBehanceSquare
                  size={30}
                  className="text-[#134A55] hover:text-[#D4AF37] transition-colors"
                />
                <BsInstagram
                  size={30}
                  className="text-[#134A55] hover:text-[#D4AF37] transition-colors"
                />
                <BsLinkedin
                  size={30}
                  className="text-[#134A55] hover:text-[#D4AF37] transition-colors"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default NavBar;
