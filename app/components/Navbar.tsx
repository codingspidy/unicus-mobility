'use client'
import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bars3Icon as MenuIcon, XMarkIcon as CloseIcon } from "@heroicons/react/24/solid"
import UnicusLogo from "../images/logo/1.png"
import FacebookLogo from "../images/facebook.svg"
import InstagramLogo from "../images/instagram.svg"
import TwitterLogo from "../images/twitter.svg"
import LinkedinLogo from "../images/linkedin.svg"
import YoutubeLogo from "../images/youtube.svg"

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
            <Link href="/" className="inline-block py-4">
              <Image src={UnicusLogo} alt="" className="object-cover w-[130px] md:w-[170px]" />
            </Link>
            <div className="inline-flex items-center">
              <div className="lg:block hidden">
                <ul className="flex items-center gap-x-5 text-[15px] text-white">
                  {/* <li className="px-2 py-2">
                    <Link href="/">
                      Home
                    </Link>
                  </li> */}
                  {/* <li className="px-2 py-2 group relative">
                    Book/Rent
                    <div
                      className={
                        `hidden hover:block group-hover:block bg-white absolute top-[36px] left-2 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1`
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
                  </li> */}
                  <li className="px-2 py-2 relative group">
                    <Link href="/about">
                      About
                    </Link>
                    {/* <div
                      className={
                        `hidden hover:block group-hover:block bg-white absolute top-[36px] left-2 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1`
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
                    </div> */}
                  </li>
                  <li className="px-2 py-2 relative group">
                    Explore
                    <div
                      className={
                        `hidden hover:block group-hover:block bg-white absolute top-[36px] left-2 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1`
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
                      {/* <a
                        href="#pablo"
                        className={
                          "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                        onClick={(e) => e.preventDefault()}
                      >
                        Skill Development
                      </a> */}
                      {/* <a
                        href="#pablo"
                        className={
                          "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                        onClick={(e) => e.preventDefault()}
                      >
                        Flagship 3-wheeler
                      </a> */}
                      <a
                        className={
                          "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                        onClick={(e) => e.preventDefault()}
                      >
                        Careers
                      </a>
                      {/* <a
                        className={
                          "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                        }
                        onClick={(e) => e.preventDefault()}
                      >
                        Initiatives
                      </a> */}
                    </div>
                  </li>
                  <li className="px-2 py-2 cursor-pointer">
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
            <div className="hidden gap-5 items-center md:flex">
              <Link href="">
                <Image
                  alt="logo"
                  src={FacebookLogo}
                  width={18}
                  height={18}
                  className="w-3"
                />
              </Link>
              
              <Link href="https://www.youtube.com/@UveraMobility/">
                <Image
                  alt="logo"
                  src={YoutubeLogo}
                  width={18}
                  height={18}
                  className="w-5"
                />
              </Link>
              <Link href="http://www.instagram.com/uveramobility/">
                <Image
                  alt="logo"
                  src={InstagramLogo}
                  width={18}
                  height={18}
                  className="w-5"
                />
              </Link>
              <Link href="http://www.linkedin.com/company/uveramobility/">
                <Image
                  alt="logo"
                  src={LinkedinLogo}
                  width={18}
                  height={18}
                  className="w-5"
                />
              </Link>
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
          <CloseIcon className="w-[30px]" />
        </a>

        <ul className="min-h-[80%] flex flex-col justify-center items-center gap-y-5 text-[19px] text-white">
          {/* <li className="px-2 py-1">
            <Link href="/">
              Home
            </Link>
          </li> */}
          {/* <li className="px-2 py-1 relative">
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
          </li> */}
          <li className="px-2 py-1">
            <Link href="/about">
              About
            </Link>
          </li>
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
