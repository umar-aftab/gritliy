"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[--bg]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Your Recruiting Partner
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
           <h3 className="text-3xl font-bold text-gray-100">
              Umar Aftab
            </h3>

            <p className="text-lg text-gray-400">
              Founder | Software Engineer & Technical Recruiter
            </p>

            <div className="prose prose-lg bg-[--bg]">
              <p>
                Umar brings more than 10 years of experience in software development and
                technology, having worked with organizations including Attabotics, Alberta
                Health Services, Alberta Pensions Services Corporation and Ceridian. His
                engineering background gives him first-hand insight into how technical
                teams operate and what distinguishes an exceptional technical hire.
              </p>

              <p>
                Today, Umar specializes in recruiting Solutions Engineers across the
                United States, Canada and Europe. He combines technical understanding,
                targeted sourcing and personalized candidate engagement to connect
                technology companies with professionals who can bridge the gap between
                complex products, customers and business outcomes.
              </p>
            </div>

            {/* <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-clay-400">100+</div>
                <div className="text-sm text-gray-400">Placements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-clay-400">95%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-clay-400">10+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div> */}
          </motion.div>

        {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video bg-gradient-to-br from-[--panel] to-[--muted] rounded-2xl overflow-hidden group"
          >
            <iframe
              src="https://www.youtube.com/embed/eza-l-kBK40"
              title="Nadeem Introduction Video"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            {/* Play Button Overlay }
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 bg-[--bg]/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-[--text] ml-1" />
              </div>
            </div>
            
            {/* Watch Introduction Label }</div>
            <div className="absolute bottom-4 left-4 bg-[--bg]/90 backdrop-blur-sm px-4 py-2 rounded-lg pointer-events-none">
              <p className="text-sm font-medium text-[--text-muted]">Watch Introduction</p>
            </div>
          </motion.div>*/}

           <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900"
          >
           <div className="absolute inset-0 p-8 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">4,200+</div>
                  <div className="text-xs text-white/80">Candidates Sourced</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">125+</div>
                  <div className="text-xs text-white/80">Candidate Interviews</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">2</div>
                  <div className="text-xs text-white/80">Offers Generated</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold text-white mb-1">10+</div>
                  <div className="text-xs text-white/80">Years in Technology</div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <h4 className="text-lg font-semibold text-white mb-2">
                  Engineering Experience Meets Recruitment
                </h4>

                <p className="text-sm text-white/80">
                  Specialized Solutions Engineering recruitment across the US, Canada and
                  Europe
                </p>
              </div>
            </div>
            
            <div className="absolute top-4 right-4">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-lg">UA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}