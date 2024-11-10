"use client"

export default function Safety() {
  const safetyStandards = [
    {
      title: "Driver Vetting",
      description: "Drivers undergo background checks & continuous training.",
      icon: "👤",
    },
    {
      title: "Vehicle Inspections",
      description: "Vehicle inspections every month.",
      icon: "🔍",
    },
    {
      title: "GPS Tracking",
      description: "In-app GPS tracking and 24/7 emergency response.",
      icon: "📍",
    },
    {
      title: "Zero Tolerance",
      description: "Zero tolerance for unsafe or unethical conduct.",
      icon: "🛡️",
    },
  ]

  const complianceStandards = [
    {
      title: "Licensed & Regulated",
      description: "Licensed under RURA and national regulations.",
      icon: "📜",
    },
    {
      title: "Environmental Compliance",
      description: "Adherence to environmental & data protection laws.",
      icon: "🌱",
    },
    {
      title: "Ongoing Supervision",
      description: "Ongoing Conduct & Compliance supervision.",
      icon: "👁️",
    },
    {
      title: "Ethical Operations",
      description: "Ethical business operations aligned with Access Bank-level integrity standards.",
      icon: "⚖️",
    },
  ]

  return (
    <section id="safety" className="py-20 md:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-float">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Safety & Compliance</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your safety and trust are our top priorities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Safety Standards */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Safety Standards</h3>
            <div className="grid gap-6">
              {safetyStandards.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 shadow-green-sm hover:shadow-green-md"
                  style={{
                    animation: `slide-in-left 0.6s ease-out forwards`,
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold mb-2 text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Standards */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Compliance Standards</h3>
            <div className="grid gap-6">
              {complianceStandards.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 shadow-green-sm hover:shadow-green-md"
                  style={{
                    animation: `slide-in-right 0.6s ease-out forwards`,
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold mb-2 text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

