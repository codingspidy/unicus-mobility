'use client'

import { NextComponentType } from 'next'
import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import patron1 from "../images/patron/4.png"
import patron2 from "../images/patron/5.png"
import patron3 from "../images/patron/6.png"
import patron4 from "../images/patron/7.png"
import Image from 'next/image';

const Patron: NextComponentType = () => {


    return (
        <section id="patronSection" className={`section pt-10 pb-7 md:pb-10`}>
            <div className='innerDiv mx-auto'>
                <h3 className='text-center sm:text-3xl text-2xl text-black font-[600] mb-[20px] md:text-4xl'>Recognised By</h3>
                <div className=''>
                    <Swiper
                        className='mySwiper'
                        modules={[Autoplay]}
                        //spaceBetween={30}
                        slidesPerView={2}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                // spaceBetween: 15,
                            },
                            // 640: {
                            //   width: 640,
                            //   slidesPerView: 3,
                            //   //spaceBetween: 20,
                            // },
                            900: {
                            //   width: 768,
                              slidesPerView: 4,
                              // spaceBetween: 20,
                            },
                            // 1024: {
                            //   width: 1024,
                            //   slidesPerView: 6,
                            //   // spaceBetween: 30,
                            // },
                            // 1140: {
                            //   width: 1024,
                            //   slidesPerView: 8,
                            //  // spaceBetween: 30,
                            // },
                        }}
                        autoplay
                        loop
                    >
                        <SwiperSlide>
                            <div className='md:mx-6'>
                                <Image src={patron1} className="object-contain w-[120px] md:w-[170px]" alt='' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='md:mx-6'>
                                <Image src={patron2} className="object-contain w-[120px] md:w-[170px]" alt='' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='md:mx-6'>
                                <Image src={patron3} className="object-contain w-[120px] md:w-[170px]" alt='' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='md:mx-6'>
                                <Image src={patron4} className="object-contain w-[120px] md:w-[170px]" alt='' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Patron
