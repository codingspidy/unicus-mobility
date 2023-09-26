'use client'
import Image from 'next/image'
import React from 'react'
import UnicusLogo from "../images/unicus-logo-2.png"
import StudentBike from "../images/students-ebike.webp"
import jmiLogo from "../images/jmi-logo.webp"
import SaeLogo from "../images/sae-logo.webp"
import DominosLogo from "../images/dominos-logo.webp"
import CartLogo from "../images/cart-logo.webp"
import mbLogo from "../images/mb-logo.webp"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";

const About = () => {
    return (
        <>
            <section className='bg-[#ffffff] pt-[125px] sm:pt-[140px] lg:pt-[160px]'>
                <div className="px-4 pb-[70px]">
                    <div className='max-w-[900px] mx-auto'>
                        <h2 className='text-center text-[26px] md:text-[42px] font-bold text-secondary'>Who Are We</h2>
                        <h4 className="text-primary text-center font-medium md:text-lg mt-3">Charge up, go far– Sustainability in motion.</h4>
                        <p className="text-[15px] md:text-[16px] text-primary mt-4 leading-normal">
                            Founded in 2023, Uvera Mobility is a Delhi-based EV startup that intends to improve people&#39;s access to efficient, eco-friendly, and technologically advanced mobility solutions. We are on a mission to revolutionize the world of transportation with cutting-edge electric vehicle solutions that blend brains, brawn, and sustainability.
                        </p>
                        <p className="text-[15px] md:text-[16px] text-primary mt-5 font-semibold leading-normal">Vision: Enabling Generations to Drive Sustainably</p>
                        <p className="text-[15px] md:text-[16px] text-primary mt-5 leading-normal">Because a chain is only as strong as its weakest link, we are overhauling the entire process, from design and production to retail and e-commerce, all the way to problem-solving and reshaping service. In the spirit of aligning ourselves with the government&#39;s aim of making India self-reliant (called &#34;Aatma Nirbhar Bharat&#34;), Uvera Mobility intends to establish itself as a pivotal hub in the EV ecosystem, wherein it facilitates the development of smart mobility solutions, the proliferation of EV-specific training opportunities for technicians and engineers, and the consolidation of EV-specific learning materials for consumers. With this, we want to contribute our part in shaping India’s EV industry.</p>
                    </div>
                </div>

                {/* <div className='theme-gradient px-4 mt-20 flex flex-col items-center'>
                    <Image src={UnicusLogo} className='w-[250px] md:w-[400px] mx-auto' alt="" />
                    <h4 className='text-lg md:text-2xl text-white -translate-y-[80px] md:-translate-y-[120px]'>#SustainableFutureSimplified</h4>
                </div> */}
                {/* <section>
                    <div className="py-20 px-4">
                        <div className="relative max-w-screen-lg mx-auto campaign-slider">
                            <div className="max-w-[950px] mx-auto">
                                <h3 className="text-3xl md:text-4xl md:text-center text-secondary font-semibold mb-3">
                                    Services
                                </h3>
                                <p className='text-primary font-medium md:text-lg mb-10 w-fit md:mx-auto md:text-center'>
                                    We offer a wide range of services in the EV space. 100% Made in India electric vehicles.
                                </p>
                                <Swiper
                                    slidesPerView={1}
                                    modules={[Autoplay, Navigation]}
                                    navigation={{ nextEl: "#next-slider", prevEl: "#prev-slider" }}
                                    autoplay={{
                                        delay: 2000,
                                    }}
                                    breakpoints={{
                                        480: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                >
                                    <SwiperSlide className="px-1 w-fit">
                                        <div className="w-fit">
                                            <div className="mb-[9px]">
                                                <Image
                                                    className="object-cover lg:w-72 h-56 rounded-xl"
                                                    src={StudentBike}
                                                    width={333}
                                                    height={500}
                                                    alt=""
                                                />
                                            </div>
                                            <p className='text-primary text-lg mt-2 leading-normal font-medium mb-[7px]'>Ebikes for Students and Working Professionals</p>
                                            <Link href="" className="text-secondary text-lg">
                                                <span>Read more</span>
                                                <i className="fa-solid fa-chevron-right text-base ml-2"></i>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="px-1 w-fit">
                                        <div className="w-fit">
                                            <div className="mb-[9px]">
                                                <Image
                                                    className="object-cover lg:w-72 h-56 rounded-xl"
                                                    src={StudentBike}
                                                    width={333}
                                                    height={500}
                                                    alt=""
                                                />
                                            </div>
                                            <p className='text-primary text-lg mt-2 leading-normal font-medium mb-[7px]'>Ebikes for Students and Working Professionals</p>
                                            <Link href="" className="text-secondary text-lg">
                                                <span>Read more</span>
                                                <i className="fa-solid fa-chevron-right text-base ml-2"></i>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="px-1 w-fit">
                                        <div className="w-fit">
                                            <div className="mb-[9px]">
                                                <Image
                                                    className="object-cover lg:w-72 h-56 rounded-xl"
                                                    src={StudentBike}
                                                    width={333}
                                                    height={500}
                                                    alt=""
                                                />
                                            </div>
                                            <p className='text-primary text-lg mt-2 leading-normal font-medium mb-[7px]'>Ebikes for Students and Working Professionals</p>
                                            <Link href="" className="text-secondary text-lg">
                                                <span>Read more</span>
                                                <i className="fa-solid fa-chevron-right text-base ml-2"></i>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="px-1 w-fit">
                                        <div className="w-fit">
                                            <div className="mb-[9px]">
                                                <Image
                                                    className="object-cover lg:w-72 h-56 rounded-xl"
                                                    src={StudentBike}
                                                    width={333}
                                                    height={500}
                                                    alt=""
                                                />
                                            </div>
                                            <p className='text-primary text-lg mt-2 leading-normal font-medium mb-[7px]'>Ebikes for Students and Working Professionals</p>
                                            <Link href="" className="text-secondary text-lg">
                                                <span>Read more</span>
                                                <i className="fa-solid fa-chevron-right text-base ml-2"></i>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <button
                                className="swiper-button-prev sm:block hidden shadow-2xl"
                                id="prev-slider"
                            ></button>
                            <button
                                className="swiper-button-next sm:block hidden shadow-2xl"
                                id="next-slider"
                            ></button>
                        </div>
                    </div>
                </section> */}
                {/* <div className='py-20'>
                    <div className='innerDiv mx-auto'>
                        <h3 className="text-center text-secondary text-3xl md:text-4xl font-bold">Clients</h3>
                        
                        <div id="clientsSlider" className='mt-12 w-fit mx-auto'>
                            <Swiper
                                className=''
                                modules={[Autoplay]}
                                //spaceBetween={30}
                                slidesPerView={3}
                                breakpoints={{
                                    480: {
                                        width: 320,
                                        slidesPerView: 4,
                                        // spaceBetween: 15,
                                    },
                                    640: {
                                        width: 640,
                                        slidesPerView: 5,
                                        //spaceBetween: 20,
                                    },
                                }}
                                autoplay
                            >
                                <SwiperSlide>
                                    <Image className="mx-6 lg:mx-10 w-16 md:w-[80px] lg:w-[90px]" src={mbLogo} alt='' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="mx-6 lg:mx-10 w-16 md:w-[80px] lg:w-[90px]" src={DominosLogo} alt='' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="mx-6 lg:mx-10 w-16 md:w-[80px] lg:w-[90px]" src={jmiLogo} alt='' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="mx-6 lg:mx-10 w-16 md:w-[80px] lg:w-[90px]" src={CartLogo} alt='' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image className="mx-6 lg:mx-10 w-16 md:w-[80px] lg:w-[90px]" src={SaeLogo} alt='' />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="mt-16 max-w-[900px] mx-auto">
                            <h4 className="text-secondary font-semibold mt-10 text-lg md:text-xl">Green Initiatives</h4>
                            <p className="text-primary leading-normal mt-2">We have initiatives like tree plantation for every electric vehicle manufactured as well as when the vehicles reach milestones like 100, 500, or 1000 kilometres of driving, etc. These trees and seedlings are cared for by our business. Giving back to nature could rank among our greatest accomplishments. In our workplace, we promote going digital wherever feasible in order to decrease the amount of paper used. To save energy, we select lighting and office equipment that is energy-efficient. To increase our influence, we are always willing to collaborate with other initiatives or groups who share our concern for the environment. Last but not least, we provide incentives or awards for customers that adopt eco-friendly practises, such utilising recyclable containers or bags.</p>
                            <h4 className="text-secondary font-semibold mt-10 text-lg md:text-xl">Education Initiatives</h4>
                            <p className="text-primary leading-normal mt-2">We concentrate on bringing awareness of EVs and their sustainability to a wide audience, including high school and college students as well as members of the public and business sectors. We host free-of-cost webinars and workshops on EV technology and maintenance for the general public and potential EV owners.   We frequently collaborate with educational institutions to provide teachers and students EV education and training. We emphasise the value of sustainability to our customers and staff, encouraging them to make more eco-friendly decisions in both their personal and professional life. One of our teams is involved in curating online courses and tutorials on EV technology, charging infrastructure, and related topics. We establish partnerships with local governments and organizations to promote EV adoption and provide education and resources to underserved communities.</p>
                        </div>
                    </div>
                </div> */}
                <div className="bg-black text-white w-full px-4 lg:px-0 py-16 md:py-20">
                    <div className="max-w-[900px] mx-auto">
                        <div className="">
                            <div className="md:mb-0 mb-6">
                                <h3 className="text-3xl lg:text-4xl font-medium mb-2">
                                    Let&#39;s work together!
                                </h3>
                                <p className="">
                                    Join us as an intern or a full-time/part time employee.
                                </p>
                            </div>
                            <div className="mt-7">
                                <div className="md:flex gap-x-4 items-start">
                                    <div className='flex flex-col gap-4 w-full'>
                                        <label className="block w-full">
                                            <input
                                                className="placeholder:text-[#646464] block w-full bg-[#0d0d0d] rounded-md py-3 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500"
                                                placeholder="Your Name"
                                                type="text"
                                            />
                                        </label>
                                        <div className='flex flex-col md:flex-row gap-4'>
                                            <label className="block w-full">
                                                <input
                                                    className="placeholder:text-[#646464] block w-full bg-[#0d0d0d] rounded-md py-3 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500"
                                                    placeholder="Email"
                                                    type="email"
                                                />
                                            </label>
                                            <label className="block mb-4 w-full">
                                                <input
                                                    className="placeholder:text-[#646464] block w-full bg-[#0d0d0d] rounded-md py-3 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500"
                                                    placeholder="Phone"
                                                    type="phone"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <label className="block mb-4 w-full h-full">
                                        <textarea
                                            className="placeholder:text-[#646464] block h-[140px] md:h-[112px] w-full bg-[#0d0d0d] rounded-md py-3 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500"
                                            placeholder="Message"
                                        ></textarea>
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="py-3 px-6 bg-white text-black font-medium lg:float-right rounded-md"
                                >
                                    Request
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style global jsx>
                {`
         #navbar {
             background: #000000;
         }
         `}
            </style>
        </>
    )
}

export default About
