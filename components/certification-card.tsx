"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  description: string
  certificateUrl: string
}

export function CertificationCard({ title, issuer, date, description, certificateUrl }: CertificationCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleViewCertificate = () => {
    window.open(certificateUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative h-full overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 group-hover:border-green-dark/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-green-dark/10 to-green-medium/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative h-full flex flex-col p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-dark to-green-medium flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <Badge variant="secondary" className="bg-zinc-700/50 hover:bg-zinc-700 text-zinc-300">
                {date}
              </Badge>
            </div>
            <div className="absolute top-3 right-3">
              <div
                className={`w-3 h-3 rounded-full ${isHovered ? "bg-green-500" : "bg-zinc-500"} transition-colors duration-300`}
              ></div>
            </div>
          </div>

          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-green-medium font-medium mb-3">{issuer}</p>
            <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-700/50">
            <Button
              onClick={handleViewCertificate}
              size="sm"
              className="w-full bg-gradient-to-r from-green-dark to-green-medium hover:from-green-medium hover:to-green-dark border-0 transition-all duration-300"
            >
              View Certificate
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
