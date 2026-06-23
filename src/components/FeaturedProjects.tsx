import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'School Management System',
    category: 'Education',
    description: 'Comprehensive platform for managing student records, attendance, grades, and parent communication.',
    image: '🎓',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Inventory Management Platform',
    category: 'Enterprise',
    description: 'Real-time inventory tracking with automated stock alerts and supplier management.',
    image: '📦',
    tags: ['React', 'Python', 'PostgreSQL', 'Redis'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Online Store',
    category: 'E-Commerce',
    description: 'Feature-rich e-commerce platform with payment integration and product recommendations.',
    image: '🛍️',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'Hotel Booking Platform',
    category: 'Hospitality',
    description: 'Intuitive booking system with room management, reservations, and guest services.',
    image: '🏨',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 5,
    title: 'Corporate Website',
    category: 'Web Design',
    description: 'Modern, responsive corporate website with CMS integration and SEO optimization.',
    image: '🌐',
    tags: ['Next.js', 'Headless CMS', 'Analytics'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    id: 6,
    title: 'SACCO Management System',
    category: 'Finance',
    description: 'Complete financial management system for savings and credit cooperatives.',
    image: '💰',
    tags: ['React', 'Java', 'PostgreSQL', 'Spring Boot'],
    color: 'from-yellow-500 to-amber-500',
  },
]

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300"
    >
      {/* Image Section */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden relative`}
      >
        <span className="text-6xl select-none">{project.image}</span>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
      </motion.div>

      {/* Content Section */}
      <div className="p-6">
        {/* Category Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3"
        >
          {project.category}
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-slate-500 uppercase mb-2">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05 }}
                className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded border border-slate-200 hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Link */}
        <motion.button
          whileHover={{ x: 4 }}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group/btn"
        >
          View Project
          <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-50">
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
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Explore our portfolio of successful projects delivering real value to diverse industries and organizations.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* See All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2 group"
          >
            View All Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
