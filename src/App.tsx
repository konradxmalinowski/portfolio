import { Suspense, lazy } from 'react'
import Hero from './components/Hero'
import Skeleton from './components/Skeleton'
import AnimatedBackground from './components/AnimatedBackground'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import LanguageSwitcher from './components/LanguageSwitcher'
import Footer from './components/Footer'

// Lazy load heavy components for code splitting
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Experience = lazy(() => import('./components/Experience'))
const Awards = lazy(() => import('./components/Awards'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))

// Fallback loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center py-20">
    <div className="container mx-auto px-6 max-w-7xl">
      <Skeleton count={5} height={250} />
    </div>
  </div>
)

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-blue-600 focus:text-white focus:top-4 focus:left-4 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <ScrollToTop />
      <LanguageSwitcher />
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <main id="main-content">
          <Hero />
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Services />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Awards />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
