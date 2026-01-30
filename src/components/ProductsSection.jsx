import { motion } from 'framer-motion';
import completeInjector from '../assets/images/complete-injector.png';
import componentsParts from '../assets/images/components-parts.png';
import logisticsMiami from '../assets/images/logistics-miami.png';

const products = [
    {
        id: 'inyectores',
        title: 'Inyectores Completos',
        subtitle: 'Rendimiento desde la primera ignición.',
        description: 'Nuestros inyectores completos están calibrados bajo los estándares más estrictos de la industria. Listos para instalar, optimizados para ahorrar combustible y maximizar la potencia.',
        image: completeInjector,
    },
    {
        id: 'componentes',
        title: 'Componentes y Partes',
        subtitle: 'El corazón de la potencia está en los detalles.',
        description: 'Desde toberas hasta válvulas de control. Cada pieza Wurthen es sometida a pruebas de fatiga extrema para garantizar una atomización perfecta en cada ciclo.',
        image: componentsParts,
    },
    {
        id: 'soporte',
        title: 'Soporte y Logística',
        subtitle: 'Desde Miami para toda la región.',
        description: 'Nuestra ubicación estratégica nos permite conectar con tu negocio de manera ágil. Repuestos críticos donde los necesitas, cuando los necesitas.',
        image: logisticsMiami,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};

export default function ProductsSection() {
    return (
        <section id="productos" className="py-24 lg:py-32 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6">
                        Ingeniería.<br />
                        <span className="text-[#86868b]">Mucho más que metal.</span>
                    </h2>
                    <p className="text-xl text-[#86868b] max-w-2xl mx-auto">
                        El secreto de Wurthen reside en las micras de precisión de nuestras válvulas
                        y la calidad certificada de cada componente.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="space-y-24 lg:space-y-32"
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                } items-center gap-12 lg:gap-20`}
                        >
                            {/* Image */}
                            <div className="flex-1 w-full">
                                <div className="relative group">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                                    {product.title}
                                </h3>
                                <p className="text-xl md:text-2xl text-[#0071e3] font-medium mb-6">
                                    {product.subtitle}
                                </p>
                                <p className="text-lg text-[#86868b] leading-relaxed max-w-lg mx-auto lg:mx-0">
                                    {product.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
