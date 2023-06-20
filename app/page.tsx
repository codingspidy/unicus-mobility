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
      <Payment />
      <Footer />
    </main>
  )
}
