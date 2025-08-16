'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Briefcase, Building2, Calendar, User } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  project: string;
  date: string;
  highlight: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechVentures Inc.",
    image: "/testimonials/sarah.jpg",
    rating: 5,
    text: "Nadeem's approach to technical recruiting is unparalleled. He found us a senior architect who not only had the exact skillset we needed but also became a key culture champion. His understanding of both technical requirements and team dynamics is exceptional.&quot;,
    project: "Senior Software Architect",
    date: "2024",
    highlight: "Filled in 2 weeks"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CTO & Co-founder",
    company: "AI Dynamics",
    image: "/testimonials/marcus.jpg",
    rating: 5,
    text: "Working with Nadeem transformed our hiring process. He sourced ML engineers from companies we hadn't even considered, and his screening saved us countless hours. Three of our best engineers came through his pipeline.",
    project: "ML Engineering Team",
    date: "2024",
    highlight: "3 successful hires"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Head of Talent",
    company: "Quantum Systems",
    image: "/testimonials/emily.jpg",
    rating: 5,
    text: "Nadeem doesn't just fill positions; he builds partnerships. His deep understanding of embedded systems helped us find engineers who could work across hardware and software seamlessly. The RecruitFlow AI system he's developing is game-changing.",
    project: "Embedded Systems Engineers",
    date: "2023",
    highlight: "90% retention rate"
  },
  {
    id: 4,
    name: "David Park",
    role: "Engineering Director",
    company: "BioTech Innovations",
    image: "/testimonials/david.jpg",
    rating: 5,
    text: "In the competitive biotech space, finding engineers with the right mix of skills is nearly impossible. Nadeem found us candidates from adjacent industries we never would have discovered. His network in specialized tech is incredible.",
    project: "Biotech Software Team",
    date: "2024",
    highlight: "5 placements"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "CEO",
    company: "Robotics Plus",
    image: "/testimonials/lisa.jpg",
    rating: 5,
    text: "Nadeem's personalized outreach approach resulted in a 70% response rate from senior engineers who typically ignore recruiters. He crafted messages that actually resonated with our target candidates. Exceptional results.",
    project: "Robotics Engineers",
    date: "2023",
    highlight: "70% response rate"
  },
  {
    id: 6,
    name: "Alex Kumar",
    role: "VP Product",
    company: "CloudScale Networks",
    image: "/testimonials/alex.jpg",
    rating: 5,
    text: "The quality of candidates Nadeem provides is consistently outstanding. He takes time to understand not just the role, but our product roadmap and technical challenges. This depth of understanding shows in every candidate he presents.",
    project: "Platform Engineers",
    date: "2024",
    highlight: "100% interview-to-offer"
  }
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Load testimonials from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('testimonials');
    if (stored) {
      try {
        const parsedTestimonials = JSON.parse(stored);
        if (parsedTestimonials && parsedTestimonials.length > 0) {
          setTestimonials(parsedTestimonials);
        }
      } catch (error) {
        console.error('Error parsing testimonials from localStorage:', error);
      }
    }

    // Listen for testimonial updates from admin
    const handleTestimonialsUpdate = (event: CustomEvent) => {
      setTestimonials(event.detail);
    };

    window.addEventListener('testimonialsUpdated', handleTestimonialsUpdate as EventListener);
    
    return () => {
      window.removeEventListener('testimonialsUpdated', handleTestimonialsUpdate as EventListener);
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  if (testimonials.length === 0) {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-[#0B0909] to-[#1a1916] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-gray-400">No testimonials available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-[#0B0909] to-[#1a1916] text-white relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#4A4844] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#35322F] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by innovative companies to build world-class engineering teams
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-[#2F2C28]/40 backdrop-blur-sm border border-[#4A4844]/30 rounded-lg p-8 md:p-12">
                <div className="p-0">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-[#4A4844] opacity-50" />
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed font-light">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4A4844] to-[#35322F] flex items-center justify-center">
                        <User className="w-8 h-8 text-gray-300" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg text-white">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-gray-400">
                          {testimonials[currentIndex].role}
                        </div>
                        <div className="text-gray-500 flex items-center gap-1 mt-1">
                          <Building2 className="w-4 h-4" />
                          {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="flex flex-wrap gap-3">
                      <div className="px-3 py-1 bg-[#4A4844]/20 rounded-full border border-[#4A4844]/30 text-sm flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {testimonials[currentIndex].project}
                      </div>
                      <div className="px-3 py-1 bg-[#35322F]/20 rounded-full border border-[#35322F]/30 text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {testimonials[currentIndex].date}
                      </div>
                      <div className="px-3 py-1 bg-green-900/20 rounded-full border border-green-700/30 text-sm text-green-400">
                        ✓ {testimonials[currentIndex].highlight}
                      </div>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mt-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 p-3 rounded-full bg-[#3D3A37]/50 hover:bg-[#3D3A37] transition-all duration-200 backdrop-blur-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 p-3 rounded-full bg-[#3D3A37]/50 hover:bg-[#3D3A37] transition-all duration-200 backdrop-blur-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {testimonials.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 h-2 bg-[#4A4844]' 
                    : 'w-2 h-2 bg-[#4A4844]/30 hover:bg-[#4A4844]/50'
                } rounded-full`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
