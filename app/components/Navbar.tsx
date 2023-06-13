'use client'
import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bars3Icon as MenuIcon, XMarkIcon as CloseIcon } from "@heroicons/react/24/solid"
import UnicusLogo from "../images/unicus-logo.webp"

const Navbar: NextComponentType = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);
  return (
    <>
      <header className={scroll ? "fixed w-full top-0 z-[99] bg-black transition-all ease-in-out" : "fixed w-full top-0 z-[99] transition-all ease-in-out"}>
        <div className="innerDiv mx-auto">
          <nav className="flex justify-between lg:items-center">
            <a className="inline-block py-4">
              <Image src={UnicusLogo} alt="" className="object-cover w-[50px] h-[60px] md:w-[60px] md:h-[65px]" />
            </a>
            <div className="inline-flex items-center">
              <div className="lg:block hidden">
                <ul className="flex items-center gap-x-5 text-[15px] text-white">
                  <li className="px-2 py-1">Home</li>
                  <li className="px-2 py-1">Book/Rent</li>
                  <li className="px-2 py-1">About</li>
                  <li className="px-2 py-1">Explore</li>
                  <li className="px-2 py-1">Contact</li>
                </ul>
              </div>

              <a
                className="inline-block lg:hidden cursor-pointer menu-icon"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                <MenuIcon className="w-[27px] text-white" />
              </a>
            </div>
          </nav>
        </div>
      </header>

      <div className={showMenu ? "bg-black fixed effect-code inset-0 w-full sm:h-full h-screen z-[9999] translate-y-0 py-8 sm:overflow-y-visible overflow-y-scroll" : "bg-black py-8 fixed inset-0 w-full sm:h-full h-screen z-[9999] effect-code translate-y-[10000px] sm:overflow-y-visible overflow-y-scroll"}>
        <a
          className="cursor-pointer text-white absolute top-4 right-4"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <CloseIcon className="w-10 h-10" />
        </a>

        <ul className="min-h-[80%] flex flex-col justify-center items-center gap-y-5 text-[22px] text-white">
          <li className="px-2 py-1">Home</li>
          <li className="px-2 py-1">Book/Rent</li>
          <li className="px-2 py-1">About</li>
          <li className="px-2 py-1">Explore</li>
          <li className="px-2 py-1">Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
