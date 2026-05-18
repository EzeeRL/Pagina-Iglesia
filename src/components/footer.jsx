import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* CAJÓN ROJO - Arriba: Logo + nombre + frase */}
      <div className="footer-brand-top">
        <img src="/logo/logo-2026.png" alt="Logo Iglesia" />
        <div className="footer-brand-text">
          <h2>
            Iglesia Vicente López
            <br />
            Solo Cristo Salva
          </h2>
          <p>
            Una comunidad centrada en Jesús, en la esperanza y en vidas
            transformadas.
          </p>
        </div>
      </div>

      {/* CAJÓN AZUL - Medio: Columnas de información */}
      <div className="footer-info">
        <div className="footer-column">
          <h3>Links</h3>
          <a href="/">Inicio</a>
          <a href="/#nosotros">Nosotros</a>
          <a
            href="https://www.youtube.com/@IglesiaVicenteL%C3%B3pez"
            target="_blank"
          >
            Predicas
          </a>
          <a href="/Coros">Cancionero</a>
          <a href="/Contacto">Contacto</a>
        </div>

        <div className="footer-column">
          <h3>Horarios</h3>
          <p>Viernes — 20:00hs</p>
          <p>Domingo — 9:30hs</p>
          <p>Escuela Bíblica Infantil - 11:30hs</p>
        </div>

        <div className="footer-column">
          <h3>Contacto</h3>
          <p>Vicente López 2113 Sarandí, Avellaneda, Buenos Aires, Argentina</p>
          <p>icevtl@gmail.com</p>
        </div>

        <div className="footer-column">
          <h3>Redes</h3>
          <a href="https://www.instagram.com/iglesia.vtl/" target="_blank">
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@IglesiaVicenteL%C3%B3pez"
            target="_blank"
          >
            YouTube
          </a>
          <a
            href="https://www.facebook.com/iglesia.vicentelopez"
            target="_blank"
          >
            Facebook
          </a>
        </div>
      </div>

      {/* CAJÓN AMARILLO - Abajo: copyright + botón a la derecha */}
      <div className="footer-bottom">
        <p>© 2026 Iglesia Vicente López Solo Cristo Salva.</p>
        <a
          href="https://www.youtube.com/@IglesiaVicenteL%C3%B3pez"
          target="_blank"
          className="footer-live-btn"
        >
          VER EN VIVO
        </a>
      </div>
    </footer>
  );
}
