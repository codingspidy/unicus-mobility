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
            <section className='bg-[#ffffff] pt-[125px] pb-[50px] sm:pt-[140px] sm:pb-[80px] lg:pt-[160px] lg:pb-[120px]'>
                <div className="px-4">
                    <div className='max-w-[900px] mx-auto'>
                        <h2 className='text-center text-[26px] md:text-[42px] font-bold text-secondary'>Who Are We</h2>
                        <h4 className="text-primary text-center font-medium md:text-lg mt-3">Charge up, go far– Sustainability in motion.</h4>
                        <p className="text-[15px] md:text-[16px] text-primary mt-4 leading-normal">
                            Founded in 2022, Unicus Mobility is an electric vehicle startup that aims to design, develop, and manufacture state-of-the-art intelligent modern and sustainable mobility solutions. While e-bikes are not a new concept, they do represent a growing demand for new forms of transportation that are both economical and environmentally friendly. Our ideation process started when we saw logistics fleets using fuel bikes and rushing through the congested streets. Further, we observed the hassles involved in the daily commute that are faced by students and urban professionals who are looking for a simple way to get to and from work. We thought of designing e-bikes that are not just compact in size but also have a strong build; and that are not just advanced in technology, but are also in budget.</p>
                        <p className="text-[15px] md:text-[16px] text-primary mt-3 leading-normal">We envision green mobility to be a reality, with all the vehicles on the road using sustainable methods for running. Now the industry is decentralizing, and we want to make an impact by using advanced technology and perpetual innovation.</p>
                        <p className="text-[15px] md:text-[16px] text-primary mt-3 leading-normal">We are proud to be offering cutting-edge technological solutions for the retrofitting of two-wheelers.</p>
                    </div>
                </div>

                <div className='theme-gradient px-4 mt-20 flex flex-col items-center'>
                    <Image src={UnicusLogo} className='w-[250px] md:w-[400px] mx-auto' alt="" />
                    <h4 className='text-lg md:text-2xl text-white -translate-y-[80px] md:-translate-y-[120px]'>#SustainableFutureSimplified</h4>
                </div>
                <section>
                    <div className="py-20 px-4">
                        <div className="relative max-w-screen-lg mx-auto campaign-slider">
                            <div className="max-w-[950px] mx-auto">
                                <h3 className="text-center text-3xl md:text-4xl text-secondary font-semibold mb-8">
                                    Services
                                </h3>
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
                                            <p className='text-lg mt-2 leading-normal font-medium mb-[7px]'>Ebikes for Students and Working Professionals</p>
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
                                            <p className='text-lg mt-2 leading-normal font-medium mb-[7px]'>Ebikes for Students and Working Professionals</p>
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
                                            <p className='text-lg mt-2 leading-normal font-medium mb-[7px]'>Ebikes for Students and Working Professionals</p>
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
                                            <p className='text-lg mt-2 leading-normal font-medium mb-[7px]'>Ebikes for Students and Working Professionals</p>
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
                </section>
                <div className='py-20'>
                    <div className='innerDiv mx-auto'>
                        <h3 className="text-center text-secondary text-3xl md:text-4xl font-bold">Clients</h3>
                        <div className="overflow-x-scroll scrollbar-hide">
                            <div className="mt-12 flex items-center md:justify-center gap-12 md:gap-16">
                                <Image src={mbLogo} alt="" />
                                <Image src={DominosLogo} alt="" />
                                <Image src={jmiLogo} alt="" />
                                <Image src={CartLogo} alt="" />
                                <Image src={SaeLogo} alt="" />
                            </div>
                        </div>
                        <div className="mt-16 max-w-[900px] mx-auto">
                            <h4 className="text-secondary font-semibold mt-10 text-lg md:text-xl">Green Initiatives</h4>
                            <p className="leading-normal mt-2">We have initiatives like tree plantation for every electric vehicle manufactured as well as when the vehicles reach milestones like 100, 500, or 1000 kilometres of driving, etc. These trees and seedlings are cared for by our business. Giving back to nature could rank among our greatest accomplishments. In our workplace, we promote going digital wherever feasible in order to decrease the amount of paper used. To save energy, we select lighting and office equipment that is energy-efficient. To increase our influence, we are always willing to collaborate with other initiatives or groups who share our concern for the environment. Last but not least, we provide incentives or awards for customers that adopt eco-friendly practises, such utilising recyclable containers or bags.</p>
                            <h4 className="text-secondary font-semibold mt-10 text-lg md:text-xl">Education Initiatives</h4>
                            <p className="leading-normal mt-2">We concentrate on bringing awareness of EVs and their sustainability to a wide audience, including high school and college students as well as members of the public and business sectors. We host free-of-cost webinars and workshops on EV technology and maintenance for the general public and potential EV owners.   We frequently collaborate with educational institutions to provide teachers and students EV education and training. We emphasise the value of sustainability to our customers and staff, encouraging them to make more eco-friendly decisions in both their personal and professional life. One of our teams is involved in curating online courses and tutorials on EV technology, charging infrastructure, and related topics. We establish partnerships with local governments and organizations to promote EV adoption and provide education and resources to underserved communities.</p>
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
