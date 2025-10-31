"use client"

import { useState } from "react"
import { ChevronDown, Github, Linkedin, Mail, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [activeNav, setActiveNav] = useState("home")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [hoveredContact, setHoveredContact] = useState<string | null>(null)

  const scrollToSection = (id: string) => {
    setActiveNav(id)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-lg text-primary">MY PORTFOLIO</div>
          <div className="hidden md:flex items-center gap-8">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-colors capitalize ${
                  activeNav === item
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="minecraft-hero relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="grid grid-cols-8 w-full h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-primary/20" />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto px-6 animate-slide-up">
          <p className="text-2xl md:text-3xl text-primary font-semibold mb-4">Hi I am</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">Ranjith N M</h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
            Aspiring Software Engineer | Creative Problem Solver | Gamer
          </p>
          <p className="text-lg text-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Welcome to my digital workspace. Exploring web development one pixel at a time.
          </p>

          <button
            onClick={() => scrollToSection("about")}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-all transform hover:scale-105"
          >
            Explore <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="minecraft-texture relative py-20 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-12 bg-primary" />
            <h2 className="text-4xl font-bold text-foreground">About</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                I'm <span className="font-bold text-primary">Ranjith N M</span>, a 17-year-old pursuing Integrated
                M.Tech Software Engineering at VIT Chennai.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                My passion for gaming sparked my curiosity for technology and creativity. I'm currently exploring web
                development and enjoy solving challenging, mind-bending problems.
              </p>
              <div className="bg-muted/50 border border-border p-6 rounded-lg">
                <p className="text-sm font-semibold text-primary mb-2">📚 Education</p>
                <p className="text-foreground">
                  Integrated M.Tech in Software Engineering, VIT Chennai (Fresher, Joined 2025)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "🎮", label: "Gaming" },
                { emoji: "🧠", label: "Problem Solving" },
                { emoji: "🎨", label: "Creativity" },
                { emoji: "💡", label: "Innovation" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border-2 border-primary/30 rounded-lg p-6 text-center hover:border-primary transition-all transform hover:scale-105"
                >
                  <div className="text-4xl mb-2">{item.emoji}</div>
                  <p className="font-semibold text-foreground text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="minecraft-cave relative py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-12 bg-accent" />
            <h2 className="text-4xl font-bold text-background">Skills</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "HTML", level: 90, icon: "🏗️" },
              { name: "CSS", level: 85, icon: "🎨" },
              { name: "Problem Solving", level: 88, icon: "🧩" },
              { name: "Web Design", level: 80, icon: "✨" },
              { name: "Learning Agility", level: 95, icon: "📈" },
              { name: "Creativity", level: 92, icon: "🌟" },
            ].map((skill, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="minecraft-slot group relative rounded-lg p-6 hover:border-primary transition-all transform hover:shadow-lg cursor-pointer flex flex-col"
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="font-bold text-foreground mb-4">{skill.name}</h3>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-500"
                    style={{
                      width: hoveredSkill === skill.name ? "100%" : `${skill.level}%`,
                    }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-16 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-12 bg-foreground" />
            <h2 className="text-3xl font-bold text-foreground">Projects</h2>
          </div>

          <div className="space-y-4">
            {/* Featured Project - Compact */}
            <div className="group relative rounded-sm border border-border bg-card/50 overflow-hidden hover:border-foreground/50 transition-all p-5 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Project Image - Smaller */}
                <div className="hidden md:flex w-20 h-20 flex-shrink-0 bg-muted rounded-sm items-center justify-center text-2xl">
                  ▶️
                </div>

                {/* Project Content - Compact */}
                <div className="flex-1">
                  <span className="inline-block text-xs font-semibold px-2 py-1 rounded mb-2 bg-foreground/10 text-foreground">
                    Featured
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">YouTube Homepage Clone</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    A fully functional clone of YouTube's homepage built using HTML and CSS.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs px-2 py-1 rounded border border-foreground/20 text-foreground">HTML5</span>
                    <span className="text-xs px-2 py-1 rounded border border-foreground/20 text-foreground">CSS3</span>
                  </div>
                  <button
                    className="text-sm font-semibold hover:underline flex items-center gap-1 transition-all"
                    style={{ color: "currentColor" }}
                  >
                    View Project
                    <span className="group-hover:translate-x-0.5 transition-transform text-xs">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Coming Soon Projects - Minimalistic Grid */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide opacity-70">
                Upcoming
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: "🎮", title: "Game Project", desc: "Interactive gaming experience" },
                  { icon: "🛠️", title: "Web Application", desc: "Full-stack web app" },
                ].map((project, i) => (
                  <div
                    key={i}
                    className="group relative rounded-sm border border-border bg-card/30 p-4 hover:border-foreground/40 hover:bg-card/50 transition-all"
                  >
                    <div className="text-2xl mb-2">{project.icon}</div>
                    <h4 className="text-sm font-bold text-foreground mb-1">{project.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{project.desc}</p>
                    <p className="text-xs font-semibold opacity-60">Coming Soon</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="minecraft-cave relative py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-12 bg-accent" />
            <h2 className="text-4xl font-bold text-background">Contact</h2>
          </div>

          <p className="text-lg text-background/80 mb-12 max-w-2xl">
            Let's connect! Whether you want to discuss projects, collaborate, or just chat about gaming and
            problem-solving, I'm always down to chat.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Mail, label: "Email", value: "ranjith@example.com", href: "mailto:ranjith@example.com" },
              { icon: Linkedin, label: "LinkedIn", value: "In Progress", href: "#" },
              { icon: Github, label: "GitHub", value: "In Progress", href: "#" },
              { icon: MoreVertical, label: "Discord", value: "In Progress", href: "#" },
            ].map((contact, i) => {
              const Icon = contact.icon
              return (
                <a
                  key={i}
                  href={contact.href}
                  onMouseEnter={() => setHoveredContact(contact.label)}
                  onMouseLeave={() => setHoveredContact(null)}
                  className="minecraft-slot group relative rounded-lg p-6 text-center transition-all transform hover:scale-105 cursor-pointer flex flex-col items-center justify-center min-h-32"
                >
                  <Icon
                    className={`w-8 h-8 mb-2 transition-all ${
                      hoveredContact === contact.label ? "text-accent scale-125" : "text-background/60"
                    }`}
                  />
                  <p className="font-bold text-background text-sm mb-1">{contact.label}</p>
                  <p className="text-xs text-background/70 group-hover:text-accent transition-colors">
                    {contact.value}
                  </p>
                </a>
              )
            })}
          </div>

          <Button className="w-full md:w-auto bg-accent hover:bg-primary text-background font-semibold py-3">
            Send me a message
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm">© 2025 Ranjith N M | Crafted with passion and creativity.</p>
        </div>
      </footer>
    </div>
  )
}
