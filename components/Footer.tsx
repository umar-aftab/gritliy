"use client";

import Link from "next/link";
import {
  ArrowUp,
  Globe2,
  Linkedin,
  Mail,
} from "lucide-react";
import Logo from "./Logo";

const quickLinks = [
  { label: "Roles We Recruit", href: "#services" },
  { label: "R&D Specialties", href: "#specialties" },
  { label: "Our Process", href: "#process" },
  { label: "About Gritliy", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const specialties = [
  "Scientific & Laboratory Software",
  "Materials & Chemistry Informatics",
  "ELN, LIMS & Scientific Data",
  "R&D Digital Transformation",
  "Formulation, Quality & PLM",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <Logo />

            <p className="mt-5 text-gray-400 text-sm leading-relaxed max-w-xs">
              Specialist recruiting for R&amp;D software companies operating
              at the intersection of science, enterprise technology and
              customer outcomes.
            </p>

            <div className="flex items-start gap-2 mt-5 text-sm text-gray-400">
              <Globe2
                className="w-4 h-4 mt-0.5 shrink-0"
                aria-hidden="true"
              />

              <span>
                Supporting specialized searches across the United States,
                Canada and Europe.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-semibold text-white mb-4">
              Explore
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Specialties */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              R&amp;D Software Focus
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              {specialties.map((specialty) => (
                <li key={specialty}>{specialty}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Discuss a Search
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Hiring for a role that requires scientific knowledge and
              enterprise software experience?
            </p>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:umar@gritliy.com"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Mail
                    className="w-4 h-4 shrink-0"
                    aria-hidden="true"
                  />

                  <span>umar@gritliy.com</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/umaraftab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <Linkedin
                    className="w-4 h-4 shrink-0"
                    aria-hidden="true"
                  />

                  <span>Connect with Umar</span>
                </a>
              </li>
            </ul>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center mt-6 bg-clay-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-clay-500 transition-colors"
            >
              Discuss Your Hiring Needs
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} GRITLIY. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Return to the top of the page"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}