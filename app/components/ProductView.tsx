import Image from 'next/image'
import React from 'react'
import BulletImg from '../images/bullet.png'

const ProductView = () => {
    return (
        <section id="product" className='py-[60px] bg-black relative'>
            <div className="absolute -top-32 z-[100] inset-x-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
            <div className='innerDiv mx-auto'>
                <div className="flex flex-col items-center w-full h-screen justify-center max-w-[500px] mx-auto">
                    <Image src={BulletImg} width={631} height={395} alt="" />
                    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-10 mt-6">
                        <div className="specs-card">A</div>
                        <div className="specs-card">B</div>
                        <div className="specs-card">A</div>
                        <div className="specs-card">A</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductView
