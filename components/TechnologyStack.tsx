"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TechnologyStack() {
  const technologies = [
   {
        name: "hireEZ",
        src: "/hireez.jpg",
        category: "AI Recruiting Platform",
        description:
        "AI-first, people-centric recruiting platform (formerly Hiretual) for sourcing, engagement, and talent CRM.",
    },
    {
        name: "lemlist",
        src: "/lemlist.jpg",
        category: "Outbound & Outreach",
        description:
        "Prospecting tool to automate multichannel outreach (email, LinkedIn, calls) and boost reply rates.",
    },
    {
        name: "Lusha",
        src: "/lusha.jpg",
        category: "Sales Intelligence",
        description:
        "B2B data & AI sales intelligence—direct dials, emails, intent, and enrichment for go-to-market teams.",
    },
    {
        name: "Apollo.io",
        src: "/apollo.jpg",
        category: "Sales Engagement / Outbound",
        description:
        "AI outbound engine with database, sequences, inbox, and analytics for B2B sales teams.",
    },
    {
        name: "Juicebox (PeopleGPT)",
        src: "/juicebox.jpg",
        category: "People Search / Talent Intelligence",
        description:
        "AI-powered people search (PeopleGPT) to find and reason about candidates and contacts.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-black font-bold">Technology Stack</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Powered by cutting-edge technologies that enable intelligent recruiting and seamless user experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 h-full flex flex-col">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image 
                    src={tech.src} 
                    alt={tech.name}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </motion.div>
                
                <div className="text-center flex-1 flex flex-col">
                  <div 
                    className="inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 self-center"
                    style={{ 
                      backgroundColor: '#4A484420',
                      color: '#3D3A37'
                    }}
                  >
                    {tech.category}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-black">{tech.name}</h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {tech.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            Built with modern, scalable technologies to deliver exceptional recruiting experiences
          </p>
        </motion.div>
      </div>
    </section>
  );
}