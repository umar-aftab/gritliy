"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Code2,
  GraduationCap,
  Search,
  Globe2,
} from "lucide-react";

const advantages = [
  {
    icon: Code2,
    title: "Technical Fluency",
    description:
      "More than 10 years in software and technology provide a practical understanding of technical products, teams and candidate experience.",
  },
  {
    icon: GraduationCap,
    title: "Engineering Education",
    description:
      "An M.Eng. in Electrical and Computer Engineering and a bachelor’s degree in Software Engineering.",
  },
  {
    icon: Search,
    title: "Evidence-Based Evaluation",
    description:
      "Candidates are assessed against real requirements, likely rejection risks and the specific outcomes expected from the role.",
  },
  {
    icon: Globe2,
    title: "International Search Experience",
    description:
      "Experience sourcing specialized professionals across the United States, Canada, the United Kingdom and Europe.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-950 to-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-clay-400 mb-3">
            About Gritliy
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Technical Recruiting Led by an Engineer
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            First-hand engineering experience combined with focused recruiting
            across R&amp;D software and scientific technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Umar Aftab
              </h3>

              <p className="text-lg font-medium text-clay-400">
                Founder | Software Engineer &amp; Technical Recruiter
              </p>
            </div>

            <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
              <p>
                Umar is a former software engineer with more than 10 years of
                experience in technology. He has worked with organizations
                including Attabotics, Alberta Health Services, Alberta Pensions
                Services Corporation and Ceridian.
              </p>

              <p>
                His engineering background gives him first-hand insight into
                how technical teams operate, how complex software is built and
                what separates genuine technical ability from keyword-level
                familiarity.
              </p>

              <p>
                Today, Umar focuses Gritliy on recruiting for R&amp;D software
                companies. His work covers Solutions Engineering, scientific
                implementation, technical consulting, lab informatics, PLM and
                R&amp;D digitalization roles across North America and Europe.
              </p>

              <p>
                This combination of software experience and specialized
                recruiting helps Gritliy identify professionals who can
                understand complex products, communicate with scientific
                customers and contribute to measurable business outcomes.
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-clay-600 text-white px-6 py-3 rounded-full font-medium hover:bg-clay-500 transition-colors"
            >
              Discuss Your Search
              <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
          >
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-clay-400 mb-3">
                The Gritliy Advantage
              </p>

              <h3 className="text-2xl font-bold text-white">
                What Umar Brings to Every Search
              </h3>
            </div>

            <div className="space-y-6">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;

                return (
                  <motion.div
                    key={advantage.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 w-11 h-11 bg-clay-500/15 border border-clay-400/20 rounded-xl flex items-center justify-center">
                      <Icon
                        className="w-5 h-5 text-clay-400"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {advantage.title}
                      </h4>

                      <p className="text-sm text-gray-400 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}