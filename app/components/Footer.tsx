import Image from "next/image";
import Link from "next/link";
import UnicusLogo from "../images/logo/3.png"
import FacebookLogo from "../images/facebook.svg"
import InstagramLogo from "../images/instagram.svg"
import TwitterLogo from "../images/twitter.svg"
import LinkedinLogo from "../images/linkedin.svg"
import YoutubeLogo from "../images/youtube.svg"


export default function Footer() {
    return (
        <>
            <footer id="footer" className="text-white text-center md:text-left py-10 px-6">
                <div className="md:w-[90%] mx-auto">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <div className="flex flex-col items-center gap-16">
                            <Link className="w-auto h-auto cursor-pointer" href="/">
                                <Image
                                    alt="logo"
                                    src={UnicusLogo}
                                    width={60}
                                    height={60}
                                    className="object-cover"
                                />
                            </Link>
                            <div className="flex gap-5 items-center">
                                <Link href="">
                                    <Image
                                        alt="logo"
                                        src={FacebookLogo}
                                        width={18}
                                        height={18}
                                        className="w-3 md:w-5"
                                    />
                                </Link>
                                <Link href="https://twitter.com/UveraMobility">
                                    <Image
                                        alt="logo"
                                        src={TwitterLogo}
                                        width={18}
                                        height={18}
                                        className="w-5 md:w-7"
                                    />
                                </Link>
                                <Link href="https://www.youtube.com/@UveraMobility/">
                                    <Image
                                        alt="logo"
                                        src={YoutubeLogo}
                                        width={18}
                                        height={18}
                                        className="w-5 md:w-7"
                                    />
                                </Link>
                                <Link href="http://www.instagram.com/uveramobility/">
                                    <Image
                                        alt="logo"
                                        src={InstagramLogo}
                                        width={18}
                                        height={18}
                                        className="w-5 md:w-7"
                                    />
                                </Link>
                                <Link href="http://www.linkedin.com/company/uveramobility/">
                                    <Image
                                        alt="logo"
                                        src={LinkedinLogo}
                                        width={18}
                                        height={18}
                                        className="w-5 md:w-7"
                                    />
                                </Link>
                            </div>
                            <div className="h-40 w-[1px] bg-white hidden md:block" />
                        </div>
                        <div className="md:-order-10 md:w-1/2 md:pr-10 md:pt-[90px] mt-4 md:border-t border-white">
                            <p>
                            Founded in 2023, Uvera Mobility is a Delhi-based EV startup that intends to improve people&#39;s access to efficient, eco-friendly, and technologically advanced mobility solutions. We are on a mission to revolutionize the world of transportation with cutting-edge electric vehicle solutions that blend brains, brawn, and sustainability.
                            </p>
                            {/* <p className="mt-4 md:mt-6">
                            MAD follows all financial regulations set forth for non-profits by
                            the Government of India, and is audited annually.
                        </p> */}
                            <ul className="mt-10 space-y-3">
                                <li className="text-xl font-bold">Contact Us</li>
                                <li>hello@uveramobility</li>
                                <li>+91 9718122534</li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 md:text-right md:pt-[90px] mt-10 md:mt-4 md:border-t border-white">
                            <ul className="space-y-4">
                                <li className="relative group">
                                    <Link href="/about">
                                        About
                                    </Link></li>
                                <li className="relative group">
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
                                        >
                                            Blog
                                        </a>


                                        <a
                                            className={
                                                "text-base py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
                                            }
                                        >
                                            Careers
                                        </a>
                                    </div>
                                </li>
                                <li className="cursor-pointer">
                                    <Link href="/contact">
                                        Contact
                                    </Link>
                                </li>
                                {/* <li className="text-xl font-bold">Contact Us</li>
                            <li>unicusmobility@gmail.com</li>
                            <li>+91 9718122534</li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-1 items-center footer-links mt-20 md:mt-10 text-[10px] md:text-xs">
                        <div className="">Uvera Mobility Pvt. Ltd., New Delhi, India</div>
                        <div className="text-base md:text-lg font-[600]">Proudly curated with⚡in India</div>
                        <div>©2023 All Rights Reserved</div>
                    </div>
                </div>
            </footer>
        </>
    );
}