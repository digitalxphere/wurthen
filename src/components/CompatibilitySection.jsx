import { motion } from 'framer-motion';
import precisionComponents from '../assets/images/precision-components.png';

export default function CompatibilitySection() {
    return (
        <section id="productos" className="py-32 lg:py-40 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] tracking-tight leading-tight mb-6">
                        Compatibilidad Global.
                    </h2>
                    <p className="text-xl text-[#6e6e73] max-w-3xl mx-auto">
                        Componentes certificados para las arquitecturas más exigentes del mundo.
                    </p>
                </motion.div>

                {/* OEM Logos Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-3 gap-8 lg:gap-16 items-center justify-center max-w-3xl mx-auto mb-24"
                >
                    {/* Bosch */}
                    <div className="flex items-center justify-center p-6 lg:p-8">
                        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#d2d2d7] tracking-tight">
                            BOSCH
                        </span>
                    </div>
                    {/* Denso */}
                    <div className="flex items-center justify-center p-6 lg:p-8">
                        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#d2d2d7] tracking-tight">
                            DENSO
                        </span>
                    </div>
                    {/* Delphi */}
                    <div className="flex items-center justify-center p-6 lg:p-8">
                        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#d2d2d7] tracking-tight">
                            DELPHI
                        </span>
                    </div>
                </motion.div>

                {/* Product Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-4xl mx-auto"
                >
                    <img
                        src={precisionComponents}
                        alt="Componentes de Precisión Wurthen para Bosch, Denso y Delphi"
                        className="w-full h-auto"
                    />
                </motion.div>

                {/* Features */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid md:grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto"
                >
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-2">500+</p>
                        <p className="text-sm text-[#6e6e73]">Números de parte en stock</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-2">OEM</p>
                        <p className="text-sm text-[#6e6e73]">Especificaciones originales</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-2">100%</p>
                        <p className="text-sm text-[#6e6e73]">Probados antes del envío</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
