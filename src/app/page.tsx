import Image from "next/image";
import Link from "next/link";
import { ResumeSection } from "./components/ResumeSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Animated backgrounds */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="star"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 5 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent-primary/20">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-xl font-bold text-accent-primary">Spencer Mines</div>
            <ul className="flex gap-6">
              <li><a href="#about" className="hover:text-accent-primary transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-accent-primary transition-colors">Projects</a></li>
              <li><a href="#resume" className="hover:text-accent-primary transition-colors">Resume</a></li>
              <li><a href="#contact" className="hover:text-accent-primary transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute -right-20 top-20 w-40 h-40 rounded-full bg-accent-secondary/20 blur-3xl"></div>
        <div className="absolute -left-20 top-40 w-40 h-40 rounded-full bg-accent-primary/20 blur-3xl"></div>
        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <div className="relative w-24 h-24 mb-6 float-animation">
            <Image 
              src="/rocket.svg" 
              alt="Professional" 
              width={100} 
              height={100} 
              className="w-full h-full" 
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary float-animation">Spencer Mines</h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            Computer Science Student & <span className="text-accent-primary">Professional</span> Developer
          </p>
          <a
            href="#projects"
            className="rounded-full border border-solid border-accent-primary transition-colors flex items-center justify-center bg-accent-primary text-background gap-2 hover:bg-accent-secondary hover:border-accent-secondary font-medium text-base h-12 px-6 animate-pulse"
          >
            Explore My Portfolio
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute -left-20 bottom-20 w-40 h-40 rounded-full bg-planet-glow/30 blur-3xl"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 backdrop-blur-sm bg-background/20 p-6 rounded-lg border border-accent-primary/20">
              <p className="text-lg">
                I'm a Computer Science student at Binghamton University with a passion for 
                software development, machine learning, and creating innovative solutions.
              </p>
              <p className="text-lg">
                My technical expertise includes Python, JavaScript, and various frameworks
                and technologies for web development, data analysis, and artificial intelligence.
              </p>
              <p className="text-lg">
                I enjoy working on challenging projects that leverage cutting-edge technologies
                to create innovative and effective solutions.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-accent-primary float-animation">
                <Image 
                  src="/Spencer.jpg"
                  alt="Spencer Mines"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute -inset-1 bg-planet-glow/20 blur-md rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-accent-secondary/10 relative">
        <div className="absolute -right-20 bottom-20 w-40 h-40 rounded-full bg-accent-primary/20 blur-3xl"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillCard title="Languages" skills={["Python", "JavaScript", "TypeScript", "SQL"]} />
            <SkillCard title="Web Development" skills={["React", "Next.js", "HTML/CSS", "Node.js"]} />
            <SkillCard title="Data Science" skills={["Pandas", "NumPy", "Machine Learning", "Data Visualization"]} />
            <SkillCard title="Tools" skills={["Git", "Docker", "AWS", "Linux"]} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="absolute -left-20 top-20 w-40 h-40 rounded-full bg-planet-glow/30 blur-3xl"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Glycemic Control in Type 1 Diabetics"
              description="Research paper comparing control algorithms for closed-loop insulin delivery systems in patients with type 1 diabetes. The paper evaluates Model Predictive Control (MPC) and Proportional Integral Derivative (PID) algorithms for maintaining glucose levels."
              technologies={["Research", "Medical Technology", "Control Systems"]}
              imageUrl="/glycemic_planet.svg"
            />
            <ProjectCard
              title="Exoplanet Database"
              description="An interactive web application that provides a comprehensive, visually rich exploration platform for exoplanets discovered throughout our galaxy. It aggregates data from NASA's Exoplanet Archive and enhances it with descriptions and imagery from Wikipedia."
              technologies={["Python", "Flask", "SQLite", "Pandas", "Bootstrap"]}
              imageUrl="/planet.svg"
            />
            <ProjectCard
              title="NYC Simulator"
              description="A simulation application modeling New York City's urban dynamics. Users can interact with various city systems to understand cause and effect relationships in urban planning and development."
              technologies={["Python", "Pygame", "JSON", "Object-Oriented Design"]}
              imageUrl="/planet.svg"
            />
            <ProjectCard
              title="Reinforcement Learning with Pacman"
              description="Implementation of various reinforcement learning algorithms to enable an AI agent to learn optimal strategies for playing Pacman. Includes value iteration, Q-learning, and approximate Q-learning approaches."
              technologies={["Python", "AI/ML", "Reinforcement Learning", "PyGame"]}
              imageUrl="/planet.svg"
            />
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <ResumeSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute -right-20 center w-40 h-40 rounded-full bg-accent-primary/20 blur-3xl"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-accent-secondary">Contact Me</h2>
          <div className="max-w-md mx-auto backdrop-blur-sm bg-background/20 p-8 rounded-lg border border-accent-primary/20 hover:border-accent-primary/30 transition-all duration-300">
            <p className="text-center mb-6">
              Ready to start a professional collaboration? Send me a message and let's discuss how we can work together.
            </p>
            <div className="text-center">
              <a
                href="mailto:spencermines@example.com"
                className="inline-block rounded-full border border-solid border-accent-primary transition-colors flex items-center justify-center bg-accent-primary text-background gap-2 hover:bg-accent-secondary hover:border-accent-secondary font-medium text-base h-12 px-8 mx-auto"
              >
                Send Message
              </a>
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <a href="https://github.com/Spencer29496" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:text-accent-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/in/spencer-mines" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:text-accent-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-accent-primary/20 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="star"
              style={{
                width: `${Math.random() * 1.5 + 0.5}px`,
                height: `${Math.random() * 1.5 + 0.5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 5 + 2}s`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 relative">
          <p className="text-center text-sm text-accent-primary/70">
          </p>
        </div>
      </footer>
    </div>
  );
}

// Component for skill cards
function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="backdrop-blur-sm bg-background/20 p-6 rounded-lg border border-accent-primary/20 hover:border-accent-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] group">
      <h3 className="text-xl font-semibold mb-4 text-accent-primary group-hover:text-accent-secondary transition-colors">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 bg-accent-primary rounded-full"></span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Component for project cards
function ProjectCard({ 
  title, 
  description, 
  technologies, 
  imageUrl 
}: { 
  title: string; 
  description: string; 
  technologies: string[];
  imageUrl: string;
}) {
  return (
    <div className="backdrop-blur-sm bg-background/20 rounded-lg border border-accent-primary/20 overflow-hidden hover:border-accent-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] group">
      <div className="h-48 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-70"></div>
        
        {/* Project image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-20 h-20 float-animation">
            <Image src={imageUrl} alt={title} width={80} height={80} className="w-full h-full" />
          </div>
        </div>
        
        {/* Project title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-2xl font-bold text-white z-10 mt-24">{title}</h3>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <p>{description}</p>
        <div>
          <h4 className="text-sm font-semibold text-accent-primary mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="text-xs px-2 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
