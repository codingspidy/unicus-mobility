import React from 'react'
import QrImg from "../images/qr-code.webp"
import Image from 'next/image'

const Payment = () => {
    return (
        <section className='pt-[70px] pb-[70px] bg-secondary text-white'>
            <div className='innerDiv mx-auto'>
                <div className="flex flex-col lg:flex-row lg:justify-around items-center text-center lg:text-left">
                    <h3 className="text-[30px] md:text-[40px] font-[600] leading-[1.3] md:max-w-[300px] text-primary">SCAN to Contribute*</h3>
                    <div className='flex flex-col items-center lg:flex-row lg:gap-6 mt-7 lg:mt-0'>
                        <Image alt="" src={QrImg} className="filter saturate-[30%] w-[200px] lg:w-auto max-w-full" />
                        <div className="text-primary mt-7 lg:mt-0">
                            <div>
                                <h4 className='text-[24px] md:text-[30px] font-[600]'>Pay directly with UPI</h4>
                                <p className="md:text-[20px] font-[500]">BHIM/Paytm/Phonepe/GPay/AmazonPay</p>
                            </div>
                            <p className="mt-5 text-xs md:text-xs italic font-[500] max-w-[400px]">*Delving into the typical engineering aspect of &#34;future mobility&#34;, we are raising funds to get the prototype ready</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Payment
