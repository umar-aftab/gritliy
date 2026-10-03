import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Specialties from "@/components/Specialties";
import Stats from "@/components/Stats";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Process from "@/components/Process";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="overflow-x-hidden">
        {/* What Gritliy does and understands */}
        <Services />
        <Specialties />

        {/* Proof */}
        <CaseStudy />
        <Stats />

        {/* How the service works */}
        <Process />

        {/* Founder credibility and supporting feedback */}
        <About />
        <Testimonials />

        {/* Conversion */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
