import "./contacto.css";
import Footer from "../components/footer.jsx";

function Contacto() {
  return (
    <>
      <main className="contact-page">
        {/* HERO */}

        <section className="contact-hero">
          <span className="contact-tag">CONTACTO</span>

          <h1 className="contact-title">Nos encantaría recibirte.</h1>

          <p className="contact-description">
            Hay un lugar para vos y tu familia.
            <br />
            Te esperamos en Sarandí, Avellaneda.
          </p>

          <div className="contact-buttons">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Vicente+Lopez+2113+Sarandi+Buenos+Aires"
              target="_blank"
              className="primary-contact-btn"
            >
              Cómo llegar
            </a>

            <a
              href="https://www.youtube.com/@IglesiaVicenteL%C3%B3pez"
              target="_blank"
              className="secondary-contact-btn"
            >
              Ver en vivo
            </a>
          </div>
        </section>

        {/* INFO GRID */}

        <section className="contact-grid">
          <div className="contact-card">
            <span className="card-label">DIRECCIÓN</span>

            <h3>Vicente López 2113</h3>

            <p>
              Sarandí, Avellaneda
              <br />
              Buenos Aires, Argentina
            </p>
          </div>

          <div className="contact-card">
            <span className="card-label">HORARIOS</span>

            <h3>Reuniones principales</h3>

            <p>
              Viernes — 20:00 HS
              <br />
              Domingos — 9:30 HS
            </p>
          </div>

          <div className="contact-card">
            <span className="card-label">CONTACTO</span>

            <h3>Email</h3>

            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlKnTKrVwZcZcGbHvVXCHKKpVLTtFxdXXmbxxlLvSZlWzLdfCrKJwJBCQrxrtXmTZjgcBB"
              target="_blank"
              className="contact-link"
            >
              icevtl@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <span className="card-label">REDES</span>

            <h3>Seguinos en</h3>

            <div className="social-links">
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
        </section>

        {/* MAP */}

        <section className="map-section">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1327.552102751343!2d-58.34890559794034!3d-34.669131113851826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33371e5a6a455%3A0x191540cece4dc22!2sIglesia%20Cristiana%20Evangelica!5e0!3m2!1ses!2sar!4v1710434434486!5m2!1ses!2sar"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-iframe"
            ></iframe>
          </div>
        </section>

        {/* CTA */}

        <section className="contact-cta">
          <h2>Te esperamos este domingo.</h2>

          <p>Queremos conocerte y compartir juntos un tiempo en comunidad.</p>

          <a
            href="https://www.youtube.com/@IglesiaVicenteL%C3%B3pez"
            target="_blank"
            className="cta-button"
          >
            Ver transmisiones
          </a>
        </section>
      </main>
    </>
  );
}

export default Contacto;
