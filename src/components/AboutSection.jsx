import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section id="nosotros" className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] tracking-tight mb-8">
                        Estándares de EE.UU.<br />
                        <span className="text-[#0071e3]">Para el mercado Latino.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-[#6e6e73] leading-relaxed mb-12">
                        Desde nuestra sede en <strong className="text-[#1d1d1f]">Miami, Florida</strong>,
                        Wurthen Diesel Systems combina la ingeniería de precisión estadounidense
                        con un profundo entendimiento de las necesidades del mercado latinoamericano.
                    </p>

                    {/* Features */}
                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="p-8"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#0071e3] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">Calidad Certificada</h3>
                            <p className="text-[#6e6e73]">
                                Cada pieza pasa por rigurosos controles de calidad siguiendo estándares OEM.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="p-8"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#0071e3] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">Alto Rendimiento</h3>
                            <p className="text-[#6e6e73]">
                                Diseño optimizado para máxima eficiencia de combustible y potencia.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="p-8"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#0071e3] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">Soporte Experto</h3>
                            <p className="text-[#6e6e73]">
                                Equipo técnico bilingüe listo para asistirte en cualquier consulta.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
