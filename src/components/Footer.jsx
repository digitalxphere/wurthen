export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1d1d1f] py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Location */}
                    <div className="text-center md:text-left">
                        <p className="text-white font-semibold text-lg mb-1">
                            Wurthen Diesel Systems USA
                        </p>
                        <p className="text-[#86868b] text-sm">
                            Miami, Florida — Centro de Operaciones LATAM
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-8">
                        <a href="#productos" className="text-sm text-[#86868b] hover:text-white transition-colors">
                            Productos
                        </a>
                        <a href="#distribuidores" className="text-sm text-[#86868b] hover:text-white transition-colors">
                            Distribuidores
                        </a>
                        <a href="#contacto" className="text-sm text-[#86868b] hover:text-white transition-colors">
                            Contacto
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-[#6e6e73]">
                            © {currentYear} Wurthen Diesel Systems USA. Todos los derechos reservados.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="text-xs text-[#6e6e73] hover:text-white transition-colors">
                                Política de Privacidad
                            </a>
                            <a href="#" className="text-xs text-[#6e6e73] hover:text-white transition-colors">
                                Términos de Uso
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
