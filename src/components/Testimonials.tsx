import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'EduTech Solutions',
    role: 'Founder & CEO',
    image: '👩‍💼',
    rating: 5,
    feedback:
      'Fahari Technologies transformed our school management process. Their attention to detail and commitment to quality is unmatched. Highly recommended!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'Global Retail Inc.',
    role: 'Operations Director',
    image: '👨‍💼',
    rating: 5,
    feedback:
      'The inventory system they built has streamlined our operations by 40%. Professional, responsive, and delivers on promises. Outstanding team!',
  },
  {
    id: 3,
    name: 'Amara Okafor',
    company: 'African SACCO Network',
    role: 'Executive Director',
    image: '👩‍🔬',
    rating: 5,
    feedback:
      'Working with Fahari was a game-changer for our cooperative. Their solution is robust, secure, and perfectly tailored to our needs.',
  },
  {
    id: 4,
    name: 'David Rodriguez',
    company: 'Hotel Paradise',
    role: 'General Manager',
    image: '👨‍💻',
    rating: 5,
    feedback:
      'Their hotel booking system has improved guest experience significantly. Support team is always available and solutions are always top-notch.',
  },
  {
    id: 5,
    name: 'Grace Kipchoge',
    company: 'Fashion Forward',
    role: 'E-Commerce Manager',
    image: '👩‍🎨',
    rating: 5,
    feedback:
      'Our online store conversion rates increased by 35% after using their e-commerce platform. Truly exceptional work and great partnership!',
  },
  {
    id: 6,
    name: 'James Mutua',
    company: 'TechStartups Kenya',
    role: 'Venture Lead',
    image: '👨‍🚀',
    rating: 5,
    feedback:
      'Fahari Technologies consistently delivers quality solutions. They understand startups and provide cost-effective, scalable solutions. Best choice!',
  },
]

const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[0] }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white border border-slate-200 rounded-xl p-8 h-full flex flex-col hover:shadow-xl transition-all"
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.2 }}
          >
            <Star size={18} className="fill-yellow-400 text-yellow-400" />
          </motion.div>
        ))}
      </div>

      {/* Feedback */}
      <p className="text-slate-700 leading-relaxed mb-6 flex-grow italic">
        "{testimonial.feedback}"
      </p>

      {/* Divider */}
      <div className="border-t border-slate-200 my-6" />

      {/* Client Info */}
      <div className="flex items-center gap-4">
        <div className="text-4xl">{testimonial.image}</div>
        <div>
          <p className="font-bold text-slate-900">{testimonial.name}</p>
          <p className="text-sm text-slate-600">{testimonial.role}</p>
          <p className="text-xs text-blue-600 font-semibold">{testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Get 3 items to display on desktop
  const getVisibleTestimonials = () => {
    const items = []
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length])
    }
    return items
  }

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Real feedback from real clients who have transformed their businesses with our solutions.
          </p>
        </motion.div>

        {/* Testimonials Carousel - Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8 mb-8">
            {getVisibleTestimonials().map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="p-3 rounded-full bg-white border border-slate-300 hover:bg-slate-100 transition-colors"
            >
              <ChevronLeft size={20} className="text-slate-600" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-blue-600'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="p-3 rounded-full bg-white border border-slate-300 hover:bg-slate-100 transition-colors"
            >
              <ChevronRight size={20} className="text-slate-600" />
            </motion.button>
          </div>
        </div>

        {/* Testimonials Stack - Mobile/Tablet */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2 group"
            >
              View More Testimonials
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
