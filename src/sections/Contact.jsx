import { motion } from "framer-motion";

export default function Contact() {
  const whatsappUrl =
    "https://wa.me/5541998458146?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20evento.";

  return (
    <section className="py-32 px-6 md:px-12 bg-vinho text-creme relative overflow-hidden border-t border-dourado/10">
      {/* Marca d'água abstrata e geométrica no fundo */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.03] pointer-events-none select-none text-[40vw] font-serif font-light">
        M
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start relative z-10">
        {/* LADO ESQUERDO: Título Massivo e Contemporâneo (Ocupa 7 colunas) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-4"
        >
          <span className="text-dourado uppercase tracking-[0.4em] text-xs font-bold font-corpo block">
            [ RESERVAS & ORÇAMENTOS ]
          </span>
          <h2 className="text-4xl md:text-6xl xl:text-7xl font-titulo font-light leading-[1.1] tracking-tight">
            Leve a{" "}
            <span className="italic font-normal text-dourado">
              Cozinha de Origem
            </span>{" "}
            para o seu próximo grande momento.
          </h2>
        </motion.div>

        {/* LADO DIREITO: Infos e CTAs Minimalistas (Ocupa 5 colunas) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 lg:pt-12 space-y-10 flex flex-col h-full justify-between"
        >
          <div className="space-y-6">
            <p className="text-creme/80 font-light text-base md:text-lg leading-relaxed tracking-wide font-corpo">
              Não criamos apenas menus, desenhamos experiências gastronômicas
              completas sob medida. Atendemos jantares privados, casamentos e
              eventos corporativos de alto padrão.
            </p>
            <div className="h-[1px] w-20 bg-dourado/40" />
          </div>

          {/* CTAs com Design Reto/Sólido Minimalista */}
          <div className="flex flex-col gap-4">
            {/* WhatsApp Sólido e Imponente */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-dourado hover:bg-creme text-grafite font-semibold tracking-widest text-xs uppercase py-5 px-8 rounded-lg flex items-center justify-between shadow-xl transition-all duration-300 w-full"
            >
              <span>Solicitar Orçamento via WhatsApp</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            {/* Instagram de Borda Fina */}
            <a
              href="https://www.instagram.com/donagatonaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-creme/30 hover:border-dourado hover:text-dourado text-creme font-medium tracking-widest text-xs uppercase py-5 px-8 rounded-lg flex items-center justify-between transition-all duration-300 w-full backdrop-blur-sm"
            >
              <span>Siga nosso trabalho no Instagram</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-dourado">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* FOOTER INTEGRADO: Minimalista de agência de design */}
      <div className="max-w-7xl mx-auto pt-24 mt-24 border-t border-creme/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-creme/40 font-corpo">
        <p>© {new Date().getFullYear()} Mageroski — Culinária Exclusiva</p>
        <p className="font-light">Crafted with precision</p>
      </div>
    </section>
  );
}
