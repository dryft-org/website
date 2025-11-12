import Header from "@/components/header"
import Hero from "@/components/hero"
import WhyDryft from "@/components/why"
import HowItWorks from "@/components/how-it-works"
import Transition from "@/components/transition"
import AppStore from "@/components/app-store"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      {/* Additional green gradient overlays for depth */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <WhyDryft />
        <HowItWorks />
        <Transition />
        <AppStore />
        <Footer />
      </div>
    </main>
  )
}
