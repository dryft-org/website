"use client"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Ride Booking",
      description:
        "Book a ride in seconds with our intuitive app. Real-time tracking, transparent pricing, and 24/7 support.",
      icon: "🚗",
      color: "from-primary/20 to-primary/10",
    },
    {
      id: 2,
      title: "Driver Program",
      description:
        "Join our driver community and earn flexible income. Competitive rates, safety features, and continuous support.",
      icon: "👨‍💼",
      color: "from-accent/20 to-accent/10",
    },
    {
      id: 3,
      title: "Business Solutions",
      description:
        "Corporate ride programs for employee mobility. Streamlined billing, usage analytics, and dedicated support.",
      icon: "🏢",
      color: "from-secondary/40 to-secondary/20",
    },
    {
      id: 4,
      title: "Safety First",
      description: "Advanced safety features including background checks, GPS tracking, and emergency support 24/7.",
      icon: "🛡️",
      color: "from-primary/20 to-accent/20",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background min-h-[60vh] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-4 animate-float">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive mobility solutions designed for everyone
          </p>
        </div>

        {/* Two rows, two columns layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const colorClasses = [
              "from-teal-50/50 to-cyan-50/50", // Ride Booking
              "from-purple-50/50 to-blue-50/50", // Driver Program
              "from-orange-50/50 to-red-50/50", // Business Solutions
              "from-yellow-50/50 to-amber-50/50", // Safety First
            ]
            return (
              <div
                key={service.id}
                className={`p-8 rounded-2xl border border-border/60 bg-gradient-to-br ${colorClasses[index]} hover:shadow-2xl hover:border-primary/40 transition-all duration-300 group relative overflow-hidden`}
                style={{
                  animation: `slide-in-up 0.6s ease-out forwards`,
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                }}
              >
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/50 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 rounded-xl bg-white/80 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
