import "./jov-ados.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../components/footer.jsx";

import { useState } from "react";

function JovenesYAdolescentes() {
  // SETTINGS SLIDER
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    variableWidth: false,
    centerMode: true,
    centerPadding: "0",
  };

  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleFullscreenImage = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };
  return (
    <>
      <h1 className="titulo-jov-ados">Jóvenes y Adolescentes</h1>

      <h3 className="txt-reuniones">
        Reuniones de Jóvenes y Adolescentes todos los Sábados
      </h3>
      {/* LOS ESTILOS DE ESTAS IMAGENES VIENEN SUJETOS AL CSS DEL HOME */}
      <main className="main-container">
        <div className="carrusel">
          <Slider {...settings}>
            <div className="slick-slide">
              <img
                src="ados-jov/foto-1.jpg"
                alt=""
                className="img-slider"
                onClick={() => handleFullscreenImage("ados-jov/foto-1.jpg")}
              />
            </div>
            <div className="slick-slide">
              <img
                src="ados-jov/foto-2.jpg"
                alt=""
                className="img-slider"
                onClick={() => handleFullscreenImage("ados-jov/foto-2.jpg")}
              />
            </div>
            <div className="slick-slide">
              <img
                src="ados-jov/foto-3.jpg"
                alt=""
                className="img-slider"
                onClick={() => handleFullscreenImage("ados-jov/foto-3.jpg")}
              />
            </div>
            <div className="slick-slide">
              <img
                src="ados-jov/foto-4.jpg"
                alt=""
                className="img-slider"
                onClick={() => handleFullscreenImage("ados-jov/foto-4.jpg")}
              />
            </div>
            <div className="slick-slide">
              <img
                src="ados-jov/foto-5.jpg"
                alt=""
                className="img-slider"
                onClick={() => handleFullscreenImage("ados-jov/foto-5.jpg")}
              />
            </div>
            <div className="slick-slide">
              <img
                src="ados-jov/foto-6.jpg"
                alt=""
                className="img-slider"
                onClick={() => handleFullscreenImage("ados-jov/foto-6.jpg")}
              />
            </div>
            <div className="slick-slide">
              <img
                src="ados-jov/foto-7.jpg"
                alt=""
                className="img-slider"
                onClick={() => handleFullscreenImage("ados-jov/foto-7.jpg")}
              />
            </div>
          </Slider>
        </div>
      </main>



      <h1 className="actividades-titulo">Próximas Actividades</h1>
      <div className="container-noticias-2">
        <article className="article-container-2">
          <div className="container-img">
            <img
              src="noticias/noticia-3.jpeg"
              alt=""
              className="img-noticias"
              onClick={() => handleFullscreenImage("noticias/noticia-3.jpeg")}
            />
            <h4 className="titulo-texto-noticias">
              Actividad de Jóvenes y Adolescentes
            </h4>
            <p className="texto-noticias">
              Sábado 23 de Marzo
              <br />a partir de las
              <b className="txt-horario-noticia"> 16:00hs</b>
            </p>
          </div>
        </article>
      </div>

      {fullscreenImage && (
        <div className="fullscreen-modal" onClick={handleCloseFullscreen}>
          <button className="close-button" onClick={handleCloseFullscreen}>
            <i class="fa-solid fa-xmark"></i>
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="fullscreen-image"
          />
        </div>
      )}

      <Footer></Footer>
    </>
  );
}

export default JovenesYAdolescentes;
