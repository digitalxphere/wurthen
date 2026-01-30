import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import ProductsSection from './components/ProductsSection'
import DistributorsSection from './components/DistributorsSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ProductsSection />
        <DistributorsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
