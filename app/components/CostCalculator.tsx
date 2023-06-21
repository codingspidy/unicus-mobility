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
        <section id="costCalculator" className='py-[100px] bg-[#f2f2f2]'>
            <div className='innerDiv mx-auto'>
                <div className="mb-20">
                    <h3 className="text-[27px] md:text-[36px] font-[600] -mt-1 md:-mt-0 md:-mb-[6px] text-primary">Affordable electric Bikes:</h3>
                    <h3 className="text-[27px] md:text-[36px] font-[600] -mt-1 md:-mt-0 md:-mb-[6px] text-secondary">Unlock 2x savings</h3>
                </div>
                <div className="flex items-center gap-x-6 justify-between w-full">
                    <div className="flex flex-col w-1/2 md:w-auto">
                        <Image src={BikeImg} alt="" width={60} height={60} className="object-cover w-[50px] h-[50px] md:w-[70px] md:h-[70px]" />
                        <h5 className="font-[800] mt-3">Unicus e-bike</h5>
                        <div className='text-[28px] flex items-baseline md:text-[42px] font-[800] -mt-1 md:w-[220px]'>
                            <span className="text-[#61BA89] text-[34px] md:text-[54px]">&#8377;</span>
                            <span className='text-[#61BA89]'>{calculateCost(0.2)}</span>
                            <span className="text-xs text-[#61BA89]">/day</span>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 md:w-auto">
                        <Image src={ScootyImg} alt="" width={60} height={60} className="object-cover w-[50px] h-[50px] md:w-[70px] md:h-[70px]" />
                        <h5 className="font-[800] mt-3 whitespace-nowrap">Petrol Bike/ Scooty</h5>
                        <div className='text-[28px] flex items-baseline md:text-[42px] font-[800] -mt-1 md:w-[220px]'>
                            <span className="text-[#EB003F] text-[34px] md:text-[54px]">&#8377;</span>
                            <span className='text-[#EB003F]'>{calculateCost(2.1)}</span>
                            <span className="text-xs text-[#EB003F]">/day</span>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col">
                        <Image src={CarImg} alt="" width={60} height={60} className="object-cover w-[50px] h-[50px] md:w-[70px] md:h-[70px] -mb-4" />
                        <h5 className="font-[800] mt-3">Car</h5>
                        <div className='text-[28px] flex items-baseline md:text-[42px] font-[800] -mt-1 md:w-[220px]'>
                            <span className="text-[#EB003F] text-[42px] md:text-[54px]">&#8377;</span>
                            <span className="text-[#EB003F]">{calculateCost(3.1)}</span>
                            <span className="text-xs text-[#EB003F]">/day</span>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-7 text-primary'>
                    <label htmlFor="distance-range" className="text-right block mb-4 md:mb-6 text-[18px] md:text-[22px] w-full font-[600]">Daily usage {cost} km(s)</label>
                    <div className='relative w-full'>
                        <input id="distance-range" onChange={(e) => setCost(e.target.value)} type="range" min={1} max={200} value={cost} className="w-full h-5 md:h-7 bg-primary accent-secondary appearance-none cursor-pointer" />
                        <div className="flex items-center justify-center gap-7 bg-transparent w-full h-1 absolute z-10 left-0 top-1/2 -mt-[5px]">
                            <div className='bg-white w-7 md:w-11 h-[3px] md:h-1' />
                            <div className='bg-white w-7 md:w-11 h-[3px] md:h-1' />
                            <div className='bg-white w-7 md:w-11 h-[3px] md:h-1' />
                            <div className='bg-white w-7 md:w-11 h-[3px] md:h-1' />
                            <div className='bg-white w-7 md:w-11 h-[3px] md:h-1' />
                            <div className='bg-white w-7 md:w-11 h-[3px] md:h-1' />
                            <div className='bg-white w-7 md:w-11 h-[3px] md:h-1' />
                            <div className='bg-white w-7 md:w-11 h-[3px] md:h-1 hidden md:block' />
                            <div className='bg-white w-7 md:w-11 h-[3px] md:h-1 hidden md:block' />
                            <div className='bg-white w-7 md:w-11 h-[3px] md:h-1 hidden md:block' />
                            <div className='bg-white w-7 md:w-11 h-[3px] md:h-1 hidden md:block' />
                            <div className='bg-white w-7 md:w-11 h-[3px] md:h-1 hidden md:block' />
                            <div className='bg-white w-7 md:w-11 h-[3px] md:h-1 hidden md:block' />
                            <div className='bg-white w-7 md:w-11 h-[3px] md:h-1 hidden md:block' />
                            <div className='bg-white w-7 md:w-11 h-[3px] md:h-1 hidden md:block' />
                            <div className='bg-white w-7 md:w-11 h-[3px] md:h-1 hidden md:block' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CostCalculator

