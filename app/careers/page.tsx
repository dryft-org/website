import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Careers at Dryft Rwanda - Join the Future of Sustainable Transportation",
  description: "Join Dryft Rwanda and be part of the team transforming urban mobility in Rwanda. Explore exciting career opportunities in sustainable transportation.",
}

export default function CareersPage() {
  const benefits = [
    {
      icon: "🌱",
      title: "Impact the Planet",
      description: "Work on solutions that reduce carbon emissions and promote sustainable mobility",
    },
    {
      icon: "🚀",
      title: "Innovation First",
      description: "Be part of cutting-edge technology in the ride-hailing industry",
    },
    {
      icon: "🤝",
      title: "Collaborative Culture",
      description: "Join a diverse team that values creativity, teamwork, and growth",
    },
    {
      icon: "📈",
      title: "Career Growth",
      description: "Opportunities for professional development and career advancement",
    },
    {
      icon: "💚",
      title: "Purpose-Driven",
      description: "Make a meaningful difference in Rwanda's transportation ecosystem",
    },
    {
      icon: "⚡",
      title: "Dynamic Environment",
      description: "Fast-paced startup culture with room to make your mark",
    },
  ]

  const departments = [
    {
      name: "Engineering & Technology",
      description: "Build the platform that powers Rwanda's sustainable mobility",
    },
    {
      name: "Operations & Logistics",
      description: "Ensure seamless operations and exceptional rider experiences",
    },
    {
      name: "Business Development",
      description: "Drive growth and partnerships across Rwanda and beyond",
    },
    {
      name: "Customer Success",
      description: "Support riders and drivers to create memorable experiences",
    },
    {
      name: "Marketing & Communications",
      description: "Tell our story and connect with communities across Rwanda",
    },
    {
      name: "Finance & Strategy",
      description: "Shape the financial future of sustainable transportation",
    },
  ]

  return (
    <main className="relative min-h-screen">
      <Header />
      
      {/* Hero Section with Green Gradient */}
      <section className="relative py-32 md:py-40 bg-gradient-to-r from-primary via-primary/90 to-accent overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-float">
            Careers
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Join the Future of Sustainable Transportation
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Career Opportunities Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We're preparing exciting career opportunities for passionate professionals who want to make a difference in Rwanda's transportation future.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            While we're building our team, we'd love to hear from you! Send us your resume and let us know why you're excited about sustainable mobility.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Join Dryft Rwanda?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 shadow-green-sm hover:shadow-green-md group"
                style={{
                  animation: `slide-in-up 0.6s ease-out forwards`,
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Departments Section */}
        {/* <div className="max-w-7xl mx-auto px-4 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Areas We're Hiring For
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-card to-card/80 border border-border/50 hover:border-primary/40 transition-all duration-300 shadow-green-sm hover:shadow-green-md"
                style={{
                  animation: `slide-in-up 0.6s ease-out forwards`,
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                }}
              >
                <h4 className="text-lg font-bold mb-2 text-foreground">{dept.name}</h4>
                <p className="text-sm text-muted-foreground">{dept.description}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Make an Impact?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Even though we're not actively hiring yet, we're always looking for exceptional talent. 
              Send us your information and we'll reach out when opportunities become available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-semibold"
              >
                Get in Touch
              </Link>
              <a
                href="mailto:careers@dryftrwanda.com"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold"
              >
                Send Your Resume
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              📧 careers@dryftrwanda.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

