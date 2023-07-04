import Advantages from "./components/Advantages"
import CostCalculator from "./components/CostCalculator"
import Hero from "./components/Hero"
import Payment from "./components/Payment"
import ProductView from "./components/ProductView2"
import TestimonialsSlider from "./components/Testimonials"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <ProductView />
      <CostCalculator />
      <Advantages />
      <TestimonialsSlider />
      <Payment />
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
                    className="placeholder:text-[#646464] block w-full bg-[#1e1e1e] rounded-md py-3 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500"
                    placeholder="Your Name"
                    type="text"
                  />
                </label>
                <label className="block mb-4 w-full">
                  <input

                    className="placeholder:text-[#646464] block w-full bg-[#1e1e1e] rounded-md py-3 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500"
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
