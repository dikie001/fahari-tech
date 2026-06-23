import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&h=900&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark Overlay Gradient - Left to Right - More Transparent */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-100/80 to-transparent"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8 max-w-2xl"
        >

          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/40 rounded-full text-sm font-medium text-white">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Innovating Since 2015
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                Digital Solutions
              </span>
              <br />
              <span className="text-white drop-shadow-lg">That Transform</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white drop-shadow-lg leading-relaxed max-w-xl"
          >
            We craft elegant, high-performance websites and business systems that drive growth. From concept to launch, we deliver solutions tailored to your success.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-6"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-2 group w-fit"
            >
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white/90 border-2 border-slate-200 text-slate-900 rounded-xl font-semibold hover:border-blue-300 hover:bg-white backdrop-blur-sm transition-all flex items-center justify-center gap-2 group w-fit"
            >
              View Portfolio
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-12 max-w-lg"
          >
            <div className="space-y-1">
              <p className="text-3xl font-bold text-slate-900">50+</p>
              <p className="text-sm text-slate-600">Projects Delivered</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-slate-900">100+</p>
              <p className="text-sm text-slate-600">Happy Clients</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-slate-900">9+</p>
              <p className="text-sm text-slate-600">Years Experience</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
