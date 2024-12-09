import "./jov-ados.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../components/footer.jsx";

import { useSpring, animated } from 'react-spring';

import { useState, useEffect } from "react";

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

  const [isVisible, setIsVisible] = useState(false);
  const [isSliderVisible, setIsSliderVisible] = useState(false);

  useEffect(() => {
    setIsSliderVisible(true);
  }, []);

  const containerAnimation = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: isSliderVisible ? 'scale(1)' : 'scale(0)' },
    config: { tension: 200, friction: 20 }
  });

  useEffect(() => {
    const handleVisibility = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleVisibility, {
      threshold: 0.5,
    });

    const section = document.querySelector(".container-noticias-2");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const opacityAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { transform: 'scale(0)' },
    to: { transform: isVisible ? 'scale(1)' : 'scale(0)' },
    config: { tension: 200, friction: 20 },
  });

  return (
    <>
      <h1 className="titulo-jov-ados">Jóvenes y Adolescentes</h1>

      <h3 className="txt-reuniones">
        Reuniones de Jóvenes y Adolescentes todos los Sábados
      </h3>
      {/* LOS ESTILOS DE ESTAS IMAGENES VIENEN SUJETOS AL CSS DEL HOME */}
      <main className="main-container-ministerios">
        <animated.div className="carrusel" style={containerAnimation}>
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
        </animated.div>
      </main>



      {/* <h1 className="actividades-titulo">Próximas Actividades</h1>
      <animated.div className="container-noticias-2" style={opacityAnimation}>
        <article className="article-container-2">
          <div className="container-img">
            <img
              src="ados-jov/proximas-actividades/actividad-ados.jpg"
              alt=""
              className="img-noticias"
              onClick={() => handleFullscreenImage("ados-jov/proximas-actividades/actividad-ados.jpg")}
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
      </animated.div> */}

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
