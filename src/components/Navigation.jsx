import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/95 backdrop-blur-xl shadow-sm'
                    : 'bg-white/80 backdrop-blur-md'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="flex items-center gap-1"
                    >
                        <span className="text-lg font-semibold tracking-tight text-[#1d1d1f]">
                            WURTHEN
                        </span>
                        <span className="text-[8px] text-[#86868b] font-medium align-top">®</span>
                    </button>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => scrollToSection('certificacion')}
                            className="text-xs font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                        >
                            Certificación
                        </button>
                        <button
                            onClick={() => scrollToSection('productos')}
                            className="text-xs font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                        >
                            Compatibilidad
                        </button>
                        <button
                            onClick={() => scrollToSection('distribuidores')}
                            className="text-xs font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                        >
                            Distribución
                        </button>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={() => scrollToSection('contacto')}
                        className="bg-[#0071e3] text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-[#0077ed] transition-colors"
                    >
                        Ser Distribuidor
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
