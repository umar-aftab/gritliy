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
            Case Study: Uncountable
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a specialized Solutions Engineer pipeline for an enterprise
            R&amp;D software company
          </p>
        </motion.div>

        <div className="bg-[--bg] rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <span className="text-sm font-semibold text-clay-600">
                  THE CHALLENGE
                </span>

                <h3 className="text-2xl font-bold text-gray-900 mt-2">
                  Finding Scientific Experts Who Can Sell Technical Software
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                Uncountable needed Solutions Engineers capable of working with
                enterprise R&amp;D teams across the United States and Europe. The
                search required an uncommon combination of chemistry or materials
                science expertise, customer-facing technical experience and an
                understanding of complex scientific software and R&amp;D workflows.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />

                  <div>
                    <div className="font-semibold text-gray-900">
                      Advanced Scientific Backgrounds
                    </div>

                    <div className="text-sm text-gray-600">
                      Targeting candidates with advanced degrees in chemistry,
                      chemical engineering and materials science
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />

                  <div>
                    <div className="font-semibold text-gray-900">
                      Customer-Facing Technical Experience
                    </div>

                    <div className="text-sm text-gray-600">
                      Identifying professionals experienced in solutions
                      engineering, technical consulting, demonstrations and
                      enterprise implementations
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />

                  <div>
                    <div className="font-semibold text-gray-900">
                      International Talent Search
                    </div>

                    <div className="text-sm text-gray-600">
                      Building targeted pipelines across the United States, United
                      Kingdom and Germany
                    </div>
                  </div>
                </div>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-clay-900 text-white px-6 py-3 rounded-full font-medium hover:bg-clay-800 transition-colors"
              >
                Build Your Candidate Pipeline
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>

            <div className="bg-gradient-to-br from-clay-100 to-clay-200 p-8 lg:p-12">
              <div className="mb-8">
                <span className="text-sm font-semibold text-clay-700">
                  THE RESULTS
                </span>

                <h3 className="text-2xl font-bold text-gray-900 mt-2">
                  A High-Quality Technical Pipeline
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-[--bg]/80 backdrop-blur p-4 rounded-xl">
                  <Users className="w-8 h-8 text-clay-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">23</div>
                  <div className="text-sm text-gray-600">
                    Candidates Submitted
                  </div>
                </div>

                <div className="bg-[--bg]/80 backdrop-blur p-4 rounded-xl">
                  <Calendar className="w-8 h-8 text-clay-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">11</div>
                  <div className="text-sm text-gray-600">
                    Interviews Generated
                  </div>
                </div>

                <div className="bg-[--bg]/80 backdrop-blur p-4 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-clay-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">2</div>
                  <div className="text-sm text-gray-600">
                    Reached Mid-Round
                  </div>
                </div>

                <div className="bg-[--bg]/80 backdrop-blur p-4 rounded-xl">
                  <CheckCircle className="w-8 h-8 text-clay-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">1</div>
                  <div className="text-sm text-gray-600">
                    Reached Final Round
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-clay-600 pl-4 text-gray-700">
                <p className="italic">
                  A focused search built around scientific credibility, enterprise
                  R&amp;D experience and the ability to translate complex software
                  into measurable customer value.
                </p>

                <p className="mt-2 text-sm font-semibold text-gray-900">
                  — GRITLIY Solutions Engineering Search
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

