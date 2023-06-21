import React from 'react'
import Shape1 from "../images/shape2.png"
import City from "../images/city-solid.svg"
import Earth from "../images/earth-americas-solid.svg"
import Fuel from "../images/gas-pump-solid.svg"
import Heart from "../images/heart-circle-bolt-solid.svg"
import HourGlass from "../images/hourglass-half-solid.svg"
import Person from "../images/person-praying-solid.svg"
import Image from 'next/image'

const Advantages = () => {
    return (
        <section id="costCalculator" className='pt-[70px] pb-[100px] bg-[#f2f2f2]'>
            <div className='innerDiv mx-auto'>
                <h3 className="text-[27px] md:text-[36px] font-[600] text-center max-w-[290px] mx-auto md:max-w-none">Support the <span className="text-secondary">Cause</span>, Choose <span className="text-secondary">Electric</span></h3>
                <div className="flex items-baseline justify-center max-w-[700px] mx-auto mt-12 gap-x-4 md:gap-x-5 gap-y-7 flex-wrap">
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <Image src={Shape1} alt="" className="w-[110px] md:w-[150px]" />
                            <Image src={Fuel} alt="" className="w-8 md:w-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <p className="text-primary max-w-[140px] sm:max-w-[160px] font-[500] text-center mt-2">Shrug off soaring fuel prices</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <Image src={Shape1} alt="" className="w-[110px] md:w-[150px]" />
                            <Image src={HourGlass} alt="" className="w-7 md:w-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <p className="text-primary max-w-[140px] sm:max-w-[160px] font-[500] text-center mt-2">Save on your commute time</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <Image src={Shape1} alt="" className="w-[110px] md:w-[150px]" />
                            <Image src={Earth} alt="" className="w-8 md:w-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <p className="text-primary max-w-[140px] sm:max-w-[160px] font-[500] text-center mt-2">Protect the environment with zero emmission</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <Image src={Shape1} alt="" className="w-[110px] md:w-[150px]" />
                            <Image src={Person} alt="" className="w-8 md:w-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <p className="text-primary max-w-[140px] sm:max-w-[160px] font-[500] text-center mt-2">Do not get tired easily</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <Image src={Shape1} alt="" className="w-[110px] md:w-[150px]" />
                            <Image src={City} alt="" className="w-8 md:w-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <p className="text-primary max-w-[140px] sm:max-w-[160px] font-[500] text-center mt-2">Best for busy Urban areas</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <Image src={Shape1} alt="" className="w-[110px] md:w-[150px]" />
                            <Image src={Heart} alt="" className="w-8 md:w-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <p className="text-primary max-w-[140px] sm:max-w-[160px] font-[500] text-center mt-2">Enjoy low-impact cardio workout</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages
