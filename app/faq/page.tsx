import type { Metadata } from "next"
import Header from "@/components/header"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Dryft Rwanda",
  description: "Find answers to common questions about Dryft services, booking rides, payments, safety, and more.",
}

export default function FAQPage() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <FAQ />
      <Footer />
    </main>
  )
}

