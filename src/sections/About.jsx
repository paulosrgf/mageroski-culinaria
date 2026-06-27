import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      style={{
        backgroundColor: "#5C1D24",
        // Injetando o padrão geométrico de losangos (Vino Primo) via SVG nativo em background-image
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23C5A059' stroke-width='1' stroke-opacity='0.08'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
      className="py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden w-full border-t border-b border-dourado/10"
    >
      {/* Sombra interna suave para dar profundidade ao padrão texturizado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* TEXTO CONTEMPORÂNEO (Foco total no contraste) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 space-y-6 text-left"
        >
          <div className="space-y-2">
            <span
              style={{ color: "#C5A059" }}
              className="font-sans font-bold tracking-[0.4em] text-xs uppercase block"
            >
              // Nossa História
            </span>
            <div
              style={{ backgroundColor: "#C5A059" }}
              className="h-[2px] w-12"
            />
          </div>

          <h2
            style={{ color: "#FBF9F6" }}
            className="text-4xl md:text-6xl font-serif font-black tracking-tight leading-tight"
          >
            Uma herança <br />
            <span
              style={{ color: "#C5A059" }}
              className="font-light italic font-serif"
            >
              moldada na mesa.
            </span>
          </h2>

          <div className="space-y-4 font-sans font-light text-base md:text-lg leading-relaxed tracking-wide text-[#FBF9F6]/80">
            <p>
              A cozinha da família Mageroski sempre foi o ponto de encontro.
              Inspirada pelo carinho das reuniões familiares de raízes
              ucranianas, nossa proposta traz a essência do cuidado, do tempo
              correto de preparo e da escolha minuciosa dos ingredientes.
            </p>
            <p>
              Não servimos apenas pratos, entregamos uma experiência completa
              para o seu evento. Cuidamos de cada detalhe da gastronomia para
              que você e seus convidados foquem apenas em viver o momento.
            </p>
          </div>
        </motion.div>

        {/* COMPOSIÇÃO DE FOTOS ASSIMÉTRICAS COM MOLDURA EDITORIAL */}
        <div className="lg:col-span-6 relative h-[500px] w-full flex items-center justify-center">
          {/* Foto de trás (Ação/Preparo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute left-6 top-6 w-7/12 aspect-[3/4] bg-[#1A1A1A] border border-[#C5A059]/20 shadow-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1000"
              alt="Chef preparando"
              className="w-full h-full object-cover filter brightness-90 contrast-105"
            />
          </motion.div>

          {/* Foto da frente sobreposta (Prato Finalizado) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute right-6 bottom-6 w-7/12 aspect-[3/4] bg-[#1A1A1A] border-2 border-[#C5A059]/40 shadow-2xl overflow-hidden z-20"
          >
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000"
              alt="Prato moderno"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
