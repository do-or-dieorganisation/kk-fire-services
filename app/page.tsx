import Header from '@/components/layout/Header';
import Hero from '@/components/Hero';
import QuickStats from '@/components/sections/QuickStats';
import About from '@/components/About';
import Vision from '@/components/sections/Vision';
import Services from '@/components/sections/Services';
import Consultancy from '@/components/sections/Consultancy';
import AMC from '@/components/sections/Amc';
import Clients from '@/components/sections/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuickStats />
      <About />
      <Vision />
      <Services />
      <Consultancy />
      <AMC />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}