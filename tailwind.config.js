/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta Temática "Cozinha de Origem"
        creme: "#FBF9F6", // Fundo limpo e sofisticado
        vinho: "#5C1D24", // Toque eslavo/afetivo profundo
        dourado: "#C5A059", // Trigo seco / Detalhes finos
        oliva: "#3B4436", // Elementos de horta / Contraste orgânico
        grafite: "#1A1A1A", // Para textos escuros ou sessões premium
      },
      fontFamily: {
        titulo: ["Playfair Display", "serif"],
        corpo: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
