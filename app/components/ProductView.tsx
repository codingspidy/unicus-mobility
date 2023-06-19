import Image from 'next/image'
import React from 'react'
import UnicusBikeImg from '../images/unicus-bike.png'
import BatteryImg from "../images/battery.svg"
import SpeedImg from "../images/speed.svg"
import MapImg from "../images/map.svg"
import RupeeImg from "../images/rupee.svg"

const ProductView = () => {
    return (
        <section id="product" className='pt-[120px] pb-[120px] bg-black relative'>
            <div className="absolute -top-[75px] z-[10] inset-x-0 w-full h-20 bg-gradient-to-t from-black to-transparent" />
            <div className='innerDiv mx-auto'>
                <div className="flex flex-col items-center w-full justify-center max-w-[600px] mx-auto">
                    <Image src={UnicusBikeImg} width={631} height={395} alt="" className="" />
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
            </div>
        </section>
    )
}

export default ProductView
