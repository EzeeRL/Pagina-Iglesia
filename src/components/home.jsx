import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const sliderImages = [
    "/slider/img-1.jpeg",
    "/slider/img-2.jpeg",
    "/slider/img-3.jpeg",
    "/slider/img-4.jpeg",
    "/slider/img-5.jpeg",
    "/slider/img-6.jpeg",
  ];

  return (
    <main className="home">
      {/* HERO */}

      <section className="hero">
        <div className="hero-content">
          <span className="subtitle">UNA CASA PARA TODOS</span>

          <h1>Una familia de Fe</h1>

          <p>
            Tu esperanza y salvación están en Jesús.
            <br />
            Sólo Cristo Salva
          </p>

          <div className="hero-buttons">
            <a href="#horarios" className="primary-btn">
              Ver horarios
            </a>

            <a
              href="https://www.youtube.com/@IglesiaVicenteL%C3%B3pez"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              Ver transmisiones
            </a>
          </div>
        </div>

        <div className="hero-image">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={1}
            className="hero-swiper"
          >
            {sliderImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Iglesia ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 5 SOLAS */}

      <section className="beliefs" id="nosotros">
        <div className="beliefs-header">
          <span className="section-tag">LO QUE CREEMOS</span>
          <h2>Pilares teológicos de las iglesias evangélicas</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          className="faith-swiper"
        >
          <SwiperSlide>
            <div className="belief-slide">
              <h3>Sola Scriptura</h3>
              <span>Sólo la Escritura</span>

              <p>
                La Biblia es la autoridad final y suficiente para la fe y la
                práctica cristiana.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="belief-slide">
              <h3>Sola Fide</h3>
              <span>Sólo por la Fe</span>

              <p>
                La salvación se recibe únicamente por la fe en Jesucristo, no
                por obras o méritos humanos.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="belief-slide">
              <h3>Sola Gratia</h3>
              <span>Sólo por la Gracia</span>

              <p>
                La salvación es un regalo inmerecido de Dios, otorgado por su
                gracia.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="belief-slide">
              <h3>Solus Christus</h3>
              <span>Sólo Cristo</span>

              <p>
                Jesucristo es el único mediador entre Dios y los hombres y el
                único camino para la salvación.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="belief-slide">
              <h3>Soli Deo Gloria</h3>
              <span>Sólo a Dios sea la Gloria</span>

              <p>
                Toda la gloria por la creación, la salvación y la vida cristiana
                pertenece únicamente a Dios.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* HORARIOS */}

      <section className="schedule" id="horarios">
        <div className="section-header">
          <span className="section-tag">HORARIOS</span>
          <h2>Nuestras reuniones</h2>
        </div>

        <div className="schedule-grid">
          <div className="schedule-card">
            <h3>LUNES</h3>
            <span>20:00 HS</span>
            <p>
              Adicciones VS Vida.
              <br />
              Zoom ID: 546 067 9344
            </p>
          </div>

          <div className="schedule-card">
            <h3>MARTES</h3>
            <span>17:00 HS</span>
            <p>Reunión Femenina.</p>
          </div>

          <div className="schedule-card">
            <h3>MIÉRCOLES</h3>
            <span>20:00 HS</span>
            <p>
              Adicciones VS Vida.
              <br />
              Zoom ID: 546 067 9344
            </p>
          </div>

          <div className="schedule-card">
            <h3>JUEVES</h3>
            <span>20:00 HS</span>
            <p>
              Espacio Varón
              <br />
              Primer y tercer jueves de cada mes.
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
          “Porque <b>tanto amó Dios al mundo</b> que dio a su <b>Hijo único</b>,
          para que <b>todo</b> el que cree en él <b>no se pierda</b>, sino que
          tenga <b>vida eterna</b>.”
        </p>

        <span>Juan 3:16</span>
      </section>
    </main>
  );
}
