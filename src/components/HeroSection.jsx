import { motion } from 'framer-motion';
import heroInjector from '../assets/images/hero-injector.png';

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white pt-20"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                {/* Logo Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
                        Wurthen
                    </h1>
                    <p className="text-xl md:text-2xl text-[#6e6e73] font-light tracking-wide mb-2">
                        Diesel Systems
                    </p>
                </motion.div>

                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-12 mb-8"
                >
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#1d1d1f] tracking-tight leading-tight max-w-4xl mx-auto">
                        La nueva definición de la<br />
                        <span className="text-[#0071e3]">inyección de precisión.</span>
                    </h2>
                </motion.div>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-[#6e6e73] max-w-2xl mx-auto mb-16"
                >
                    Diseñados en Miami para dominar los caminos de Latinoamérica.
                    Inyectores y componentes con ingeniería de equipo original, creados para durar.
                </motion.p>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                    className="relative"
                >
                    <div className="relative max-w-xl mx-auto">
                        <img
                            src={heroInjector}
                            alt="Inyector Diesel Wurthen de Alta Precisión"
                            className="w-full h-auto drop-shadow-2xl"
                        />
                        {/* Glow effect behind image */}
                        <div className="absolute inset-0 -z-10 bg-gradient-radial from-[#0071e3]/20 to-transparent blur-3xl scale-150" />
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-6 h-10 border-2 border-[#86868b] rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-1 h-2 bg-[#86868b] rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
