import "./Home.css";

export default function Home() {
  return (
    <main className="home">

      {/* HERO */}

      <section className="hero">
        <div className="hero-content">
          <span className="subtitle">UNA CASA PARA TODOS</span>

          <h1>
            Un lugar para
            <br />
            encontrar esperanza.
          </h1>

          <p>
            Tu esperanza y salvación están en Jesús. <br />
            Solo Cristo Salva
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Ver horarios</button>

            <button className="secondary-btn">Ver transmisiones</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?q=80&w=1200&auto=format&fit=crop"
            alt="Iglesia"
          />
        </div>
      </section>

      {/* ABOUT */}

      <section className="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1200&auto=format&fit=crop"
            alt="Comunidad"
          />
        </div>

        <div className="about-content">
          <span className="section-tag">QUIÉNES SOMOS</span>

          <h2>Creemos en comunidad, autenticidad y propósito.</h2>

          <p>
            Queremos ser una iglesia cercana, cálida y enfocada en acompañar
            personas en cada etapa de su vida.
          </p>
        </div>
      </section>

      {/* HORARIOS */}

      <section className="schedule">
        <div className="section-header">
          <span className="section-tag">HORARIOS</span>
          <h2>Nuestras reuniones</h2>
        </div>

        <div className="schedule-grid">
          <div className="schedule-card">
            <h3>LUNES</h3>
            <span>20:00 HS</span>
            <p>
              Adicciones VS Vida. <br />
              Zoom ID: 546 067 9344
            </p>
          </div>

          <div className="schedule-card">
            <h3>MIÉRCOLES</h3>
            <span>20:00 HS</span>
            <p>
              Adicciones VS Vida. <br />
              Zoom ID: 546 067 9344
            </p>
          </div>

          <div className="schedule-card">
            <h3>VIERNES</h3>
            <span>20:00 HS</span>
            <p>Reunión de Oración y Estudio</p>
          </div>

          <div className="schedule-card">
            <h3>SÁBADO</h3>
            <span>18:30 HS</span>
            <p>Reunión de Jóvenes</p>
          </div>

          <div className="schedule-card">
            <h3>DOMINGO</h3>
            <span>9:30 HS</span>
            <p>Cena del Señor</p>
          </div>

          <div className="schedule-card">
            <h3>DOMINGO</h3>
            <span>11:00 HS</span>
            <p>Predicación del Evangelio</p>
          </div>

          <div className="schedule-card">
            <h3>DOMINGO</h3>
            <span>11:30 HS</span>
            <p>Escuela Bíblica Infantil</p>
          </div>
        </div>
      </section>

      {/* VERSE */}

      <section className="verse">
        <p>
          “Porque donde están dos o tres reunidos en mi nombre, allí estoy yo.”
        </p>

        <span>Mateo 18:20</span>
      </section>

    </main>
  );
}
