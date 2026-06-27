import Hero from "./sections/Hero";
import About from "./sections/About";
import Gallery from "./sections/Gallery";
import Chef from "./sections/Chef";
import Contact from "./sections/Contact";
import Footer from "./components/Footer"; // Importando o footer arrumado

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF9F6]">
      <Hero />
      <About />
      <Gallery />
      <Chef />
      <Contact />
      <Footer /> {/* Footer travado no fim da página por definitivo */}
    </div>
  );
}
