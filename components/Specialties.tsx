"use client";

import { motion } from "framer-motion";
import {
  Atom,
  BrainCircuit,
  Database,
  FlaskConical,
  Layers3,
  Workflow,
} from "lucide-react";

const specialties = [
  {
    icon: FlaskConical,
    title: "Scientific & Laboratory Software",
    description:
      "Software supporting laboratory workflows, experimentation and scientific collaboration.",
    color: "from-violet-500 to-violet-700",
  },
  {
    icon: Atom,
    title: "Materials & Chemistry Informatics",
    description:
      "Platforms combining scientific data, chemistry, materials science and machine learning.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Database,
    title: "ELN, LIMS & Scientific Data",
    description:
      "Systems that structure experimental data, laboratory operations and scientific knowledge.",
    color: "from-cyan-500 to-cyan-700",
  },
  {
    icon: Workflow,
    title: "R&D Digital Transformation",
    description:
      "Enterprise software helping research teams modernize workflows and manage organizational change.",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    icon: Layers3,
    title: "Formulation, Quality & PLM",
    description:
      "Platforms connecting product development, formulations, quality processes and lifecycle data.",
    color: "from-amber-500 to-amber-700",
  },
  {
    icon: BrainCircuit,
    title: "AI & Data Infrastructure for Science",
    description:
      "Technical platforms applying AI, analytics and data infrastructure to scientific R&D.",
    color: "from-rose-500 to-rose-700",
  },
];

export default function Specialties() {
  return (
    <section
      id="specialties"
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
            Industry Focus
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            R&amp;D Software Specialties
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Recruiting across the platforms transforming how scientific and
            engineering teams manage data, conduct research and bring new
            products to market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;

            return (
              <motion.article
                key={specialty.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -6 }}
                className="h-full bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${specialty.color} rounded-xl flex items-center justify-center mb-5 shadow-sm`}
                >
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {specialty.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {specialty.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}