"use client"

import {
  SafetyIllustration,
  SpeedIllustration,
  AffordableIllustration,
  EcoIllustration,
  CommunityIllustration,
  ReliableIllustration,
} from "@/components/illustration"

export default function WhyDryft() {
  const benefits = [
    {
      id: 1,
      title: "Trusted & Safe",
      description:
        "Every driver verified. Every ride tracked. Your safety is our priority with 24/7 monitoring and support.",
      icon: SafetyIllustration,
    },
    {
      id: 2,
      title: "Affordable Pricing",
      description: "Transparent rates with no hidden charges. Get exactly what you expect, every single ride.",
      icon: AffordableIllustration,
    },
    {
      id: 3,
      title: "Lightning Fast",
      description: "Quick pickups, faster routes. Experience the speed of modern mobility in Rwanda.",
      icon: SpeedIllustration,
    },
    {
      id: 4,
      title: "Eco-Conscious",
      description: "Electric vehicle options available. Reducing carbon footprint for a sustainable future.",
      icon: EcoIllustration,
    },
    {
      id: 5,
      title: "Reliable Service",
      description: "24/7 rides across Rwanda. Rain or shine, we're always here for your journey.",
      icon: ReliableIllustration,
    },
    {
      id: 6,
      title: "Community First",
      description: "Building connections, not just rides. We invest back in the communities we serve.",
      icon: CommunityIllustration,
    },
  ]

  return (
    <section id="why-dryft" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-float">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why Choose Dryft?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than a ride-hailing app. We are a movement transforming mobility in Rwanda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={benefit.id}
                className="p-8 rounded-2xl bg-secondary/50 hover:bg-secondary/70 shadow-green-sm hover:shadow-green-md transition-all duration-300 group border border-border/30"
                style={{
                  animation: `slide-in-up 0.6s ease-out forwards`,
                  animationDelay: `${index * 80}ms`,
                  opacity: 0,
                }}
              >
                <div className="relative">
                  <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    <IconComponent />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
