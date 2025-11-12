import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Dryft Rwanda Terms & Conditions",
  description: "Review the terms of service for using Dryft Rwanda's ride-hailing platform.",
}

export default function TermsPage() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <section className="py-20 md:py-32 bg-background min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4 animate-float">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Terms & Conditions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Review the terms of service for using Dryft Rwanda's ride-hailing platform.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-green-sm mb-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Summary</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Riders agree to lawful use and app compliance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Fares are auto-calculated based on distance/time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Cancellations after driver dispatch may incur fees.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Dryft ensures safety but is not liable for third-party incidents.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Drivers must maintain ethical, compliant, and safe conduct.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>User data is protected under Rwanda's data laws.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <div className="bg-card border border-border/50 rounded-xl p-6 shadow-green-sm">
                <h3 className="text-xl font-bold mb-4 text-foreground">1. User Agreement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By using Dryft Rwanda's ride-hailing platform, riders agree to use the service lawfully and in compliance 
                  with all applicable laws and regulations. Users must comply with the app's terms and guidelines at all times.
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-xl p-6 shadow-green-sm">
                <h3 className="text-xl font-bold mb-4 text-foreground">2. Fare Calculation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fares are automatically calculated based on distance and time. The pricing is transparent and displayed 
                  before you confirm your ride. All charges are final and non-negotiable.
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-xl p-6 shadow-green-sm">
                <h3 className="text-xl font-bold mb-4 text-foreground">3. Cancellation Policy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cancellations made after a driver has been dispatched may incur cancellation fees. We encourage users 
                  to cancel rides promptly if plans change to avoid unnecessary charges.
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-xl p-6 shadow-green-sm">
                <h3 className="text-xl font-bold mb-4 text-foreground">4. Safety & Liability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  While Dryft Rwanda ensures the highest safety standards for all rides, we are not liable for incidents 
                  caused by third parties or circumstances beyond our control. Users ride at their own discretion.
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-xl p-6 shadow-green-sm">
                <h3 className="text-xl font-bold mb-4 text-foreground">5. Driver Conduct</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All drivers must maintain ethical, compliant, and safe conduct at all times. Drivers are required to 
                  follow traffic laws, respect passengers, and provide professional service. Violations may result in 
                  immediate suspension or termination.
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-xl p-6 shadow-green-sm">
                <h3 className="text-xl font-bold mb-4 text-foreground">6. Data Protection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  User data is protected under Rwanda's data protection laws. We are committed to maintaining the privacy 
                  and security of all user information in accordance with applicable regulations.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-xl">
              <p className="text-sm text-muted-foreground text-center">
                Last updated: November 2024. For questions about these terms, please{" "}
                <a href="/contact" className="text-primary hover:underline font-semibold">
                  contact us
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

