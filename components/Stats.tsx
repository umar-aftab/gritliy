"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    number: "95%",
    label: "Success Rate",
    description: "of placements result in long-term hires",
  },
  {
    icon: Users,
    number: "100+",
    label: "Engineers Placed",
    description: "across all technical disciplines",
  },
  {
    icon: Award,
    number: "89%",
    label: "Retention Rate",
    description: "after 12 months",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Results That Speak
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A track record of excellence in technical recruiting
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-9">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-gradient-to-br from-clay-500 to-clay-700 rounded-2xl flex items-center justify-center mx-auto mb-4"
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                className="text-5xl font-bold bg-gradient-to-r from-white to-[--accent] bg-clip-text text-transparent mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
