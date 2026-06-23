import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import { useState } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '' })
        setSubmitted(false)
        onClose()
      }, 3000)
    }, 1500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              {!submitted ? (
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Contact Information</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <Mail className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                            <div>
                              <p className="text-sm font-medium text-slate-600">Email</p>
                              <p className="text-slate-900 font-semibold">hello@fahartech.com</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Phone className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                            <div>
                              <p className="text-sm font-medium text-slate-600">Phone</p>
                              <p className="text-slate-900 font-semibold">+254 716 957 179</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                            <div>
                              <p className="text-sm font-medium text-slate-600">Location</p>
                              <p className="text-slate-900 font-semibold">Nairobi, Kenya</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <p className="text-sm text-slate-600">
                          We typically respond to inquiries within 24 hours during business days.
                        </p>
                      </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                          Phone (Optional)
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all"
                          placeholder="+254 716 957 179"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-900 mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isLoading}
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg disabled:opacity-70 transition-all"
                      >
                        {isLoading ? 'Sending...' : 'Send Message'}
                      </motion.button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 mb-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <p className="text-sm text-slate-500">Closing in a moment...</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
