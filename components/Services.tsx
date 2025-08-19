"use client";

import { motion } from "framer-motion";
import { Users, Brain, Database } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Strategic Talent Sourcing",
    description: "Expert sourcing and evaluation of top-tier engineering talent across all technical disciplines.",
  },
 
  {
    icon: Database,
    title: "Precision Matching",
    description: "Data-driven alignment with a human touch between candidates’ capabilities and your specific requirements.",
  },

   {
    icon: Brain,
    title: "Embedded Recruiting",
    description: "Building world-class engineering teams through intelligent scouting and human expertise",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three core services that transform how companies build their engineering teams
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-clay-100 to-clay-200 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-clay-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}