"use client";

import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div className="flex items-center space-x-2">
      <div className="relative w-10 h-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="clayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7a6d5f" />
              <stop offset="100%" stopColor="#4A4844" />
            </linearGradient>
          </defs>
          <path
            d="M 30 20 Q 20 20 20 30 L 20 60 Q 20 80 40 80 L 60 80 Q 70 80 75 75 L 75 60 Q 75 50 65 50 L 50 50 L 50 35 L 65 35 Q 80 35 80 50 L 80 70 Q 80 85 65 85 L 35 85 Q 15 85 15 65 L 15 35 Q 15 15 35 15 L 65 15"
            fill="none"
            stroke="url(#clayGradient)"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-clay-700 to-clay-900 bg-clip-text text-transparent">
        GRITLIY
      </span>
    </motion.div>
  );
}