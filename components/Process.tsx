"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  MessagesSquare,
  Network,
  Search,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Search Calibration",
    description:
      "Define the role outcomes, scientific background, software experience, customer responsibilities and non-negotiable requirements.",
  },
  {
    icon: Network,
    title: "Talent Market Mapping",
    description:
      "Map relevant R&D software companies, adjacent platforms, scientific organizations and specialized talent pools.",
  },
  {
    icon: Search,
    title: "Targeted Sourcing",
    description:
      "Identify professionals whose scientific, technical and commercial experience aligns with the specific hiring challenge.",
  },
  {
    icon: BadgeCheck,
    title: "Evidence-Based Qualification",
    description:
      "Evaluate domain knowledge, enterprise software experience, customer-facing ability, location, compensation and practical motivation.",
  },
  {
    icon: FileCheck2,
    title: "Context-Rich Submission",
    description:
      "Present qualified candidates with clear evidence of alignment, likely strengths and potential concerns for the hiring team to review.",
  },
  {
    icon: MessagesSquare,
    title: "Interview and Search Refinement",
    description:
      "Maintain candidate engagement, collect interview feedback and continuously refine the search around actual hiring decisions.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 bg-gradient-to-b from-gray-950 to-gray-900"
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
            Our Process
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Built for Complex R&amp;D Searches
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A focused recruitment process for roles requiring scientific
            credibility, enterprise software experience and strong customer
            communication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="relative h-full"
              >
                <div className="h-full bg-white p-7 rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-clay-500 to-clay-700 rounded-xl flex items-center justify-center">
                      <Icon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </div>

                    <span className="text-3xl font-bold text-gray-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-clay-700 mb-2">
                    Step {index + 1}
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-sm text-gray-400 max-w-3xl mx-auto mt-12"
        >
          Technology supports the search, while technical evidence and human
          judgment determine which candidates move forward.
        </motion.p>
      </div>
    </section>
  );
}