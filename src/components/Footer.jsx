export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1d1d1f] py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                    {/* Logo & Location */}
                    <div className="text-center md:text-left">
                        <p className="text-white font-semibold text-lg mb-1">
                            Wurthen Diesel Systems USA
                        </p>
                        <p className="text-[#86868b] text-sm">
                            Miami, FL — Aftermarket Certification Center
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-8">
                        <a href="#certificacion" className="text-sm text-[#86868b] hover:text-white transition-colors">
                            Certificación
                        </a>
                        <a href="#productos" className="text-sm text-[#86868b] hover:text-white transition-colors">
                            Compatibilidad
                        </a>
                        <a href="#distribuidores" className="text-sm text-[#86868b] hover:text-white transition-colors">
                            Distribución
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-8">
                    <p className="text-xs text-[#6e6e73] text-center">
                        © {currentYear} Wurthen Diesel Systems USA. Todos los derechos reservados.
                        Bosch, Denso y Delphi son marcas registradas de sus respectivos propietarios.
                    </p>
                </div>
            </div>
        </footer>
    );
}
