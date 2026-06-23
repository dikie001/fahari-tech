import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import FeaturedProjects from './components/FeaturedProjects'
import DevelopmentProcess from './components/DevelopmentProcess'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="bg-white">
      <Navigation onContactClick={() => setIsContactModalOpen(true)} />
      <Hero onContactClick={() => setIsContactModalOpen(true)} />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <DevelopmentProcess />
      <Testimonials />
      <CTA onContactClick={() => setIsContactModalOpen(true)} />
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
