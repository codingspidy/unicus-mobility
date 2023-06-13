import CostCalculator from "./components/CostCalculator"
import Hero from "./components/Hero"

export default function Home() {

  return (
    <main className="min-h-screen">
      <Hero />
      <CostCalculator />
    </main>
  )
}
