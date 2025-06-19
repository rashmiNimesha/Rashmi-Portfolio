import Link from "next/link"
import { ArrowRight, FacebookIcon, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-dark rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-green-medium rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-green-medium rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">Associate Software Engineer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-dark/20 to-green-medium/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-medium to-green-dark">
               Rashmi Nimesha Gamage
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              I craft exceptional digital experiences with code, creativity, and a passion for innovation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="relative overflow-hidden group bg-gradient-to-r from-green-dark to-green-medium border-0">
                <span className="relative z-10 flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-green-medium to-green-dark opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/rashmiNimesha" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/rashmi-nimesha-gamage-8a2649222/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://web.facebook.com/nishmi.gamage.1" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <FacebookIcon className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              <Link href="mailto:rashmigamage174@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

  
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-dark rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-green-medium rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-green-dark/20 to-green-medium/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/profilephoto.jpg?height=600&width=600"
                  alt="Rashmi Nimesha Gamage"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Looking for new opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                 I am an Associate Software Engineer with a strong academic foundation in programming, algorithms, and software engineering principles. I recently completed my studies and am awaiting graduation. I’m an undergraduate at the University of Colombo, pursuing a Bachelor of Information and Communication Technology (Honors), while also studying part-time for a BSc in Computer Science at the Informatics Institute of Technology (IIT). Through this dual academic path, I’ve built a solid understanding of core technical concepts and developed a passion for solving real-world problems through software.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  and staying up-to-date with the latest industry trends.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Rashmi Nimesha Gamage</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">rashmigamage174@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Maharagama, Sri Lanka</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

              <div className="mt-8">
              <a href="/Rashmi_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
              <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">
               Download Resume
                </Button>
                </a>
              </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-dark rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="Languages:  Java, Python, C++, Dart" level={90} />
            <SkillBadge name="Frameworks: Springboot, Flutter" level={80} />
            <SkillBadge name="Web Development: HTML, CSS, JS, React" level={70} />
            <SkillBadge name="Database: MySQL, MongoDB " level={90} />
            <SkillBadge name="Project Management Tools: Jira" level={80} />
            <SkillBadge name="Test Automation Tools: Selenium, Junit" level={60} />
            <SkillBadge name="IDEs: IntelliJ, VS code" level={90} />
            <SkillBadge name="Mobile APP development: Android Native JAVA" level={60} />
            <SkillBadge name="Version Control: GitHub" level={70} />
            <SkillBadge name="AWS" level={20} />
            <SkillBadge name="Postman" level={70} />
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-green-medium rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Cashless/Cardless Payment System for Sri Lanka’s Public Bus Services"
              description="An IoT-based cashless payment system for transit services include an admin dashboard for analytics to 
improve operational efficiency, a fleet owner app for tracking and reporting earnings, a bus operator app for 
real-time payment notifications, and a passenger app for QR-based payments through a virtual wallet. "
              tags={["JAVA", "SpringBoot", "XML", "MySQL"]}
              image="/canpay.png?height=400&width=600"
              demoUrl="https://www.figma.com/design/AZjqPHCqmq6pC73HdmqFoX/CanPay---Passenger---V1?node-id=39-92&t=W8D3sAGl8wwJAAMs-1"
              repoUrl="https://github.com/rashmiNimesha/canPay-api.git"
            />
            <ProjectCard
              title="Academic Outcomes Prediction"
              description="Developed a predictive model to determine students' academic outcomes using logistic regression. The system classifies students into three categories: graduate (successfully complete studies), dropout (leave due to academic failure), and enrolled (remain but show signs of discouragement). Aimed at supporting early intervention strategies in educational institutions."
              tags={["Python", "Jupiter Notebook "]}
              image="/LearningPrediction.drawio.png?height=400&width=600"
              demoUrl="https://youtu.be/HdQkuprx5UU"
              repoUrl="https://github.com/rashmiNimesha/ACADEMIC-OUTCOMES-PREDICTION.git"
            />
            <ProjectCard
              title="RECYCHAMP"
              description="RecyChamp is a mobile application promoting environmental sustainability by encouraging users to participate in recycling challenges. The app provides a platform for users to discover, join, and compete in various recycling challenges, earn badges, and contribute to a greener planet."
              tags={["Flutter", "Firebase", " Cloud Firestore "]}
              image="/recychamp.png?height=400&width=600"
              demoUrl="https://youtu.be/XonICD4DVPM?si=nqGcosMz95iP_B6-"
              repoUrl="https://github.com/vinulays/recychamp.git"
            />
            <ProjectCard
              title="TechPluse Mobile Application"
              description="TechPluse is a mobile application designed to deliver the latest news and updates related to academics, events, and sports within the Faculty of Technology at the University of Colombo. The app provides students and staff with a centralized platform to stay informed about faculty-related activities, announcements, and achievements, ensuring seamless communication and engagement across the university community."
              tags={["JAVA", "Firebase"]}
              image="/techpluse.png?height=400&width=600"
              demoUrl="https://www.figma.com/proto/k4f3BM0TMl1UYrcf0vKZ6h/TechPulse?node-id=7-59&t=m4C3HliEtehuOs38-1"
              repoUrl="https://github.com/rashmiNimesha/techPluseApp.git"
            />
            <ProjectCard
              title="CropCare Mobile Application"
              description="The high-fidelity prototype of the CropCare mobile application presents a visually polished and interactive design that closely resembles the final product. CropCare is a comprehensive mobile solution developed to support farmers by providing critical agricultural information and a collaborative platform. The prototype features smooth navigation, detailed UI components, and realistic content to reflect core functionalities."
              tags={["Figma"]}
              image="/cropcare.png?height=400&width=600"
              demoUrl="https://youtu.be/KdHR5jsso24"
              repoUrl="https://www.figma.com/proto/VFTvOOOGPymD4QKfRvKUnd/CropCare-Individual-Coursework?node-id=0-1&t=4B8N55bVmIZSvUVC-1"
            />
            {/* <ProjectCard
              title="Portfolio Website"
              description="This portfolio website built with Next.js and Tailwind CSS."
              tags={["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            /> */}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-green-dark rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-medium rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-green-dark rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-green-medium" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">rashmigamage174@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-green-medium" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">https://www.linkedin.com/in/rashmi-nimesha-gamage-8a2649222/</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-green-medium" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">https://github.com/rashmiNimesha</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for freelance work and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-medium to-green-dark">
                Rash
              </span>
              <span className="text-white">Gamage</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Rashmi Nimesha Gamage. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/rashmiNimesha" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/rashmi-nimesha-gamage-8a2649222/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            
            <Link href="mailto:rashmigamage174@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
