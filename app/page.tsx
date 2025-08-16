import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Specialties from "@/components/Specialties";
import Stats from "@/components/Stats";
import TechnologyStack from "@/components/TechnologyStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <Specialties />
        <About />
        <Testimonials />
        <Stats />
        <TechnologyStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
