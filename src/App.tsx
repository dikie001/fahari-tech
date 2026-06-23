import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import FeaturedProjects from './components/FeaturedProjects'
import DevelopmentProcess from './components/DevelopmentProcess'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <DevelopmentProcess />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
