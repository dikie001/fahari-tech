import { motion } from 'framer-motion'
import {
  Lightbulb,
  ListChecks,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  Check,
} from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Discovery',
    description: 'Understand your business goals, challenges, and requirements through detailed consultation.',
    icon: Lightbulb,
    details: ['Goal alignment', 'Market analysis', 'Requirement gathering', 'Stakeholder interviews'],
  },
  {
    number: 2,
    title: 'Planning',
    description: 'Create a comprehensive roadmap with timelines, milestones, and resource allocation.',
    icon: ListChecks,
    details: ['Project roadmap', 'Timeline definition', 'Resource planning', 'Risk assessment'],
  },
  {
    number: 3,
    title: 'Design',
    description: 'Develop beautiful, user-centric designs with prototypes and interactive mockups.',
    icon: Palette,
    details: ['UX/UI design', 'Prototyping', 'User testing', 'Design system creation'],
  },
  {
    number: 4,
    title: 'Development',
    description: 'Build robust, scalable solutions using best practices and modern technologies.',
    icon: Code2,
    details: ['Code development', 'API integration', 'Database design', 'Version control'],
  },
  {
    number: 5,
    title: 'Testing',
    description: 'Rigorous quality assurance ensuring reliability, security, and performance.',
    icon: TestTube2,
    details: ['QA testing', 'Security audit', 'Performance testing', 'User acceptance'],
  },
  {
    number: 6,
    title: 'Deployment & Support',
    description: 'Launch with confidence and provide ongoing support for continued success.',
    icon: Rocket,
    details: ['Production deployment', 'Monitoring setup', 'Performance tracking', 'Support team'],
  },
]

export default function DevelopmentProcess() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white">
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
            Our Development Process
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A proven methodology ensuring successful project delivery at every stage.
          </p>
        </motion.div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden lg:block">
          {/* Timeline Container */}
          <div className="relative">
            {/* Connecting Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200 origin-left"
            />

            {/* Steps */}
            <div className="grid grid-cols-6 gap-4 relative z-10">
              {steps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    {/* Circle Node */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-32 h-32 mx-auto mb-6 rounded-full bg-white border-4 border-blue-600 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                    >
                      <div className="text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                        <IconComponent size={36} />
                      </div>
                      <span className="text-xl font-bold text-slate-900">
                        {step.number}
                      </span>
                    </motion.div>

                    {/* Step Info */}
                    <div className="px-2">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4">
                        {step.description}
                      </p>

                      {/* Details */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileHover={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="space-y-1 overflow-hidden"
                      >
                        {step.details.map((detail) => (
                          <div
                            key={detail}
                            className="flex items-center justify-center gap-1 text-xs text-blue-600"
                          >
                            <Check size={12} />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-500 to-blue-200 origin-top"
            />

            {/* Steps */}
            <div className="space-y-8 relative z-10">
              {steps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="pl-24"
                  >
                    {/* Circle Node */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute left-0 w-12 h-12 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center text-blue-600 font-bold shadow-lg cursor-pointer"
                    >
                      <IconComponent size={24} />
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-4 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all"
                    >
                      <h3 className="font-bold text-slate-900 mb-2">
                        {step.number}. {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">
                        {step.description}
                      </p>
                      <div className="space-y-1">
                        {step.details.map((detail) => (
                          <div
                            key={detail}
                            className="flex items-center gap-2 text-xs text-blue-600"
                          >
                            <Check size={14} />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200"
        >
          {[
            {
              title: 'Transparency',
              description: 'Regular updates and clear communication throughout the project.',
            },
            {
              title: 'Quality Assurance',
              description: 'Multiple checkpoints ensure excellence at every stage.',
            },
            {
              title: 'Timely Delivery',
              description: 'Structured timeline with clear milestones and accountability.',
            },
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h4 className="font-bold text-slate-900 mb-2">{benefit.title}</h4>
              <p className="text-sm text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
