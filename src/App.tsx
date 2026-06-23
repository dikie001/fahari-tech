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
import Toast from './components/Toast'
import useToast from './hooks/useToast'

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const { toasts, removeToast, success, info } = useToast()

  const handleContactClick = () => {
    setIsContactModalOpen(true)
  }

  const handleSocialClick = () => {
    info('Coming soon! Follow us on social media.', 3000)
  }

  return (
    <div className="bg-white">
      <Navigation onContactClick={handleContactClick} />
      <Hero onContactClick={handleContactClick} />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <DevelopmentProcess />
      <Testimonials />
      <CTA onContactClick={handleContactClick} />
      <Footer onSocialClick={handleSocialClick} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <Toast toasts={toasts} onClose={removeToast} />
    </div>
  )
}
