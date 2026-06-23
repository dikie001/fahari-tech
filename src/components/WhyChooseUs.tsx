import { motion } from 'framer-motion'
import {
  Award,
  Shield,
  Zap,
  LifeBuoy,
  Clock,
  Users,
  CheckCircle2,
} from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Quality Development',
    description: 'Award-winning team delivering exceptional code and design standards.',
  },
  {
    icon: Shield,
    title: 'Secure Solutions',
    description: 'Enterprise-grade security with compliance to international standards.',
  },
  {
    icon: Zap,
    title: 'Scalable Architecture',
    description: 'Built to grow with your business, handling increased demands effortlessly.',
  },
  {
    icon: LifeBuoy,
    title: 'Ongoing Support',
    description: '24/7 technical support and maintenance for uninterrupted operations.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Efficient development cycles without compromising on quality.',
  },
  {
    icon: Users,
    title: 'Client-Focused Approach',
    description: 'Your success is our priority, with transparent communication throughout.',
  },
]

const stats = [
  { number: '500+', label: 'Projects Delivered', icon: '🎯' },
  { number: '98%', label: 'Client Satisfaction', icon: '😊' },
  { number: '8+', label: 'Years Experience', icon: '📅' },
  { number: '50+', label: 'Team Members', icon: '👥' },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
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
            Why Choose Fahari Technologies
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We bring together expertise, innovation, and dedication to deliver solutions that exceed expectations.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4"
                >
                  <IconComponent size={28} />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{reason.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 my-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="text-3xl mb-2"
              >
                {stat.icon}
              </motion.div>
              <p className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                {stat.number}
              </p>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8">
            Trusted By Leading Organizations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'ISO 27001 Certified',
              'GDPR Compliant',
              'SOC 2 Type II',
              'Industry-Leading Uptime',
              'Continuous Security Audits',
              'Data Privacy Standards',
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="text-blue-600 flex-shrink-0" size={24} />
                <span className="text-slate-700 font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
