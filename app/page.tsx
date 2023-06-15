import CostCalculator from "./components/CostCalculator"
import Hero from "./components/Hero"
import ProductView from "./components/ProductView"

export default function Home() {

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <ProductView />
      <CostCalculator />
    </main>
  )
}
