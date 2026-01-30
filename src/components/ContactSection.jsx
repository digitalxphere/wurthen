import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const countries = [
    'México', 'Colombia', 'Perú', 'Chile', 'Argentina', 'Brasil',
    'Ecuador', 'Venezuela', 'Panamá', 'Costa Rica', 'Guatemala',
    'República Dominicana', 'Paraguay', 'Uruguay', 'Otro'
];

// IMPORTANTE: Reemplaza este ID con tu ID de Formspree
// Crea tu formulario gratis en https://formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mpqrolob';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        nombre: '',
        empresa: '',
        pais: '',
        whatsapp: '',
    });
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    nombre: formData.nombre,
                    empresa: formData.empresa,
                    pais: formData.pais,
                    whatsapp: formData.whatsapp,
                    _subject: `Nueva solicitud de distribución - ${formData.empresa} (${formData.pais})`,
                }),
            });

            if (response.ok) {
                setStatus('sent');
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch (error) {
            console.error('Error sending form:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const handleNewRequest = () => {
        setFormData({ nombre: '', empresa: '', pais: '', whatsapp: '' });
        setStatus('idle');
    };

    return (
        <section id="contacto" className="py-32 lg:py-40 bg-white">
            <div className="max-w-2xl mx-auto px-6 lg:px-8">
                <AnimatePresence mode="wait">
                    {status === 'sent' ? (
                        /* Thank You Message */
                        <motion.div
                            key="thank-you"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            className="text-center py-16"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
                            >
                                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </motion.div>

                            <h2 className="text-3xl md:text-4xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
                                ¡Gracias por tu interés!
                            </h2>
                            <p className="text-xl text-[#6e6e73] mb-8 max-w-md mx-auto">
                                Hemos recibido tu información. Nuestro equipo te contactará
                                en las próximas 24-48 horas.
                            </p>

                            <button
                                onClick={handleNewRequest}
                                className="text-[#0071e3] hover:text-[#0077ed] font-medium transition-colors"
                            >
                                Enviar otra solicitud →
                            </button>
                        </motion.div>
                    ) : (
                        /* Contact Form */
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
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
                                    Nuestro equipo te contactará.
                                </p>
                            </motion.div>

                            {/* Form */}
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
                                        disabled={status === 'sending'}
                                        className={`w-full py-4 rounded-xl text-lg font-medium transition-all duration-300 ${status === 'error'
                                            ? 'bg-red-500 text-white'
                                            : status === 'sending'
                                                ? 'bg-[#0071e3]/70 text-white cursor-wait'
                                                : 'bg-[#0071e3] text-white hover:bg-[#0077ed]'
                                            }`}
                                    >
                                        {status === 'idle' && 'Enviar Solicitud'}
                                        {status === 'sending' && 'Enviando...'}
                                        {status === 'error' && 'Error - Intenta de nuevo'}
                                    </button>
                                </div>
                            </motion.form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
