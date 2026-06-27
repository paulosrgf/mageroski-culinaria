import { motion } from "framer-motion";
import fotoChef from "../assets/chef-mageroski.jpg";

export default function Chef() {
  return (
    <section
      style={{
        backgroundColor: "#0A0A0A",
        // Padrão de BOLAS brancas com opacidade 0.50 para visibilidade total
        backgroundImage:
          "radial-gradient(rgba(255, 255, 255, 0.50) 8px, transparent 8px)",
        backgroundSize: "48px 48px",
      }}
      className="py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden w-full border-t border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* LADO ESQUERDO: Foto Destacada com Cantos Suaves */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          {/* Adicionado rounded-2xl para harmonizar com o restante do novo design */}
          <div className="relative aspect-[3/4] w-full bg-[#1A1A1A] border border-white/10 overflow-hidden shadow-2xl rounded-2xl">
            <img
              src={fotoChef}
              alt="Chef Mageroski"
              className="w-full h-full object-cover filter contrast-[1.05] brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent" />
          </div>

          {/* Detalhe estético de linha de canto */}
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-r border-b border-[#C5A059]/40 pointer-events-none" />
        </motion.div>

        {/* LADO DIREITO: Tipografia de Alto Contraste */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8 text-left"
        >
          <div className="space-y-2">
            <span
              style={{ color: "#C5A059" }}
              className="font-sans font-bold tracking-[0.4em] text-xs uppercase block"
            >
              // A Mente Criativa
            </span>
            <div
              style={{ backgroundColor: "#C5A059" }}
              className="h-[2px] w-12"
            />
          </div>

          <h2
            style={{ color: "#FBF9F6" }}
            className="text-5xl md:text-6xl font-serif font-black tracking-tight leading-none"
          >
            A Chef <br />
            <span
              style={{ color: "#C5A059" }}
              className="font-light italic font-serif"
            >
              Mageroski.
            </span>
          </h2>

          <p
            style={{ color: "#FBF9F6" }}
            className="text-lg md:text-xl font-serif italic font-normal leading-relaxed opacity-90 border-l border-[#C5A059] pl-4"
          >
            "A alta gastronomia não nasce da complexidade, mas sim do respeito
            absoluto ao tempo e à raiz de cada ingrediente."
          </p>

          <div
            style={{ color: "#FBF9F6" }}
            className="font-sans font-light text-base md:text-lg leading-relaxed tracking-wide opacity-70 space-y-4"
          >
            <p>
              À frente de cada menu e criação autoral, a Chef traz na bagagem
              anos de técnica refinada combinados às memórias afetivas da sua
              própria história. Sua cozinha é uma ponte entre o clássico europeu
              e a essência acolhedora da culinária de raízes familiares.
            </p>
            <p>
              Cada prato que sai da sua bancada é planejado como uma obra única,
              desenhado especificamente para harmonizar com a atmosfera e a
              proposta de cada evento exclusivo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
