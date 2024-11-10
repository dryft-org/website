"use client"

export default function Sustainability() {
  const initiatives = [
    {
      title: "Cut Emissions",
      description: "Through Electric & Hybrid adoption",
      icon: "🌍",
    },
    {
      title: "Renewable Energy",
      description: "Promote renewable charging infrastructure",
      icon: "⚡",
    },
    {
      title: "Reduce Pollution",
      description: "Reduce noise and air pollution",
      icon: "🌿",
    },
    {
      title: "Vision 2050",
      description: "Support Rwanda's Vision 2050 for a green economy",
      icon: "🎯",
    },
  ]

  return (
    <section id="sustainability" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-float">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Sustainability</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driving Toward a Green Future
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto mt-6">
            Every Dryft ride helps reduce Rwanda's carbon footprint. Explore our eco-mobility and renewable energy initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {initiatives.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 shadow-green-sm hover:shadow-green-md text-center"
              style={{
                animation: `slide-in-up 0.6s ease-out forwards`,
                animationDelay: `${index * 100}ms`,
                opacity: 0,
              }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Together, we move Rwanda sustainably.
          </p>
        </div>
      </div>
    </section>
  )
}

