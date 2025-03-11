'use client';

import dynamic from 'next/dynamic';

import About from '../../components/Sections/About';
import Contact from '../../components/Sections/Contact';
import Footer from '../../components/Sections/Footer';
import Hero from '../../components/Sections/Hero';
import Portfolio from '../../components/Sections/Portfolio';
import Resume from '../../components/Sections/Resume';
import Testimonials from '../../components/Sections/Testimonials';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../../components/Sections/Header'), { ssr: false });

export default function HomeContent() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}