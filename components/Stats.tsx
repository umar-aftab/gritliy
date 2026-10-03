"use client";

import { motion } from "framer-motion";
import {
  Award,
  FileCheck2,
  Search,
  UserRoundCheck,
} from "lucide-react";

const stats = [
  {
    icon: Search,
    number: "6,000+",
    label: "Professionals Sourced",
    description: "across specialized technical and scientific talent markets",
  },
  {
    icon: FileCheck2,
    number: "200+",
    label: "Candidate Submissions",
    description: "presented for demanding technical searches",
  },
  {
    icon: UserRoundCheck,
    number: "~125",
    label: "Interviews Secured",
    description: "with startups and technology companies",
  },
  {
    icon: Award,
    number: "3",
    label: "Reached Offer Stage",
    description: "after progressing through competitive interview processes",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-clay-400 mb-3">
            Recruiting Track Record
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Measurable Search Outcomes
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Consistent sourcing, candidate engagement and interview generation
            across complex technical searches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="text-center bg-white/5 border border-white/10 rounded-2xl px-6 py-8"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.2 }}
                  className="w-14 h-14 bg-gradient-to-br from-clay-500 to-clay-700 rounded-xl flex items-center justify-center mx-auto mb-5"
                >
                  <Icon
                    className="w-7 h-7 text-white"
                    aria-hidden="true"
                  />
                </motion.div>

                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-clay-300 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {stat.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <p className="text-xs text-gray-500 text-center max-w-3xl mx-auto mt-10">
          Figures reflect Gritliy&apos;s technical recruiting activity across
          independent and partner-led searches.
        </p>
      </div>
    </section>
  );
}