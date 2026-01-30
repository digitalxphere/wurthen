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
                ? 'bg-white/90 backdrop-blur-xl shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="flex items-center gap-1"
                    >
                        <span className="text-xl font-bold tracking-tight text-[#1d1d1f]">
                            WURTHEN
                        </span>
                        <span className="text-[10px] text-[#6e6e73] font-medium">®</span>
                    </button>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => scrollToSection('productos')}
                            className="text-sm font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                        >
                            Productos
                        </button>
                        <button
                            onClick={() => scrollToSection('distribuidores')}
                            className="text-sm font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                        >
                            Distribuidores
                        </button>
                        <button
                            onClick={() => scrollToSection('nosotros')}
                            className="text-sm font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                        >
                            Nosotros
                        </button>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={() => scrollToSection('contacto')}
                        className="bg-[#0071e3] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#0077ed] transition-colors"
                    >
                        Contacto
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
