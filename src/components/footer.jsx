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
          <a href="">Inicio</a>
          <a href="">Nosotros</a>
          <a href="">Predicas</a>
          <a href="">Cancionero</a>
          <a href="">Contacto</a>
        </div>

        <div className="footer-column">
          <h3>Horarios</h3>
          <p>Viernes — 20:00 HS</p>
          <p>Domingo — 9:30 HS</p>
          <p>Escuela Bíblica Infantil</p>
        </div>

        <div className="footer-column">
          <h3>Contacto</h3>
          <p>Vicente López 2113</p>
          <p>Sarandí, Avellaneda</p>
          <p>Buenos Aires, Argentina</p>
          <p>icevtl@gmail.com</p>
        </div>

        <div className="footer-column">
          <h3>Redes</h3>
          <a href="">Instagram</a>
          <a href="">YouTube</a>
          <a href="">Facebook</a>
        </div>
      </div>

      {/* CAJÓN AMARILLO - Abajo: copyright + botón a la derecha */}
      <div className="footer-bottom">
        <p>© 2026 Iglesia Vicente López Solo Cristo Salva.</p>
        <a href="" className="footer-live-btn">
          VER EN VIVO
        </a>
      </div>
    </footer>
  );
}
