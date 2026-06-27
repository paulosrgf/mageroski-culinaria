export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#141414" }}
      className="w-full border-t border-white/5 pt-20 pb-12 px-6 md:px-16 lg:px-24 text-left"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
        <div className="md:col-span-5 space-y-6">
          <h3
            style={{ color: "#FBF9F6" }}
            className="text-3xl font-serif font-black tracking-tight"
          >
            Mageroski<span style={{ color: "#C5A059" }}>.</span>
          </h3>
          <p
            style={{ color: "rgba(251, 249, 246, 0.5)" }}
            className="font-sans font-light text-sm leading-relaxed max-w-sm"
          >
            Criando experiências gastronômicas exclusivas e transformando
            jantares privados, casamentos e eventos corporativos em memórias
            afetivas inesquecíveis.
          </p>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4
            style={{ color: "#C5A059" }}
            className="font-sans font-bold text-xs uppercase tracking-widest"
          >
            // Navegação
          </h4>
          <ul className="space-y-2 text-sm font-sans font-light text-white/60">
            <li>
              <a href="#" className="hover:text-[#C5A059] transition-colors">
                Início
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#C5A059] transition-colors">
                História
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#C5A059] transition-colors">
                Experiências
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#C5A059] transition-colors">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-4">
          <h4
            style={{ color: "#C5A059" }}
            className="font-sans font-bold text-xs uppercase tracking-widest"
          >
            // Atendimento
          </h4>
          <p className="text-sm font-sans font-light text-white/60 leading-relaxed">
            Disponível para eventos em toda a região. <br />
            Agendamentos exclusivamente sob consulta prévia.
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 text-xs font-sans tracking-wider text-[#FBF9F6]/80 bg-white/5 py-2 px-4 rounded-full border border-white/5">
              🟢 Agenda Aberta • 2026
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-white/30 font-sans">
        <p>
          © {new Date().getFullYear()} Mageroski — Cozinha de Origem. Todos os
          direitos reservados.
        </p>
        <p className="font-light tracking-widest">Designed with precision</p>
      </div>
    </footer>
  );
}
