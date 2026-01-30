import { useState } from 'react';
import { motion } from 'framer-motion';

const countries = [
    'México', 'Colombia', 'Perú', 'Chile', 'Argentina', 'Brasil',
    'Ecuador', 'Venezuela', 'Panamá', 'Costa Rica', 'Guatemala', 'Otro'
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        nombre: '',
        empresa: '',
        pais: '',
        email: '',
        mensaje: '',
    });
    const [status, setStatus] = useState('idle'); // idle, sending, sent, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('sent');

        // Reset form after success
        setTimeout(() => {
            setFormData({ nombre: '', empresa: '', pais: '', email: '', mensaje: '' });
            setStatus('idle');
        }, 3000);
    };

    return (
        <section id="contacto" className="py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1d1d1f]">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        Lleva la tecnología Wurthen<br />
                        <span className="text-[#0071e3]">a tu mercado.</span>
                    </h2>
                    <p className="text-lg text-[#86868b] max-w-2xl mx-auto">
                        Si eres distribuidor o dueño de un centro de servicio, completa el formulario.
                        Un consultor de nuestra oficina central en Miami se pondrá en contacto contigo.
                    </p>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10"
                >
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        {/* Nombre */}
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium text-[#86868b] mb-2">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-[#6e6e73] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] transition-colors"
                                placeholder="Tu nombre completo"
                            />
                        </div>

                        {/* Empresa */}
                        <div>
                            <label htmlFor="empresa" className="block text-sm font-medium text-[#86868b] mb-2">
                                Empresa
                            </label>
                            <input
                                type="text"
                                id="empresa"
                                name="empresa"
                                value={formData.empresa}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-[#6e6e73] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] transition-colors"
                                placeholder="Nombre de tu empresa"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        {/* País */}
                        <div>
                            <label htmlFor="pais" className="block text-sm font-medium text-[#86868b] mb-2">
                                País
                            </label>
                            <select
                                id="pais"
                                name="pais"
                                value={formData.pais}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] transition-colors appearance-none cursor-pointer"
                            >
                                <option value="" className="bg-[#1d1d1f]">Selecciona tu país</option>
                                {countries.map(country => (
                                    <option key={country} value={country} className="bg-[#1d1d1f]">
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#86868b] mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-[#6e6e73] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] transition-colors"
                                placeholder="tu@email.com"
                            />
                        </div>
                    </div>

                    {/* Mensaje */}
                    <div className="mb-8">
                        <label htmlFor="mensaje" className="block text-sm font-medium text-[#86868b] mb-2">
                            Mensaje
                        </label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            rows={4}
                            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-[#6e6e73] focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] transition-colors resize-none"
                            placeholder="Cuéntanos sobre tu negocio y cómo podemos colaborar..."
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'sent'}
                            className={`inline-flex items-center justify-center px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 ${status === 'sent'
                                    ? 'bg-green-500 text-white'
                                    : status === 'sending'
                                        ? 'bg-[#0071e3]/70 text-white cursor-wait'
                                        : 'bg-[#0071e3] text-white hover:bg-[#0077ed] hover:scale-105'
                                }`}
                        >
                            {status === 'sending' && (
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            )}
                            {status === 'idle' && 'Enviar Solicitud'}
                            {status === 'sending' && 'Enviando...'}
                            {status === 'sent' && '✓ Enviado'}
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
