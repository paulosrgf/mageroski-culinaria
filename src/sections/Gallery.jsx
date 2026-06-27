import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const EVENTS = [
  {
    id: 1,
    title: "Jantares Privados",
    tag: "Culinária de Origem",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800",
  },
  {
    id: 2,
    title: "Casamentos",
    tag: "Alta Gastronomia",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
  },
  {
    id: 3,
    title: "Eventos Corporativos",
    tag: "Menus Corporativos",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800",
  },
  {
    id: 4,
    title: "Catering Exclusivo",
    tag: "Experiência Boutique",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800",
  },
  {
    id: 5,
    title: "Recepções Intimistas",
    tag: "Menu Degustação",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800",
  },
  {
    id: 6,
    title: "Almoços de Negócios",
    tag: "Cozinha Autoral",
    img: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?q=80&w=800",
  },
  {
    id: 7,
    title: "Festas Temáticas",
    tag: "Gastronomia Criativa",
    img: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=800",
  },
  {
    id: 8,
    title: "Confraternizações",
    tag: "Finger Foods premium",
    img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800",
  },
  {
    id: 9,
    title: "Bodas de Ouro",
    tag: "Banquetes Clássicos",
    img: "https://images.unsplash.com/photo-1533618561175-d4001fffff12?q=80&w=800",
  },
  {
    id: 10,
    title: "Eventos Estacionais",
    tag: "Ingredientes da Estação",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800",
  },
];

export default function Gallery() {
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current && containerRef.current) {
      setConstraints({
        left:
          -carouselRef.current.scrollWidth + containerRef.current.offsetWidth,
        right: 0,
      });
    }
  }, []);

  const handleScrollUpdate = (info) => {
    if (carouselRef.current) {
      const totalWidth =
        carouselRef.current.scrollWidth - containerRef.current.offsetWidth;
      const currentProgress = Math.min(
        Math.max(-info.point.x / totalWidth, 0),
        1,
      );
      const calculatedIndex = Math.round(currentProgress * (EVENTS.length - 1));
      setActiveCard(calculatedIndex);
    }
  };

  return (
    <section
      style={{ backgroundColor: "#1A1A1A" }}
      className="py-32 px-6 md:px-16 lg:px-24 overflow-hidden w-full relative"
    >
      {/* Header com Efeito Fade In ao rolar a página */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 text-left"
      >
        <div className="space-y-4">
          <span
            style={{ color: "#C5A059" }}
            className="font-sans font-bold tracking-[0.4em] text-xs uppercase block"
          >
            // Portfólio
          </span>
          <h2
            style={{ color: "#FBF9F6" }}
            className="text-4xl md:text-6xl font-serif font-black tracking-tight leading-none"
          >
            Experiências <br />
            <span
              style={{ color: "#C5A059" }}
              className="font-light italic font-serif"
            >
              Recentes.
            </span>
          </h2>
        </div>
        <p
          style={{ color: "rgba(251, 249, 246, 0.6)" }}
          className="font-sans font-light max-w-sm text-sm md:text-base leading-relaxed"
        >
          Arraste para os lados para navegar pelos nossos 10 formatos exclusivos
          de menus autorais e coberturas de eventos de alto padrão.
        </p>
      </motion.div>

      {/* Carrossel Horizontal com Efeito de Revelação Suave */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-7xl mx-auto cursor-grab active:cursor-grabbing px-2"
      >
        <motion.div
          ref={carouselRef}
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.15}
          onDrag={(event, info) => handleScrollUpdate(info)}
          className="flex gap-8 w-max py-4"
        >
          {EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-[290px] sm:w-[400px] relative aspect-[16/10] bg-[#111] border border-white/5 overflow-hidden shadow-2xl group rounded-2xl"
            >
              <img
                src={event.img}
                alt={event.title}
                draggable="false"
                className="w-full h-full object-cover filter brightness-90 contrast-[1.05] transition-transform duration-700 pointer-events-none group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-left space-y-1 pointer-events-none">
                <span
                  style={{ color: "#C5A059" }}
                  className="text-[10px] uppercase tracking-widest font-sans font-bold"
                >
                  {event.tag}
                </span>
                <h3
                  style={{ color: "#FBF9F6" }}
                  className="text-xl md:text-2xl font-serif font-medium tracking-tight"
                >
                  {event.title}
                </h3>
              </div>
              <div className="absolute top-4 right-4 text-[10px] font-sans tracking-widest font-bold text-white/20 group-hover:text-[#C5A059] transition-colors">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Indicador de Barra */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="max-w-7xl mx-auto pt-12 flex items-center justify-between border-t border-white/10 mt-12 text-[10px] font-sans tracking-[0.3em] uppercase text-white/40"
      >
        <div className="flex items-center gap-4">
          <span style={{ color: "#C5A059" }}>
            {activeCard + 1 < 10 ? `0${activeCard + 1}` : activeCard + 1}
          </span>
          <div className="w-28 h-[2px] bg-white/10 relative rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 bottom-0 left-0 bg-[#C5A059]"
              style={{ width: `${((activeCard + 1) / EVENTS.length) * 100}%` }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </div>
          <span>10</span>
        </div>
        <span className="animate-pulse">[ arraste horizontalmente ]</span>
      </motion.div>
    </section>
  );
}
