import { motion } from 'framer-motion';
import heroInjector from '../assets/images/hero-injector-clean.png';

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col items-center justify-center relative bg-white pt-20"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-8"
                >
                    <span className="inline-block px-4 py-1.5 bg-[#f5f5f7] text-[#1d1d1f] text-xs font-medium tracking-wide rounded-full">
                        AFTERMARKET CERTIFICATION
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#1d1d1f] tracking-tight leading-[1.05] mb-6"
                >
                    Wurthen Diesel Systems.
                    <br />
                    <span className="text-[#86868b]">La Certificación del Aftermarket.</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-[#6e6e73] max-w-3xl mx-auto mb-16 leading-relaxed"
                >
                    Ingeniería de precisión para sistemas
                    <strong className="text-[#1d1d1f]"> Bosch</strong>,
                    <strong className="text-[#1d1d1f]"> Denso</strong> y
                    <strong className="text-[#1d1d1f]"> Delphi</strong>.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                    className="relative max-w-lg mx-auto"
                >
                    <img
                        src={heroInjector}
                        alt="Inyector Diesel Wurthen - Precisión Certificada"
                        className="w-full h-auto"
                    />
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-16"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-px h-12 bg-gradient-to-b from-[#86868b] to-transparent mx-auto"
                    />
                </motion.div>
            </div>
        </section>
    );
}
