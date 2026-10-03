"use client";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Globe2,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";

type SubmitStatus = "idle" | "success" | "error";

const initialFormData = {
  name: "",
  email: "",
  company: "",
  role: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] =
    useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to send your enquiry. Please try again."
        );
      }

      setSubmitStatus("success");
      setFormData(initialFormData);

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 6000);
    } catch (error) {
      setSubmitStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "A network error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg outline-none transition-all focus:ring-2 focus:ring-clay-500 focus:border-clay-500 disabled:opacity-60 disabled:cursor-not-allowed";

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-100 via-white to-clay-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-clay-700 mb-3">
            Start a Conversation
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Discuss Your R&amp;D Software Search
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tell us about the role, product and expertise you need. Your
            enquiry will go directly to Umar for a focused initial review.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-stretch">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-gray-950 to-gray-800 text-white rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-3">
                Speak Directly with Umar
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8">
                Share the hiring challenge, required scientific domain and
                customer responsibilities. We can then determine whether
                Gritliy is the right search partner.
              </p>

              <div className="space-y-6">
                <motion.a
                  href="mailto:umar@gritliy.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail
                      className="w-6 h-6"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <div className="text-sm text-gray-400">
                      Email
                    </div>

                    <div className="text-base sm:text-lg">
                      umar@gritliy.com
                    </div>
                  </div>
                </motion.a>

                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Globe2
                      className="w-6 h-6"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <div className="text-sm text-gray-400">
                      Search Coverage
                    </div>

                    <div className="text-base sm:text-lg">
                      United States, Canada and Europe
                    </div>
                  </div>
                </div>

                <motion.a
                  href="https://www.linkedin.com/in/umaraftab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Linkedin
                      className="w-6 h-6"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <div className="text-sm text-gray-400">
                      LinkedIn
                    </div>

                    <div className="text-base sm:text-lg">
                      Connect with Umar
                    </div>
                  </div>
                </motion.a>
              </div>

              <div className="mt-8 pt-8 border-t border-white/15">
                <h4 className="font-semibold text-white mb-4">
                  Useful details to include
                </h4>

                <ul className="space-y-3 text-sm text-gray-300">
                  {[
                    "Role title and location",
                    "Scientific or technical domain",
                    "Required software and customer experience",
                    "Compensation range and hiring timeline",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="w-5 h-5 text-clay-400 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Work Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company
                  </label>

                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClasses}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Hiring For
                  </label>

                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className={inputClasses}
                    disabled={isSubmitting}
                  >
                    <option value="">
                      Select a role category
                    </option>

                    <option value="solutions-engineering">
                      Solutions Engineering
                    </option>

                    <option value="scientific-implementation">
                      Scientific Implementation
                    </option>

                    <option value="technical-consulting">
                      Technical Consulting
                    </option>

                    <option value="customer-success">
                      Technical Customer Success
                    </option>

                    <option value="rd-software">
                      R&amp;D Software Engineering
                    </option>

                    <option value="scientific-data-ai">
                      Scientific Data or AI
                    </option>

                    <option value="plm-lab-informatics">
                      PLM or Lab Informatics
                    </option>

                    <option value="other-specialized-role">
                      Other Specialized Role
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tell Us About the Search
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                  placeholder="Role requirements, scientific domain, location, compensation range, hiring timeline and the biggest challenge you are currently facing."
                  disabled={isSubmitting}
                />
              </div>

              <div aria-live="polite">
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3"
                  >
                    <AlertCircle
                      className="w-5 h-5 text-red-600 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />

                    <div>
                      <p className="text-sm font-medium text-red-800">
                        Your enquiry could not be sent
                      </p>

                      <p className="text-sm text-red-700 mt-1">
                        {errorMessage}
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-green-600 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />

                    <div>
                      <p className="text-sm font-medium text-green-800">
                        Your enquiry has been sent
                      </p>

                      <p className="text-sm text-green-700 mt-1">
                        Umar will review the search requirements and respond
                        directly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={
                  isSubmitting ? undefined : { scale: 1.02 }
                }
                whileTap={
                  isSubmitting ? undefined : { scale: 0.98 }
                }
                disabled={isSubmitting}
                className="w-full bg-clay-900 text-white py-4 rounded-lg font-medium hover:bg-clay-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Enquiry...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <CheckCircle2
                      className="w-5 h-5"
                      aria-hidden="true"
                    />
                    Enquiry Sent
                  </>
                ) : (
                  <>
                    Request a Hiring Consultation
                    <Send
                      className="w-5 h-5"
                      aria-hidden="true"
                    />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}