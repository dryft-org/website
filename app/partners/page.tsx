import type { Metadata } from "next"
import Header from "@/components/header"
import Partners from "@/components/partners"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Partnerships - Dryft Rwanda Sustainable Mobility",
  description: "Partner with Dryft Rwanda and join us in shaping the future of sustainable transport. Explore partnership opportunities for EV infrastructure, corporate mobility, and more.",
}

export default function PartnersPage() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Partners />
      <Footer />
    </main>
  )
}

