"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  MessagesSquare,
  Network,
  SearchCheck,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Calibrate the Search",
    description:
      "Define the scientific background, software experience, customer responsibilities and commercial outcomes required from the hire.",
  },
  {
    number: "02",
    icon: Network,
    title: "Map the Talent Market",
    description:
      "Identify relevant R&D software companies, adjacent platforms and specialized talent pools across the agreed locations.",
  },
  {
    number: "03",
    icon: SearchCheck,
    title: "Evaluate the Evidence",
    description:
      "Assess candidates for domain knowledge, enterprise software experience, customer-facing ability and practical alignment with the role.",
  },
  {
    number: "04",
    icon: MessagesSquare,
    title: "Manage and Refine",
    description:
      "Maintain candidate engagement, collect interview feedback and continuously refine the search around real hiring-team decisions.",
  },
];

export default function RecruitingProcess() {
  return (
    <section
      id="process"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-clay-700 mb-3">
            Our Process
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Built for Complex R&amp;D Searches
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A focused search process designed for roles requiring scientific
            credibility, technical depth and strong customer communication.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="relative h-full bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-clay-100 to-clay-200 rounded-xl flex items-center justify-center">
                    <Icon
                      className="w-6 h-6 text-clay-800"
                      aria-hidden="true"
                    />
                  </div>

                  <span className="text-3xl font-bold text-gray-200">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-clay-900 text-white px-7 py-3.5 rounded-full font-medium hover:bg-clay-800 transition-colors"
          >
            Discuss Your Hiring Challenge
          </a>
        </motion.div>
      </div>
    </section>
  );
}