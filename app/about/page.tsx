import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "About Dryft Rwanda – Driving Sustainable Mobility",
  description: "Discover how Dryft Rwanda is transforming urban transport through electric and hybrid technology, sustainability, and innovation.",
}

export default function AboutPage() {
  const coreValues = [
    {
      icon: "🌱",
      title: "Sustainability",
      description: "Protecting the planet through eco-innovation.",
    },
    {
      icon: "⚙️",
      title: "Technology",
      description: "Smarter, faster, and more efficient mobility.",
    },
    {
      icon: "🧭",
      title: "Integrity",
      description: "Operating transparently and ethically.",
    },
    {
      icon: "🚘",
      title: "Safety",
      description: "Prioritizing passengers and drivers alike.",
    },
  ]

  return (
    <main className="relative min-h-screen">
      <Header />
      
      <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-float">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Dryft Rwanda</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Driving Sustainable Mobility
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-6 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dryft Rwanda is pioneering a cleaner future for Rwanda's transport ecosystem. We operate exclusively Electric and Hybrid Vehicles, ensuring every trip contributes to a healthier planet.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our vision is to become Rwanda's leading sustainable mobility platform — built on trust, innovation, and community empowerment.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card shadow-green-md hover:shadow-green-lg transition-all duration-300 border border-border/50 text-center"
                  style={{
                    animation: `slide-in-up 0.6s ease-out forwards`,
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                  }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission Card */}
            <div className="p-8 rounded-2xl bg-card shadow-green-md hover:shadow-green-lg transition-all duration-300 animate-slide-left border border-border/50">
              <div className="w-16 h-16 rounded-full border-2 border-primary bg-background flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-primary/10"></div>
                <div className="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide safe, affordable, and reliable ride-hailing services that connect communities across Rwanda.
                We're committed to empowering drivers, delighting passengers, and creating economic opportunities through
                innovative mobility solutions.
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-8 rounded-2xl bg-card shadow-green-md hover:shadow-green-lg transition-all duration-300 animate-slide-right border border-border/50">
              <div className="w-16 h-16 rounded-full border-2 border-primary bg-background flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-primary/10"></div>
                <div className="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become Africa's leading mobility platform, transforming how people move in cities. We envision a future
                where transportation is seamless, sustainable, and serves as a catalyst for economic growth and social
                connection across the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

