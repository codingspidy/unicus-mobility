'use client'
import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bars3Icon as MenuIcon, XMarkIcon as CloseIcon } from "@heroicons/react/24/solid"
import UnicusLogo from "../images/unicus-logo.png"

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
      <header id="navbar" className={scroll ? "fixed w-full top-0 z-[99] header-fixed transition-all ease-in-out" : "fixed w-full top-0 z-[99] transition-all ease-in-out"}>
        <div className="innerDiv mx-auto">
          <nav className="flex justify-between lg:items-center">
            <a className="inline-block py-4">
              <Image src={UnicusLogo} alt="" width={1116} height={1118} className="object-cover w-[45px] md:w-[60px]" />
            </a>
            <div className="inline-flex items-center">
              <div className="lg:block hidden">
                <ul className="flex items-center gap-x-5 text-[15px] text-white">
                  <li className="px-2 py-1">Home</li>
                  <li className="px-2 py-1 group relative">
                    Book/Rent
                    <div
                      className={
                        `hidden hover:block group-hover:block bg-white absolute top-[30px] left-2 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                      }
                      style={{ minWidth: "12rem" }}
                    >
                      <a
                        href="#pablo"
                        className={
                          "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                        onClick={(e) => e.preventDefault()}
                      >
                        Personal Commute
                      </a>
                      <a
                        href="#pablo"
                        className={
                          "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                        onClick={(e) => e.preventDefault()}
                      >
                        Delivery (Rentals)
                      </a>
                      <a
                        href="#pablo"
                        className={
                          "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                        onClick={(e) => e.preventDefault()}
                      >
                        Fleeting
                      </a>
                    </div>
                  </li>
                  <li className="px-2 py-1 relative group">
                    About
                    <div
                      className={
                        `hidden hover:block group-hover:block bg-white absolute top-[30px] left-2 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                      }
                      style={{ minWidth: "12rem" }}
                    >
                      <a
                        href="#pablo"
                        className={
                          "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                        onClick={(e) => e.preventDefault()}
                      >
                        Our Values
                      </a>
                      <a
                        href="#pablo"
                        className={
                          "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                        onClick={(e) => e.preventDefault()}
                      >
                        Our Solution
                      </a>
                      <a
                        href="#pablo"
                        className={
                          "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                        onClick={(e) => e.preventDefault()}
                      >
                        Media
                      </a>
                      <a
                        href="#pablo"
                        className={
                          "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                        onClick={(e) => e.preventDefault()}
                      >
                        Gallery
                      </a>
                    </div>
                  </li>
                  <li className="px-2 py-1 relative group">
                    Explore
                    <div
                      className={
                        `hidden hover:block group-hover:block bg-white absolute top-[30px] left-2 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1`
                      }
                      style={{ minWidth: "12rem" }}
                    >
                      <a
                        href="#pablo"
                        className={
                          "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                        onClick={(e) => e.preventDefault()}
                      >
                        Blog
                      </a>
                      <a
                        href="#pablo"
                        className={
                          "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                        onClick={(e) => e.preventDefault()}
                      >
                        Skill Development
                      </a>
                      <a
                        href="#pablo"
                        className={
                          "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                        onClick={(e) => e.preventDefault()}
                      >
                        Flagship 3-wheeler
                      </a>
                      <a
                        className={
                          "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                        onClick={(e) => e.preventDefault()}
                      >
                        Careers
                      </a>
                      <a
                        className={
                          "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                        onClick={(e) => e.preventDefault()}
                      >
                        Initiatives
                      </a>
                    </div>
                  </li>
                  <li className="px-2 py-1 cursor-pointer">
                    <Link href="/contact">
                      Contact
                    </Link>
                  </li>
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

      <div className={`mobile-menu bg-black transform transition-transform duration-300 ease-in-out ${showMenu ? " fixed effect-code inset-0 w-full sm:h-full h-screen z-[9999] translate-x-0 py-8 sm:overflow-y-visible overflow-y-scroll" : "py-8 fixed inset-0 w-full sm:h-full h-screen z-[9999] effect-code translate-x-full sm:overflow-y-visible overflow-y-scroll"}`}>
        <a
          className="cursor-pointer text-white absolute top-5 right-4"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <CloseIcon className="w-8" />
        </a>

        <ul className="min-h-[80%] flex flex-col justify-center items-center gap-y-5 text-[22px] text-white">
          <li className="px-2 py-1">Home</li>
          <li className="px-2 py-1 relative">
            Book/Rent
            <div
              className={
                `hidden hover:block bg-white absolute top-16 left-0 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1`
              }
              style={{ minWidth: "12rem" }}
            >
              <a
                href="#pablo"
                className={
                  "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                }
                onClick={(e) => e.preventDefault()}
              >
                Action
              </a>
              <a
                href="#pablo"
                className={
                  "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                }
                onClick={(e) => e.preventDefault()}
              >
                Another action
              </a>
              <a
                href="#pablo"
                className={
                  "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                }
                onClick={(e) => e.preventDefault()}
              >
                Something else here
              </a>
            </div>
          </li>
          <li className="px-2 py-1">About</li>
          <li className="px-2 py-1">Explore</li>
          <li className="px-2 py-1 cursor-pointer">
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
