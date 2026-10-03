"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-400 via-white to-clay-400" />

      {/* Animated Orbs */}
      <div className="absolute inset-0 pointer-events-none">
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
            className="inline-flex items-center gap-2 bg-clay-100/60 backdrop-blur-sm px-4 py-2 rounded-full border border-clay-200/60"
          >
            <Sparkles className="w-4 h-4 text-clay-700" />

            <span className="text-sm font-medium text-clay-800">
              R&amp;D Software Recruitment
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-gray-900">
              Specialist recruiting for
            </span>

            <br />

            <span className="bg-gradient-to-r from-clay-900 via-clay-700 to-clay-500 bg-clip-text text-transparent">
              R&amp;D software companies
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We help scientific software companies hire Solutions Engineers,
            Implementation Consultants and technical commercial talent who
            understand both complex science and enterprise software.
          </p>

          <p className="text-sm sm:text-base font-medium text-gray-600">
            Scientific Software
            <span className="mx-2 text-clay-500">•</span>
            Lab Informatics
            <span className="mx-2 text-clay-500">•</span>
            Materials Informatics
            <span className="mx-2 text-clay-500">•</span>
            R&amp;D Digitalization
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-clay-900 text-white px-8 py-4 rounded-full font-medium hover:bg-clay-800 transition-colors"
            >
              Discuss a Search
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="#process"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-white/70 text-clay-900 px-8 py-4 rounded-full font-medium border border-clay-300 hover:bg-white transition-colors backdrop-blur-sm"
            >
              See How We Recruit
            </motion.a>
          </div>

          <p className="text-sm text-gray-600">
            Supporting specialized searches across the United States, Canada
            and Europe.
          </p>
        </motion.div>
      </div>
    </section>
  );
}