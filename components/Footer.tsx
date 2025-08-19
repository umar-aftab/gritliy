"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Mail, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 text-gray-400 text-sm">
              Engineering Excellence.<br />
              One Visionary Hire at a Time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="font-semibold mb-4">Specialties</h3>
            <ul className="space-y-2 text-gray-400">
              <li>AI & Machine Learning</li>
              <li>Software Engineering</li>
              <li>Embedded Systems</li>
              <li>Robotics & Automation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="mailto:info@gritliy.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  nadeem@gritliy.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nadz1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} GRITLIY. All rights reserved.
          </p>

          <a
            href="https://www.iron-ai.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-sm hover:text-white transition-colors mt-1 md:mt-0"
          >
            Developed and sculpted by <span className="underline underline-offset-4">Iron AI</span>
          </a>

          <button
            onClick={scrollToTop}
            className="mt-1 md:mt-0 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}