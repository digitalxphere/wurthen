import { motion } from 'framer-motion';
import latamMap from '../assets/images/latam-map.png';

export default function DistributorsSection() {
    return (
        <section id="distribuidores" className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight mb-6 leading-tight">
                            Una red sólida.<br />
                            <span className="text-[#0071e3]">Una marca imparable.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-[#6e6e73] leading-relaxed mb-8">
                            Formar parte de la red Wurthen no es solo vender repuestos, es ofrecer la garantía
                            y el respaldo de una marca con <strong className="text-[#1d1d1f]">ADN estadounidense</strong>.
                        </p>
                        <p className="text-lg md:text-xl text-[#6e6e73] leading-relaxed mb-10">
                            Estamos expandiendo nuestra presencia en <strong className="text-[#1d1d1f]">LATAM</strong> con
                            socios que no aceptan menos que la excelencia.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-center lg:text-left"
                            >
                                <p className="text-4xl md:text-5xl font-semibold text-[#0071e3] mb-2">7+</p>
                                <p className="text-sm text-[#86868b]">Países</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-center lg:text-left"
                            >
                                <p className="text-4xl md:text-5xl font-semibold text-[#0071e3] mb-2">50+</p>
                                <p className="text-sm text-[#86868b]">Distribuidores</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-center lg:text-left"
                            >
                                <p className="text-4xl md:text-5xl font-semibold text-[#0071e3] mb-2">24h</p>
                                <p className="text-sm text-[#86868b]">Envío Express</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Map Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative">
                            <img
                                src={latamMap}
                                alt="Red de distribución en Latinoamérica - Miami Hub"
                                className="w-full h-auto rounded-3xl shadow-2xl"
                            />
                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#0071e3]/20 to-purple-500/20 rounded-3xl blur-3xl -z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
