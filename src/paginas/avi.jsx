import "./avi.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../components/footer.jsx";

import { useSpring, animated } from 'react-spring';

import { useState } from "react";

function AVI() {
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

  // ANIMACIONES

  const [isVisible] = useState(true);

  // Animación de escala para el contenedor de la imagen
  const containerAnimation = useSpring({
      from: { transform: 'scale(0)' }, // Escala inicial
      to: { transform: isVisible ? 'scale(1)' : 'scale(0)' }, // Escala final basada en isVisible
      config: { tension: 200, friction: 20 } // Configuración de la animación
  });

  return (
    <div className="container-avi">
      <h1 className="titulo-avi">Adicciones vs Vida</h1>

      {/* LOS ESTILOS DE ESTAS IMAGENES VIENEN SUJETOS AL CSS DEL HOME */}
      <animated.main className="main-container-ministerios" style={containerAnimation}>
        <div className="carrusel">
          <Slider {...settings}>
            <div className="slick-slide">
              <img
                src="avi/avi-placa.jpg"
                alt=""
                className="img-slider"
                onClick={() => handleFullscreenImage("avi/avi-placa.jpg")}
              />
            </div>
            <div className="slick-slide">
              <img
                src="avi/foto-avi.png"
                alt=""
                className="img-slider"
                onClick={() => handleFullscreenImage("avi/foto-avi.png")}
              />
            </div>
          </Slider>
        </div>
      </animated.main>

      <div className="container-info">
        <p>
          Adicciones vs Vida Argentina es una fundación conformada por personas
          de diferentes partes del país y que se ocupa de ayudar a personas con
          problemáticas como adicciones a drogas, alcohol, tabaco. También,
          depresión, ansiedad, entre otras cosas. Usamos un modo ambulatorio y
          nuestros encuentros son los días lunes y miércoles mediante Zoom
          Meetings. Cada mes hacemos un taller presencial en el que se tratan
          temas como la depresión y el suicidio, la ansiedad, las convicciones o
          la mentira y el autoengaño.
        </p>
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
    </div>
  );
}

export default AVI;
