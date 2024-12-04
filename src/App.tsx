import "./App.css";
import About from "./components/about";
import Header from "./components/header";
import Navbar from "./components/navbar";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-r from-dark-800 via-dark-900 to-dark-800">
        <Navbar />
        <Header />
        <About />
      </div>
    </LanguageProvider>
  );
}

export default App;
