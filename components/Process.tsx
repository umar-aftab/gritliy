"use client";

import { motion } from "framer-motion";
import { Search, Users, Filter, Sparkles, Send, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description: "Deep dive into your requirements, team culture, and growth objectives. We map your ideal candidate profile using our proprietary framework.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Sourcing",
    description: "Generate similar companies using Ocean.io & Crunchbase. Pull targeted candidate pools from your competitor landscape.",
  },
  {
    icon: Filter,
    title: "Intelligent Screening",
    description: "Apply custom rulesets and AI ranking. Filter by startup experience, domain expertise, and technical capabilities.",
  },
  {
    icon: Users,
    title: "Precision Matching",
    description: "Score candidates 0-100 based on your criteria. Shortlist only 80%+ matches for maximum relevance.",
  },
  {
    icon: Send,
    title: "Personalized Outreach",
    description: "Craft AI-generated personalized messages. Deploy multi-channel campaigns via email, LinkedIn, and SMS.",
  },
  {
    icon: CheckCircle,
    title: "Seamless Hiring",
    description: "Guide both parties through interviews and negotiations. Ensure successful onboarding and long-term retention.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A systematic, AI-enhanced approach to finding the perfect match
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-clay-500 to-clay-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-clay-600 mb-2">
                      Step {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}