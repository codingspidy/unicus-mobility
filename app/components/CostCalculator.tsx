'use client'
import { NextComponentType } from 'next'
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react'
import CarImg from "../images/car.jpg"
import BikeImg from "../images/bike.jpg"
import ScootyImg from "../images/scooty.jpg"

const CostCalculator: NextComponentType = () => {
    const [cost, setCost] = useState<string>("1");

    return (
        <section className='py-[60px]'>
            <div className='innerDiv mx-auto'>
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-x-[7px]">
                    <h3 className="text-primary text-[20px] font-[500]">Running Cost</h3>
                    <h3 className="text-primary text-[36px] font-[600] md:-mb-[4px]">Comparison</h3>
                </div>
                <div className="flex items-center gap-x-4 w-full">
                    <div className="flex flex-col">
                        <Image src={BikeImg} alt="" width={60} height={60} className="object-cover" />
                        <h5>Unicus Mobility</h5>
                        <p>Rs 2.10/km</p>
                    </div>
                    <div className="flex flex-col">
                        <Image src={ScootyImg} alt="" width={60} height={60} className="object-cover" />
                        <h5>Petrol Bike/ Scooty</h5>
                        <p>Rs 2.10/km</p>
                    </div>
                    <div className="flex flex-col">
                        <Image src={CarImg} alt="" width={60} height={60} className="object-cover" />
                        <h5>Car</h5>
                        <p>Rs 2.10/km</p>
                    </div>
                </div>
                <div>
                    <label htmlFor="distance-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label>
                    <input id="distance-range" onChange={(e) => setCost(e.target.value)} type="range" value={cost} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                </div>
            </div>
        </section>
    )
}

export default CostCalculator

