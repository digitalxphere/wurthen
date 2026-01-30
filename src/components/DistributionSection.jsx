import { motion } from 'framer-motion';
import latamMap from '../assets/images/latam-map.png';

export default function DistributionSection() {
    return (
        <section id="distribuidores" className="py-32 lg:py-40 bg-[#f5f5f7]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-sm font-medium text-[#0071e3] tracking-wide mb-4">
                            DISTRIBUCIÓN LATAM
                        </p>
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight leading-tight mb-6">
                            Desde Miami.
                            <br />
                            <span className="text-[#86868b]">Para toda la región.</span>
                        </h2>
                        <p className="text-xl text-[#6e6e73] leading-relaxed mb-8">
                            Nuestra ubicación estratégica en Miami nos permite ofrecer tiempos de entrega
                            competitivos a todo Latinoamérica, con soporte técnico bilingüe y documentación
                            completa para importación.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <p className="text-4xl font-semibold text-[#1d1d1f] mb-1">7+</p>
                                <p className="text-sm text-[#6e6e73]">Países activos</p>
                            </div>
                            <div>
                                <p className="text-4xl font-semibold text-[#1d1d1f] mb-1">48h</p>
                                <p className="text-sm text-[#6e6e73]">Envío express</p>
                            </div>
                            <div>
                                <p className="text-4xl font-semibold text-[#1d1d1f] mb-1">B2B</p>
                                <p className="text-sm text-[#6e6e73]">Solo distribuidores</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={latamMap}
                            alt="Red de Distribución Wurthen en Latinoamérica"
                            className="w-full h-auto rounded-2xl shadow-lg"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
