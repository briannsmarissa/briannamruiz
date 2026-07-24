"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface HoverLiftProps {
  children: ReactNode
  className?: string
}

export function HoverLift({ children, className }: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
