import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, TrendingUp, PieChart } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="home" className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                variants={itemVariants}
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight"
              >
                Building Digital Solutions That Move Businesses Forward
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg"
              >
                Fahari Technologies develops websites, business systems, and custom software that help organizations streamline operations, improve customer experiences, and grow with confidence.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group"
              >
                View Our Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Dashboard Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <h3 className="text-white font-bold text-lg">Analytics Dashboard</h3>
                  <p className="text-slate-400 text-sm">Real-time business metrics</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Stat Card 1 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-lg p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-slate-400 text-xs font-medium mb-1">Revenue Growth</p>
                        <p className="text-white font-bold text-2xl">+48%</p>
                      </div>
                      <TrendingUp className="text-blue-400" size={20} />
                    </div>
                  </motion.div>

                  {/* Stat Card 2 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-lg p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-slate-400 text-xs font-medium mb-1">Active Users</p>
                        <p className="text-white font-bold text-2xl">12.4K</p>
                      </div>
                      <BarChart3 className="text-emerald-400" size={20} />
                    </div>
                  </motion.div>

                  {/* Stat Card 3 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-lg p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-slate-400 text-xs font-medium mb-1">Conversion Rate</p>
                        <p className="text-white font-bold text-2xl">3.2%</p>
                      </div>
                      <PieChart className="text-orange-400" size={20} />
                    </div>
                  </motion.div>

                  {/* Stat Card 4 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 rounded-lg p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-slate-400 text-xs font-medium mb-1">Performance</p>
                        <p className="text-white font-bold text-2xl">98.5%</p>
                      </div>
                      <BarChart3 className="text-purple-400" size={20} />
                    </div>
                  </motion.div>
                </div>

                {/* Chart Preview */}
                <div className="bg-slate-700/50 rounded-lg p-4 backdrop-blur-sm border border-slate-600/50">
                  <div className="flex gap-1 items-end h-16">
                    {[40, 65, 48, 72, 55, 78, 62].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                      />
                    ))}
                  </div>
                  <p className="text-slate-400 text-xs mt-3">Monthly performance trend</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card - Top Right */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="absolute top-12 -right-8 lg:right-0 bg-white rounded-xl shadow-xl p-6 w-72 border border-slate-200"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">📊</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Smart Analytics</p>
                    <p className="text-sm text-slate-600">Real-time insights</p>
                  </div>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <p className="text-sm text-slate-600">Track performance across all channels</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="absolute -bottom-8 -left-8 lg:-left-20 bg-white rounded-xl shadow-xl p-6 w-64 border border-slate-200"
            >
              <div className="space-y-3">
                <p className="font-semibold text-slate-900">Enterprise-Grade</p>
                <p className="text-sm text-slate-600">Secure, scalable solutions designed for growth</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
