"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Calendar, TrendingUp } from "lucide-react";

export default function CaseStudy() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Case Study: BioTech Innovations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            How we built a world-class engineering team in 60 days
          </p>
        </motion.div>

        <div className="bg-[--bg] rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <span className="text-sm font-semibold text-clay-600">THE CHALLENGE</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">
                  Scaling an ML Team for FDA Approval
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                BioTech Innovations needed to rapidly scale their machine learning team to meet FDA submission deadlines. 
                They required engineers with a rare combination of ML expertise, biotech domain knowledge, and regulatory experience.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">5 Senior ML Engineers</div>
                    <div className="text-sm text-gray-600">Specialized in medical imaging and signal processing</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">2 Technical Leads</div>
                    <div className="text-sm text-gray-600">With FDA 510(k) submission experience</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">3 Data Scientists</div>
                    <div className="text-sm text-gray-600">Expertise in clinical trial data analysis</div>
                  </div>
                </div>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-clay-900 text-white px-6 py-3 rounded-full font-medium hover:bg-clay-800 transition-colors"
              >
                Start Your Success Story
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>

            <div className="bg-gradient-to-br from-clay-100 to-clay-200 p-8 lg:p-12">
              <div className="mb-8">
                <span className="text-sm font-semibold text-clay-700">THE RESULTS</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">
                  Delivered Beyond Expectations
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-[--bg]/80 backdrop-blur p-4 rounded-xl">
                  <Users className="w-8 h-8 text-clay-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">10</div>
                  <div className="text-sm text-gray-600">Engineers Hired</div>
                </div>
                <div className="bg-[--bg]/80 backdrop-blur p-4 rounded-xl">
                  <Calendar className="w-8 h-8 text-clay-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">45</div>
                  <div className="text-sm text-gray-600">Days to Complete</div>
                </div>
                <div className="bg-[--bg]/80 backdrop-blur p-4 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-clay-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Offer Acceptance</div>
                </div>
                <div className="bg-[--bg]/80 backdrop-blur p-4 rounded-xl">
                  <CheckCircle className="w-8 h-8 text-clay-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">FDA</div>
                  <div className="text-sm text-gray-600">Approval Achieved</div>
                </div>
              </div>

              <blockquote className="border-l-4 border-clay-600 pl-4 italic text-gray-700">
                "Nadeem didn't just fill positions – he understood our technical challenges and found engineers who became instrumental in our FDA approval. 
                The quality of candidates was exceptional."
                <footer className="mt-2 text-sm font-semibold text-gray-900">
                  — Dr. Sarah Chen, CTO
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
