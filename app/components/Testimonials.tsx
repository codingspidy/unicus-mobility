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
        name: "Kunal Kumar (Director, Modern Bazaar)",
        review:
            "We recently purchased electric bikes from Unicus Mobility for our delivery fleet, and we couldn't be happier with our decision. The entire experience, from browsing their website to taking delivery, was smooth and hassle-free."
    },
    {
        id: 2,
        name: "Dr Noor Khan (Professor, JMI)",
        review:
            "I wanted to express my sincere appreciation to Unicus Mobility for their exceptional work in battery manufacturing for our project. The batteries they manufactured have been crucial to the success of our project, and we are grateful for their outstanding work."
    },
    {
        id: 3,
        name: "Chirag Tyagi",
        review:
            "The customer service at Unicus Mobility is outstanding. They were incredibly helpful and responsive throughout the purchasing process and were always available to answer any questions I had. They truly exceeded my expectation."
    },
    {
        id: 4,
        name: "Mohd Faazil",
        review:
        "The bike is simply fantastic. It's well-built, easy to ride, and incredibly smooth and quiet. The pedal assist is a game-changer. The battery life is impressive, and I've been able to go on long rides without worrying about running out of power."    
    },
    // {
    //     id: 5,
    //     name: "Voldemort, Kerala",
    //     review:
    //         "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
    // },
];

export default function TestimonialsSlider() {
    return (
        <section className='pt-[30px] md:pt-[70px] pb-[70px] bg-[#ffffff]'>
            <div className='innerDiv mx-auto'>
                <h3 className="text-[27px] md:text-[36px] text-black font-[600] leading-normal text-center max-w-[600px] mx-auto mb-12">Here&#39;s what our bikers are saying about us</h3>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    className="testimonials-swiper"
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
                                className={`relative w-full max-w-[400px] mx-auto border border-primary rounded-md px-6 pt-16 pb-8 ${index === 2 ? "bg-[#0d0d0d] text-white" : "bg-[#ffffff] text-black"
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
