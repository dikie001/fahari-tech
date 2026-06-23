import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
} from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#' },
  ],
  Services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Custom Software', href: '#services' },
    { label: 'E-Commerce', href: '#services' },
    { label: 'Business Systems', href: '#services' },
  ],
  Support: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'FAQ', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Support Center', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Disclaimer', href: '#' },
  ],
}

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSocialClick = (e: React.MouseEvent) => {
    e.preventDefault()
    alert('Coming soon! Follow us on social media.')
  }

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-white rounded-lg p-2 inline-block">
              <img
                src="/logo.png"
                alt="Fahari Technologies Logo"
                className="h-8 w-auto"
              />
            </div>

            <p className="text-slate-400 leading-relaxed">
              Transforming businesses through innovative technology solutions, strategic consulting, and world-class software development.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <motion.a
                whileHover={{ x: 4 }}
                href="mailto:hello@fahartech.com"
                className="flex items-center gap-3 hover:text-blue-400 transition-colors"
              >
                <Mail size={18} />
                <span>hello@fahartech.com</span>
              </motion.a>

              <motion.a
                whileHover={{ x: 4 }}
                href="tel:+254716957179"
                className="flex items-center gap-3 hover:text-blue-400 transition-colors"
              >
                <Phone size={18} />
                <span>+254 716 957 179</span>
              </motion.a>

              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-3"
              >
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Nairobi, Kenya</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.button
                    key={social.label}
                    onClick={handleSocialClick}
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-slate-400 hover:text-white cursor-pointer"
                    title="Coming soon"
                  >
                    <Icon size={20} />
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="h-px bg-slate-700 my-12 origin-left"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-8"
        >
          {/* Copyright */}
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Fahari Technologies. All rights reserved.
          </p>

          {/* Additional Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-slate-400">
            <span>Empowering African businesses with technology</span>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600 transition-colors text-slate-300 hover:text-white"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-semibold">
            🚀 Ready to get started? <span className="hover:underline cursor-pointer">Contact us today</span>
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
