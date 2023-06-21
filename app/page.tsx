import Advantages from "./components/Advantages"
import CostCalculator from "./components/CostCalculator"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Payment from "./components/Payment"
import ProductView from "./components/ProductView"
import TestimonialsSlider from "./components/Testimonials"

export default function Home() {

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <ProductView />
      <CostCalculator />
      <Advantages />
      <TestimonialsSlider />
      {/* <div className="bg-black text-white w-full py-10">
        <div className="innerDiv">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-x-10 gap-y-7">
            <h5 className="text-[24px] font-[600] text-center md:text-left">Subscribe to our newsletter.</h5>
            <div className="flex items-center">
              <input className="w-full max-w-[500px] bg-black border-b border-b-white py-2 px-4 placeholder:text-white" placeholder="Enter your email" />
              <button className="block text-black py-2 px-4 bg-white border border-white">Subscribe</button>
            </div>
          </div>
        </div>
      </div> */}
      <Payment />
      <Footer />
    </main>
  )
}
