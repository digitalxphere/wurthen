import { motion } from 'framer-motion';
import certificationProcess from '../assets/images/certification-process.png';

const steps = [
    {
        number: '01',
        title: 'Selección de Materiales',
        description: 'Solo aleaciones certificadas con trazabilidad completa desde fábrica.',
    },
    {
        number: '02',
        title: 'Pruebas de Flujo',
        description: 'Cada componente pasa por bancos de prueba calibrados según normas OEM.',
    },
    {
        number: '03',
        title: 'Calibración Final',
        description: 'Ajuste micrométrico para garantizar rendimiento idéntico al equipo original.',
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
                    className="text-center mb-20"
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

                {/* Process Steps */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Steps List */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="flex gap-6"
                            >
                                <span className="text-5xl font-light text-[#d2d2d7]">
                                    {step.number}
                                </span>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#6e6e73] leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Diagram */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={certificationProcess}
                            alt="Proceso de Certificación Wurthen"
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
