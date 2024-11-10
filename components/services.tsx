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
    <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-float">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive mobility solutions designed for everyone
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="p-6 rounded-xl border border-border hover:border-primary/50 bg-gradient-to-br from-card to-card/80 hover:from-primary/5 hover:to-accent/5 transition-all duration-300 group overflow-hidden relative"
              style={{
                animation: `slide-in-up 0.6s ease-out forwards`,
                animationDelay: `${index * 100}ms`,
                opacity: 0,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300" />
              <div className="relative">
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
