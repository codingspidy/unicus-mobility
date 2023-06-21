'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import reviewImg from "../images/review-img.jpg";
import Image from "next/image";

const reviewsData = [
    {
        id: 1,
        name: "Harry, New Delhi",
        review:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    },
    {
        id: 2,
        name: "Hermione, Punjab",
        review:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    },
    {
        id: 3,
        name: "Snape, Kashmir",
        review:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    },
    {
        id: 4,
        name: "Sirius, Jharkhand",
        review:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    },
    {
        id: 5,
        name: "Voldemort, Kerala",
        review:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    },
];

export default function TestimonialsSlider() {
    return (
        <section className='pt-[30px] pb-[70px] bg-[#f2f2f2]'>
            <div className='innerDiv mx-auto'>
                <h3 className="text-[30px] md:text-[40px] text-primary font-[600] leading-normal text-center max-w-[600px] mx-auto mb-12">Here&#39;s what our bikers are saying about us</h3>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    className=""
                    slidesPerView={1}
                    spaceBetween={20}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {reviewsData.map((data, index) => (
                        <SwiperSlide className="py-10" key={data.id}>
                            <div
                                className={`relative w-full max-w-[400px] mx-auto border border-primary rounded-md px-6 pt-16 pb-8 ${index === 2 ? "bg-primary text-white" : "bg-[#f2f2f2] text-primary"
                                    }`}
                            >
                                <div className="absolute z-[1] left-1/2 -translate-x-1/2 -top-10">
                                    <Image
                                        className="rounded-full"
                                        src={reviewImg}
                                        alt=""
                                        width={75}
                                        height={75}
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="mb-5">{data.review}</p>
                                    <span className="font-semibold">{data.name}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
