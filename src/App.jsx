import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import CertificationSection from './components/CertificationSection'
import CompatibilitySection from './components/CompatibilitySection'
import DistributionSection from './components/DistributionSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <CertificationSection />
        <CompatibilitySection />
        <DistributionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
