"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-500 via-white to-clay-500" />
      
      {/* Animated Orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-clay-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-clay-300/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-clay-100/50 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-clay-600" />
            <span className="text-sm font-medium text-clay-700">
              Where Technology Meets Talent 
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 via-clay-800 to-clay-600 bg-clip-text text-transparent">
              Engineering Excellence.
            </span>
            <br />
            <span className="text-gray-900">One Visionary Hire</span>
            <br />
            <span className="text-gray-600">at a Time.</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized recruiting that connects world-class engineering teams with extraordinary opportunities through intelligent automation and human expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-clay-900 text-white px-8 py-4 rounded-full font-medium hover:bg-clay-800 transition-colors"
            >
              Start Your Search
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#process"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[--bg] text-clay-900 px-8 py-4 rounded-full font-medium border border-clay-200 hover:bg-clay-50 transition-colors"
            >
              Learn Our Process
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}