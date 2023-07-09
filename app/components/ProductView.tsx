'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import slide1 from "../images/ninja-bike.jpg";
import slide2 from "../images/ninja-bike4.jpg";
import slide3 from "../images/ninja-bike3.jpg";
import Image from "next/image";
import BatteryImg from "../images/battery.svg"
import SpeedImg from "../images/speed.svg"
import MapImg from "../images/map.svg"
import RupeeImg from "../images/rupee.svg"


export default function ProductView() {
    return (
        <section id="product" className='bg-black relative h-screen'>
            <div className="relative">
                <div className="absolute w-full h-full inset-0 z-40 bg-black/50"></div>
                <div className="overlay-gradient-b-intro absolute inset-0 z-50" />

                <div className="w-full px-7 absolute z-[60] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <div className="w-fit mx-auto">
                        <h3 className="text-white text-[36px] md:text-[45px] font-semibold leading-none">Design meets performance.</h3>
                        <p className="text-white text-lg md:text-2xl mt-2">For your Rorring rides</p>
                    </div>
                </div>
                <div className="absolute z-[60] inset-x-0 bottom-20">
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
                        <div className="relative">
                            <Image
                                className="w-full h-screen object-cover object-top"
                                src={slide1}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <Image
                                className="w-full h-screen object-cover object-top"
                                src={slide2}
                                alt=""
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative">
                            <Image
                                className="w-full h-screen object-cover object-top"
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
