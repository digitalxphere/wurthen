import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Selección de Materiales',
        description: 'Solo aleaciones certificadas con trazabilidad completa desde fábrica.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Pruebas de Flujo',
        description: 'Cada componente pasa por bancos de prueba calibrados según normas OEM.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Calibración Final',
        description: 'Ajuste micrométrico para garantizar rendimiento idéntico al equipo original.',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
        ),
    },
];

export default function CertificationSection() {
    return (
        <section id="certificacion" className="py-32 lg:py-40 bg-[#f5f5f7]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <p className="text-sm font-medium text-[#0071e3] tracking-wide mb-4">
                        THE WURTHEN PROCESS
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] tracking-tight leading-tight mb-6">
                        No vendemos piezas.
                        <br />
                        <span className="text-[#86868b]">Certificamos ingeniería.</span>
                    </h2>
                    <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto">
                        Nuestro proceso de validación en Miami garantiza estándares OEM o superiores
                        para cada componente que sale de nuestras instalaciones.
                    </p>
                </motion.div>

                {/* Process Steps - Horizontal Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Step Number & Icon */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-5xl font-light text-[#d2d2d7]">
                                    {step.number}
                                </span>
                                <div className="w-12 h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f]">
                                    {step.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">
                                {step.title}
                            </h3>
                            <p className="text-[#6e6e73] leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 pt-16 border-t border-[#d2d2d7]"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-2">100%</p>
                            <p className="text-sm text-[#6e6e73]">Componentes probados</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-2">OEM</p>
                            <p className="text-sm text-[#6e6e73]">Estándares o superior</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-2">Miami</p>
                            <p className="text-sm text-[#6e6e73]">Centro de certificación</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-2">ISO</p>
                            <p className="text-sm text-[#6e6e73]">Procesos certificados</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
