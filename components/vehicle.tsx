"use client"

import Image from "next/image"

export default function VehicleTypes() {
  const vehicles = [
    {
      id: 1,
      name: "Economy",
      description: "Affordable rides for daily commutes. Compact Electric & Hybrid vehicles designed for efficiency.",
      features: ["Affordable rates", "Eco-friendly", "Quick pickup", "Efficient travel"],
      image: "/economy.jpeg",
      color: "primary",
    },
    {
      id: 2,
      name: "7-Seater",
      description: "Spacious and comfortable for family or group travel — eco-friendly vans and SUVs for up to 6 passengers.",
      features: ["Spacious seating", "Group travel", "Family-friendly", "Extra luggage space"],
      image: "/seater.png",
      color: "accent",
    },
    {
      id: 3,
      name: "Premium",
      description: "Silent luxury and executive comfort. Ride in style with top-tier electric sedans.",
      features: ["Luxury vehicles", "Premium comfort", "Executive experience", "Top-tier service"],
      image: "/premium.jpeg",
      color: "primary",
    },
    {
      id: 4,
      name: "Corporate",
      description: "Tailored transport solutions for businesses and organizations. Monthly billing, dedicated support, and branded experiences.",
      features: ["Monthly billing", "Dedicated support", "Business solutions", "Branded experiences"],
      image: "/corporate.jpeg",
      color: "accent",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-secondary/20 relative overflow-hidden min-h-[60vh]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-float">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Vehicle Types</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose the perfect ride for your journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="rounded-2xl border border-border/60 bg-gradient-to-br from-card to-card/80 p-8 hover:shadow-2xl hover:border-primary/40 hover:from-primary/10 hover:to-accent/10 transition-all duration-300 group overflow-hidden relative"
              style={{
                animation: `slide-in-up 0.6s ease-out forwards`,
                animationDelay: `${index * 150}ms`,
                opacity: 0,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300" />
              <div className="relative">
                <div className="w-20 h-20 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 relative">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                <p className="text-muted-foreground mb-6">{vehicle.description}</p>

                <div className="space-y-3 mb-6">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
