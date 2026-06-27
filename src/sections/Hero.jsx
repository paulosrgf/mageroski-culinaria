import { motion } from "framer-motion";

export default function Hero() {
  const whatsappUrl =
    "https://wa.me/5542999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20evento.";

  return (
    <section className="relative h-screen flex flex-col items-center justify-between overflow-hidden px-6 text-center py-12">
      {/* Imagem de Fundo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2070"
          alt="Mageroski Cozinha de Origem"
          className="w-full h-full object-cover scale-105"
        />
        {/* Deixando o fundo ligeiramente mais escuro para o título saltar aos olhos */}
        <div
          style={{ backgroundColor: "rgba(15, 15, 15, 0.8)" }}
          className="absolute inset-0"
        />
      </div>

      <div className="h-12 hidden md:block" />

      {/* Conteúdo Principal */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8 flex flex-col items-center my-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ color: "#FBF9F6" }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight leading-none"
        >
          Mageroski <br />
          <span className="text-[#C5A059] font-light italic font-serif">
            Cozinha de Origem.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ color: "rgba(251, 249, 246, 0.85)" }}
          className="font-sans font-light max-w-xl text-base md:text-lg leading-relaxed tracking-wide"
        >
          Menus personalizados, jantares privados e eventos desenhados sob
          medida para transformar grandes momentos em memórias afetivas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/* RESOLUÇÃO DO BOTÃO: Totalmente arredondado, fundo dourado sólido e texto curto */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#C5A059", color: "#1A1A1A" }}
            className="group inline-flex items-center gap-6 font-sans font-bold tracking-widest text-xs uppercase py-5 px-12 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Saiba Mais</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-auto mb-4 relative z-10 flex flex-col items-center gap-3 text-[#FBF9F6]/40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-medium">
          Descobrir
        </span>

        <div className="w-[1px] h-10 bg-[#FBF9F6]/20 relative overflow-hidden">
          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#C5A059]"
          />
        </div>
      </motion.div>
    </section>
  );
}
