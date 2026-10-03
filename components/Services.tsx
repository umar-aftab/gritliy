"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  Presentation,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: Presentation,
    title: "Solutions Engineering & Technical Sales",
    description:
      "Customer-facing technical professionals who can lead discovery, demonstrations, pilots, technical evaluations and value cases with enterprise R&D teams.",
    roles:
      "Solutions Engineers • Sales Engineers • Scientific Pre-Sales",
  },
  {
    icon: FlaskConical,
    title: "Scientific Implementation & Customer Delivery",
    description:
      "Scientists and technical consultants who can translate laboratory workflows, configure complex platforms, manage change and drive successful adoption.",
    roles:
      "Scientific Implementation • Technical Consulting • Customer Success",
  },
  {
    icon: Workflow,
    title: "R&D Software, Data & Product Talent",
    description:
      "Technical professionals building and supporting software across scientific data, lab informatics, materials informatics, PLM and R&D digitalization.",
    roles:
      "Product • Software Engineering • Scientific Data • PLM",
  },
];

export default function Services() {
  return (
    <section
      id="services"
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
            Search Capabilities
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            What We Recruit For
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Specialized searches for roles at the intersection of scientific
            expertise, enterprise software and customer outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="h-full bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-clay-100 to-clay-200 rounded-xl flex items-center justify-center mb-6">
                  <Icon
                    className="w-7 h-7 text-clay-800"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="pt-5 border-t border-gray-200">
                  <p className="text-sm font-medium text-clay-800 leading-relaxed">
                    {service.roles}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}