"use client"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40 bg-background">
      {/* Floating green orbs for atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-scale"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse-scale" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-scale" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-left">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-secondary text-primary font-semibold text-sm flex items-center gap-2">
                🇷🇼 Made in Rwanda
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Drive the Future. <span className="text-primary">Sustainably.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Rwanda's first ride-hailing platform powered by Electric and Hybrid Vehicles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
                🚗 Book a Ride
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-all duration-300 font-semibold flex items-center gap-2">
                ⚡ Become a Driver
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-full hover:bg-primary/10 transition-all duration-300 font-semibold flex items-center gap-2">
                🌱 Partner with Us
              </button>
            </div>
            
            <p className="text-sm text-muted-foreground max-w-lg leading-relaxed pt-4">
              Welcome to Dryft Rwanda, the innovative mobility platform leading the shift toward clean transportation. We connect riders to professional drivers through a seamless digital experience — offering comfort, reliability, and environmental consciousness in every ride.
            </p>

            {/* Animated Cars Moving - Replacing fake statistics */}
            <div className="pt-8 border-t border-border">
              <div className="relative h-24 overflow-hidden rounded-lg bg-secondary/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-sm font-medium text-muted-foreground">🚗 Coming Soon </p>
                </div>
                {/* Moving cars animation */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 -translate-y-1/2 left-[-60px] animate-car-move-1">
                    <svg width="50" height="30" viewBox="0 0 50 30" fill="none" className="text-primary">
                      <path d="M10 20 L40 20" stroke="currentColor" strokeWidth="2" />
                      <path d="M15 20 Q15 10 25 8 L35 8 Q45 10 45 20" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="20" cy="23" r="2.5" fill="currentColor" />
                      <circle cx="35" cy="23" r="2.5" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-[-60px] animate-car-move-2">
                    <svg width="50" height="30" viewBox="0 0 50 30" fill="none" className="text-accent">
                      <path d="M10 20 L40 20" stroke="currentColor" strokeWidth="2" />
                      <path d="M15 20 Q15 10 25 8 L35 8 Q45 10 45 20" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="20" cy="23" r="2.5" fill="currentColor" />
                      <circle cx="35" cy="23" r="2.5" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-[-60px] animate-car-move-3">
                    <svg width="50" height="30" viewBox="0 0 50 30" fill="none" className="text-primary/70">
                      <path d="M10 20 L40 20" stroke="currentColor" strokeWidth="2" />
                      <path d="M15 20 Q15 10 25 8 L35 8 Q45 10 45 20" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="20" cy="23" r="2.5" fill="currentColor" />
                      <circle cx="35" cy="23" r="2.5" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - Green Blurred Background with Logo */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] animate-slide-right">
            {/* Blurred green background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/30 to-accent/30 rounded-3xl blur-3xl backdrop-blur-sm"></div>
            
            {/* Main container with glass effect */}
            <div className="relative h-full rounded-3xl bg-gradient-to-br from-primary/20 via-primary/15 to-accent/15 border border-primary/30 backdrop-blur-md flex items-center justify-center overflow-hidden shadow-2xl">
              {/* Subtle car outlines in background */}
              <div className="absolute inset-0 opacity-10">
                <svg className="absolute top-10 left-10 w-16 h-16 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 17h14l-1-7H6l-1 7zM7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3M5 17l-1 3h18l-1-3" />
                </svg>
                <svg className="absolute top-32 right-20 w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 17h14l-1-7H6l-1 7zM7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3M5 17l-1 3h18l-1-3" />
                </svg>
                <svg className="absolute bottom-20 left-20 w-14 h-14 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 17h14l-1-7H6l-1 7zM7 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3M5 17l-1 3h18l-1-3" />
                </svg>
              </div>
              
              {/* Central Logo Circle */}
              <div className="relative z-10">
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 relative">
                  {/* Outer green ring - bouncing animation */}
                  <div className="absolute inset-0 rounded-full border-8 border-primary animate-ring-bounce"></div>
                  {/* Middle white ring - delayed bounce */}
                  <div className="absolute inset-4 rounded-full border-4 border-background animate-ring-bounce-delayed"></div>
                  {/* Inner green circle - pulsing */}
                  <div className="absolute inset-8 rounded-full bg-primary animate-ring-pulse"></div>
                  {/* Center white circle with D - static */}
                  <div className="absolute inset-12 rounded-full bg-background flex items-center justify-center z-10">
                    <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary">D</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
