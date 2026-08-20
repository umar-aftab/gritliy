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
    name: "Nicholas Polimeni",
    role: "Software Engineer",
    company: "Together AI",
    image: "/testimonials/nicholas-polimeni.jpg",
    rating: 5,
    text: "Umar is an excellent and kind recruiter! He worked diligently to identify roles where I was a good match. Umar always kept a positive and supportive attitude, securing me multiple interviews at promising companies. I highly recommend working with Umar as a job seeker or as a startup seeking talent.",
    project: "Technical Recruitment",
    date: "March 2026",
    highlight: "Multiple interviews secured"
  },
  {
    id: 2,
    name: "M Faizan Khan",
    role: "Technical Programs | Optimus & AI Infrastructure",
    company: "Tesla",
    image: "/testimonials/m-faizan-khan.jpg",
    rating: 5,
    text: "During my undergraduate studies, I had the privilege of working with Umar on several course projects and found him to be of immense utility to every group he worked with. He works with diligence and unwavering concentration, giving attention to the finer details. His presence on the team is motivating, and his ideas always take you one step closer to the solution. He is an effective team player with a logical approach to every problem.",
    project: "Software Engineering",
    date: "April 2012",
    highlight: "Diligent technical problem-solver"
  },
  {
    id: 3,
    name: "Cory Janssen",
    role: "AI Business Advisor",
    company: "Technology & AI",
    image: "/testimonials/cory-janssen.jpg",
    rating: 5,
    text: "Umar worked with us producing content. He did a great job, and we'd highly recommend him.",
    project: "Technical Content",
    date: "December 2011",
    highlight: "Highly recommended"
  },
  {
    id: 4,
    name: "Ahmad Tamimi",
    role: "Co-Founder",
    company: "Pennix.ai & Perryx.ai",
    image: "/testimonials/ahmad-tamimi.jpg",
    rating: 5,
    text: "I found Umar to be consistently pleasant, tackling all assignments with dedication and a smile. Besides being a joy to work with, Umar is a take-charge person who is able to present creative ideas and communicate their benefits. He successfully developed several websites for key clients and participated in the development of enterprise-level web applications for 3mushrooms. Umar's dedicated work contributed to increased revenue, profits and customer satisfaction. He was also extraordinarily helpful in other areas of the company, including creating training material and taking a leadership role in sales meetings.",
    project: "Web & Enterprise Applications",
    date: "November 2011",
    highlight: "Improved client satisfaction"
  },
  {
    id: 5,
    name: "Fadi Hourani",
    role: "SEO Program Manager",
    company: "3mushrooms Corp.",
    image: "/testimonials/fadi-hourani.jpg",
    rating: 5,
    text: "I had the privilege of working with Umar Aftab when we were updating the content of 3mushrooms Corp.'s website. Umar is an insightful, self-motivated and multi-skilled developer and colleague. He always maintains very good relationships with co-workers and is always up for a challenge with a genuine team spirit. I enjoyed working with him and look forward to continuing our professional relationship.",
    project: "Website Development",
    date: "June 2011",
    highlight: "Insightful and multi-skilled"
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
                    {`"${testimonials[currentIndex].text}"`}
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




