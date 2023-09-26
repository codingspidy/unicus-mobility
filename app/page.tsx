import Image from "next/image"
import Advantages from "./components/Advantages"
import ConnectionForm from "./components/ConnectionForm"
import CostCalculator from "./components/CostCalculator"
import Hero from "./components/Hero"
import Patron from "./components/Patron"
import Payment from "./components/Payment"
import ProductView from "./components/ProductView"
import TestimonialsSlider from "./components/Testimonials"
import UnicusLogo from "./images/logo/2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import InvestorForm from "./components/InvestorForm"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      {/* <ProductView /> */}
      <ConnectionForm />
      {/* <CostCalculator /> */}
      <Advantages />
      <Patron />
      <section className="bg-secondary py-[60px] text-center">
        <div className="innerDiv">
          <Image src={UnicusLogo} className='w-[250px] md:w-[300px] mx-auto' alt="" />
          <h4 className='text-xl md:text-3xl font-medium text-white mt-7'>Bringing eco-conscious transportation for everyone. STAY TUNED!</h4>
          <div className="flex items-center justify-center gap-x-2 text-white text-lg mt-2">
            <span>hello@uveramobility.com</span>
            <span>|</span>
            <span>+91 97181 22534</span>
          </div>
          <p className="mt-5 text-[15px]">On our way to creating a brand that exceeds customer expectations, promotes sustainable practices, aligns with the government&#39;s aim of making India self-reliant, reaches the pinnacle of scalability, and emerges as a pivotal hub in the ecosystem.</p>
          <div className="flex justify-center items-center gap-12 flex-wrap mt-10">
            <button type='submit' className='bg-white text-black w-full sm:w-1/2 lg:w-1/3 max-w-[300px] font-semibold rounded-full py-3 flex items-center justify-center relative'> { /* onClcik={handleContact} disabled={loading} */}
              JOIN CONNECTED
              <span className="w-10 h-10 rounded-full bg-black absolute top-[4px] right-1">
                <FontAwesomeIcon className="h-4 text-secondary mt-[10px]" icon={faArrowUp} />
              </span>
            </button>
            <button type='submit' className='bg-white text-black w-full sm:w-1/2 lg:w-1/3 max-w-[300px] font-semibold rounded-full py-3 flex items-center justify-center relative'> { /* onClcik={handleContact} disabled={loading} */}
              KNOW US BETTER
              <span className="w-10 h-10 rounded-full bg-black absolute top-[4px] right-1">
                <FontAwesomeIcon className="h-4 text-secondary mt-[10px]" icon={faArrowRight} />
              </span>
            </button>
            <button type='submit' className='bg-white text-black w-full sm:w-1/2 lg:w-1/3 max-w-[300px] font-semibold rounded-full py-3 flex items-center justify-center relative'> { /* onClcik={handleContact} disabled={loading} */}
              JOIN US AS AN INVESTOR
              <span className="w-10 h-10 rounded-full bg-black absolute top-[4px] right-1">
                <FontAwesomeIcon className="h-4 text-secondary mt-[10px]" icon={faArrowDown} />
              </span>
            </button>
          </div>
        </div>
      </section>
      {/* <TestimonialsSlider /> */}
      {/* <Payment /> */}
      <InvestorForm />
      <div className="bg-black text-white w-full py-16 md:py-10">
        <div className="innerDiv">
          <div className="md:grid grid-cols-2 gap-5">
            <div className="md:mb-0 mb-6">
              <h3 className="text-3xl lg:text-4xl font-medium mb-2">
                Stay Tuned!
              </h3>
              <p className="">
                Subscribe to our newsletter and never miss out on the latest
                news.
              </p>
            </div>
            <div>
              <div className="md:flex gap-x-4">
                <label className="block mb-4 w-full">
                  <input
                    className="placeholder:text-[#646464] block w-full bg-[#0d0d0d] rounded-md py-3 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500"
                    placeholder="Your Name"
                    type="text"
                  />
                </label>
                <label className="block mb-4 w-full">
                  <input

                    className="placeholder:text-[#646464] block w-full bg-[#0d0d0d] rounded-md py-3 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500"
                    placeholder="Email"
                    type="email"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="py-3 px-6 bg-white text-black font-medium lg:float-right rounded-md"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
