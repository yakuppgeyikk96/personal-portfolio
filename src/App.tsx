import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-r from-dark-800 via-dark-900 to-dark-800">
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
