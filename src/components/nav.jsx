import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./nav.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="contianer-nav">
      {/* DESKTOP NAVBAR */}

      <header className="navbar desktop-navbar">
        <div className="navbar-logo">
          <img src="/logo/logo-2026.png" alt="Logo" />
        </div>

        <nav className="navbar-links">
          <a href="/">Inicio</a>
          <a href="/#nosotros">Nosotros</a>
          <a href="https://www.youtube.com/@IglesiaVicenteL%C3%B3pez" target="_blank">Predicas</a>
          <a href="/Coros">Cancionero</a>
          <a href="/Contacto">Contacto</a>
        </nav>

        <a href="https://www.youtube.com/@IglesiaVicenteL%C3%B3pez" target="_blank" className="live-btn">EN VIVO</a>
      </header>

      {/* MOBILE NAVBAR */}

      <header className="mobile-navbar">
        <div className="mobile-navbar-top">
          <div className="navbar-logo">
            <img src="/logo/logo-2026.png" alt="Logo" />
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <a href="">Inicio</a>
          <a href="">Nosotros</a>
          <a href="">Eventos</a>
          <a href="">Predicas</a>
          <a href="">Contacto</a>

          <button className="mobile-live-btn">EN VIVO</button>
        </div>
      </header>
    </div>
  );
}
