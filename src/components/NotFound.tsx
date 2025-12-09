import { motion } from 'framer-motion'

const NotFound = () => {

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent py-20 relative" aria-label="404 Not Found page">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="inline-block">
              <motion.div
                animate={{ rotate: 360, y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-9xl md:text-[150px] font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent"
              >
                404
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/70 mb-8 leading-relaxed"
          >
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted. Let's get you back on track!
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/#main-content"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/50 hover:shadow-blue-600/70"
              aria-label="Go back to home"
            >
              Back to Home
            </motion.a>
            <motion.a
              href="/#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 hover:border-blue-500/50 transition-all duration-300"
              aria-label="View projects"
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-white/50 text-sm mb-6">
              Or explore these sections:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { href: '/#about', label: 'About' },
                { href: '/#experience', label: 'Experience' },
                { href: '/#skills', label: 'Skills' },
                { href: '/#projects', label: 'Projects' },
                { href: '/#awards', label: 'Awards' },
                { href: '/#services', label: 'Services' },
                { href: '/#contact', label: 'Contact' },
                { href: '/', label: 'Home' },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-white transition-all duration-300 text-sm font-medium border border-white/10 hover:border-blue-500/30"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 opacity-50"
          >
            <motion.svg
              className="w-24 h-24 mx-auto text-white/30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default NotFound
