'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper";
import slide1 from "../images/ninja-bike.jpg";
import slide2 from "../images/bikeImg2.jpg";
import slide3 from "../images/bulletImg.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import UnicusBikeImg from '../images/unicus-bike.png'
import BatteryImg from "../images/battery.svg"
import SpeedImg from "../images/speed.svg"
import MapImg from "../images/map.svg"
import RupeeImg from "../images/rupee.svg"


export default function ProductView() {

    return (
        <section id="product" className='bg-black relative h-screen'>
            <div className="relative">
                {/* <div className="absolute top-[0px] z-[40] inset-x-0 w-full h-20 bg-gradient-to-b from-black to-transparent" /> */}

                <div className="absolute w-full h-full inset-0 z-40 bg-black/75"></div>
                {/* <div className="overlay-gradient-b-intro absolute inset-0 z-10" />
                            <div className="overlay-gradient-t-intro absolute z-10 inset-0" /> */}

                <div className="absolute z-40 inset-x-0 bottom-20">
                    <div className="text-white flex flex-wrap lg:flex-nowrap justify-center items-center gap-3 mt-6">
                        <div className="specs-card min-w-[150px] md:w-[200px] flex items-center gap-4">
                            <Image src={SpeedImg} alt="" width={16} height={16} className="w-5 md:w-6" />
                            <div className='flex flex-col'>
                                <span className="text-xs md:text-sm font-[300]">TOP SPEED</span>
                                <span className="text-[16px] md:text-[18px] font-[600]">100 km/hr</span>
                            </div>
                        </div>
                        <div className="specs-card min-w-[150px] md:w-[200px] flex items-center gap-4">
                            <Image src={MapImg} alt="" width={16} height={16} className="w-5 md:w-6" />
                            <div className='flex flex-col'>
                                <span className="text-xs md:text-sm font-[300]">RANGE</span>
                                <span className="text-[16px] md:text-[18px] font-[600]">200 kms</span>
                            </div>
                        </div>
                        <div className="specs-card min-w-[150px] md:w-[200px] flex items-center gap-4">
                            <Image src={BatteryImg} alt="" width={16} height={8} className="w-5 md:w-6" />
                            <div className='flex flex-col'>
                                <span className="text-xs md:text-sm font-[300]">CHARGE TIME</span>
                                <span className="text-[16px] md:text-[18px] font-[600]">2 hr</span>
                            </div>
                        </div>
                        <div className="specs-card min-w-[150px] md:w-[200px] flex items-center gap-4">
                            <Image src={RupeeImg} alt="" width={16} height={16} className="w-3 md:w-4" />
                            <div className='flex flex-col'>
                                <span className="text-xs md:text-sm font-[300]">COST</span>
                                <span className="text-[16px] md:text-[18px] font-[600]">0.2 /km</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper
                    slidesPerView={1}
                    autoplay={{
                        delay: 4000,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className="text-left relative">
                            <div className="absolute inset-0 z-30 bg-[rgba(0, 0, 0, 0.75)]"></div>
                            {/* <div className="overlay-gradient-b-intro absolute inset-0 z-10" />
                            <div className="overlay-gradient-t-intro absolute z-10 inset-0" /> */}
                            <Image
                                className="w-full h-screen object-cover"
                                src={slide1}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-left relative">
                            {/* <div className="overlay-gradient-b-intro absolute inset-0 z-10" />
                            <div className="overlay-gradient-t-intro absolute z-10 inset-0" /> */}
                            <Image
                                className="w-full h-screen object-cover"
                                src={slide2}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-left relative">
                            {/* <div className="overlay-gradient-b-intro absolute inset-0 z-10" />
                            <div className="overlay-gradient-t-intro absolute z-10 inset-0" /> */}
                            <Image
                                className="w-full h-screen object-cover"
                                src={slide3}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
