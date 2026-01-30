import { useState } from 'react';
import { motion } from 'framer-motion';

const countries = [
    'México', 'Colombia', 'Perú', 'Chile', 'Argentina', 'Brasil',
    'Ecuador', 'Venezuela', 'Panamá', 'Costa Rica', 'Guatemala',
    'República Dominicana', 'Paraguay', 'Uruguay', 'Otro'
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        nombre: '',
        empresa: '',
        pais: '',
        whatsapp: '',
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('sent');
        setTimeout(() => {
            setFormData({ nombre: '', empresa: '', pais: '', whatsapp: '' });
            setStatus('idle');
        }, 3000);
    };

    return (
        <section id="contacto" className="py-32 lg:py-40 bg-white">
            <div className="max-w-2xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-medium text-[#0071e3] tracking-wide mb-4">
                        ÚNETE A LA RED
                    </p>
                    <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight leading-tight mb-6">
                        Solicitud de Distribución
                        <br />
                        <span className="text-[#86868b]">Autorizada.</span>
                    </h2>
                    <p className="text-lg text-[#6e6e73]">
                        Si eres distribuidor o laboratorio diesel, completa el formulario.
                        Nuestro equipo en Miami te contactará.
                    </p>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    {/* Nombre */}
                    <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-[#1d1d1f] mb-2">
                            Nombre completo
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#f5f5f7] border-0 rounded-xl px-4 py-3.5 text-[#1d1d1f] placeholder-[#86868b] focus:ring-2 focus:ring-[#0071e3] transition-all"
                            placeholder="Tu nombre"
                        />
                    </div>

                    {/* Empresa */}
                    <div>
                        <label htmlFor="empresa" className="block text-sm font-medium text-[#1d1d1f] mb-2">
                            Empresa / Laboratorio
                        </label>
                        <input
                            type="text"
                            id="empresa"
                            name="empresa"
                            value={formData.empresa}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#f5f5f7] border-0 rounded-xl px-4 py-3.5 text-[#1d1d1f] placeholder-[#86868b] focus:ring-2 focus:ring-[#0071e3] transition-all"
                            placeholder="Nombre de tu empresa"
                        />
                    </div>

                    {/* País */}
                    <div>
                        <label htmlFor="pais" className="block text-sm font-medium text-[#1d1d1f] mb-2">
                            País
                        </label>
                        <select
                            id="pais"
                            name="pais"
                            value={formData.pais}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#f5f5f7] border-0 rounded-xl px-4 py-3.5 text-[#1d1d1f] focus:ring-2 focus:ring-[#0071e3] transition-all appearance-none cursor-pointer"
                        >
                            <option value="">Selecciona tu país</option>
                            {countries.map(country => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                        </select>
                    </div>

                    {/* WhatsApp */}
                    <div>
                        <label htmlFor="whatsapp" className="block text-sm font-medium text-[#1d1d1f] mb-2">
                            WhatsApp de contacto
                        </label>
                        <input
                            type="tel"
                            id="whatsapp"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#f5f5f7] border-0 rounded-xl px-4 py-3.5 text-[#1d1d1f] placeholder-[#86868b] focus:ring-2 focus:ring-[#0071e3] transition-all"
                            placeholder="+1 305 555 0123"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'sent'}
                            className={`w-full py-4 rounded-xl text-lg font-medium transition-all duration-300 ${status === 'sent'
                                    ? 'bg-green-500 text-white'
                                    : status === 'sending'
                                        ? 'bg-[#0071e3]/70 text-white cursor-wait'
                                        : 'bg-[#0071e3] text-white hover:bg-[#0077ed]'
                                }`}
                        >
                            {status === 'idle' && 'Enviar Solicitud'}
                            {status === 'sending' && 'Enviando...'}
                            {status === 'sent' && '✓ Solicitud Enviada'}
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
