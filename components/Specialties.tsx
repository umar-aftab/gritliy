"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Database, Zap, Cloud, Target, Rocket, Bot } from "lucide-react";

const specialties = [
  { icon: Bot, title: "Autonomous & Robotics", color: "from-purple-500 to-purple-700" },
  { icon: Cpu, title: "Deep Technology", color: "from-blue-500 to-blue-700" },
  { icon: Rocket, title: "Space Research & Technology", color: "from-green-500 to-green-700" },
  { icon: Zap, title: "AI Hardware & Semi-conductors", color: "from-yellow-500 to-yellow-700" }, 
  { icon: Target, title: "NeuroTech", color: "from-red-500 to-red-700" },
];

export default function Specialties() {
  return (
    <section id="specialties" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Specialties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Deep expertise in cutting-edge technologies and emerging fields
          </p>
        </motion.div>

        {/* Mobile: 2 columns, Desktop: 5 columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${specialty.color} rounded-lg flex items-center justify-center mb-4`}>
                <specialty.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-center leading-tight">{specialty.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Alternative layout for perfect centering on larger screens */}
        <style jsx>{`
          @media (min-width: 768px) {
            .grid-cols-5 {
              grid-template-columns: repeat(5, minmax(0, 1fr));
            }
          }
        `}</style>
      </div>
    </section>
  );
}