'use client'
import { NextComponentType } from 'next'
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react'
import CarImg from "../images/car.png"
import BikeImg from "../images/e-bike.png"
import ScootyImg from "../images/scooter.png"

const CostCalculator: NextComponentType = () => {
    const [cost, setCost] = useState<string>("1");

    const calculateCost = (num: number) => {
        return (num * Number(cost)).toFixed(2);
    }

    return (
        <section id="costCalculator" className='py-[60px]'>
            <div className='innerDiv mx-auto'>
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-x-[7px] mb-12">
                    <h3 className="text-[18px] md:text-[24px] font-[500]">Daily Cost</h3>
                    <h3 className="text-[30px] md:text-[40px] font-[600] -mt-1 md:-mt-0 md:-mb-[6px]">Comparison</h3>
                </div>
                <div className="flex items-center gap-x-6 justify-between w-full">
                    <div className="flex flex-col w-1/2 md:w-auto">
                        <Image src={BikeImg} alt="" width={60} height={60} className="object-cover w-[45px] h-[45px] md:w-[55px] md:h-[55px]" />
                        <h5 className="font-[800] mt-3">Unicus Mobility</h5>
                        <div className='text-[30px] md:text-[42px] font-[800] -mt-1 md:w-[220px]'>
                            <span className="text-[#61BA89] text-[36px] md:text-[54px]">₹</span>
                            <span className='text-[#61BA89]'>{calculateCost(0.2)}</span>
                            <span className="text-xs text-[#61BA89]">/day</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 md:w-auto">
                        <Image src={ScootyImg} alt="" width={60} height={60} className="object-cover w-[45px] h-[45px] md:w-[55px] md:h-[55px]" />
                        <h5 className="font-[800] mt-3">Petrol Bike/ Scooty</h5>
                        <div className='text-[30px] md:text-[42px] font-[800] -mt-1 md:w-[220px]'>
                            <span className="text-[#EB003F] text-[36px] md:text-[54px]">₹</span>
                            <span className='text-[#EB003F]'>{calculateCost(2.1)}</span>
                            <span className="text-xs text-[#EB003F]">/day</span>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col">
                        <Image src={CarImg} alt="" width={60} height={60} className="object-cover w-[45px] h-[45px] md:w-[55px] md:h-[55px]" />
                        <h5 className="font-[800] mt-3">Car</h5>
                        <div className='text-[36px] md:text-[42px] font-[800] -mt-1 md:w-[220px]'>
                            <span className="text-[#EB003F] text-[42px] md:text-[54px]">₹</span>
                            <span className="text-[#EB003F]">{calculateCost(3.1)}</span>
                            <span className="text-xs text-[#EB003F]">/day</span>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-3'>
                    <label htmlFor="distance-range" className="block mb-4 md:mb-6 text-[18px] md:text-[22px] w-full font-[600]">Daily usage {cost} km(s)</label>
                    <input id="distance-range" onChange={(e) => setCost(e.target.value)} type="range" min={1} max={200} value={cost} className="w-full h-[6px] md:h-2 bg-secondary accent-primary rounded-lg appearance-none cursor-pointer" />
                </div>
            </div>
        </section>
    )
}

export default CostCalculator

