import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-[#F5F3EE]">
      <Navbar />
      <Hero />
      <About />
      {/* <Skills />
      <Work /> */}
      <Experience />
      <Contact />
    </div>
  );
}
export default App;
