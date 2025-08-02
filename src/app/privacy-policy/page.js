'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors">
            Formup
          </Link>
          <Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8"
              >
                <h2 className="text-2xl font-semibold text-green-800 mb-4">
                  Your Privacy Matters
                </h2>
                <p className="text-green-700 text-lg leading-relaxed">
                  Formup does not collect or store any user data. All data is generated locally in your browser.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Data Collection
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Formup operates entirely within your browser and does not transmit any information to external servers. 
                    The extension generates random test data locally and fills forms without collecting, storing, or 
                    transmitting any personal information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Permissions
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Formup requires permission to access web pages only to detect and fill form fields. 
                    {"This permission is used solely for the extension's core functionality and no data is extracted or stored."}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Third-Party Services
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Formup does not integrate with any third-party analytics or tracking services. 
                    The extension operates completely offline regarding data processing.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Updates to Privacy Policy
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Any changes to this privacy policy will be reflected in future versions of the extension. 
                    We are committed to maintaining the privacy-first approach of Formup.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Contact Us
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    If you have any questions about this privacy policy, please contact us at{' '}
                    <a 
                      href="mailto:githubvaibhav5@gmail.com" 
                      className="text-orange-500 hover:text-orange-600 transition-colors font-medium"
                    >
                      githubvaibhav5@gmail.com
                    </a>
                  </p>
                </section>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-500 text-sm">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}