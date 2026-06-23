import { motion } from 'framer-motion'
import {
  Globe,
  Code2,
  ShoppingCart,
  Building2,
  Wrench,
  Server,
  Lightbulb,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed specifically for your business needs and operational requirements.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Complete online store solutions with payment integration, inventory management, and marketing tools.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Building2,
    title: 'Business Management Systems',
    description: 'Integrated platforms to streamline operations, improve efficiency, and enhance team collaboration.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Wrench,
    title: 'Website Maintenance & Support',
    description: 'Ongoing maintenance, updates, and technical support to keep your digital assets running smoothly.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Server,
    title: 'Hosting & Domain Services',
    description: 'Reliable hosting infrastructure with domain registration and management for peace of mind.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Lightbulb,
    title: 'Technology Consulting',
    description: 'Strategic guidance on technology adoption, digital transformation, and infrastructure optimization.',
    color: 'from-yellow-500 to-yellow-600',
  },
]

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) => {
  const IconComponent = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
    >
      {/* Background accent on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Content */}
      <div className="relative space-y-4">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}
        >
          <IconComponent size={32} />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>

        {/* Link */}
        <motion.div
          whileHover={{ x: 4 }}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm pt-2 group-hover:text-blue-700 transition-colors"
        >
          Learn More
          <ArrowRight size={16} />
        </motion.div>
      </div>

      {/* Border animation on hover */}
      <div className="absolute inset-0 border-2 border-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity" />
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50">
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
            Our Services
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Comprehensive technology solutions tailored to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-20"
        >
          <p className="text-slate-600 mb-6">
            Can't find what you're looking for?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2 group"
          >
            Get in Touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
