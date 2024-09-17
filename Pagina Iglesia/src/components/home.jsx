import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";

import { Link } from 'react-router-dom';

import "./home.css";
import Nav from "./nav";
import Footer from "./footer";
import Articles from "./articles";

function Home() {
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
  // const [showCarousel, setShowCarousel] = useState(false);

  const handleFullscreenImage = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  // Animación para el título principal que se ejecuta al principio
  const titleSpring = useSpring({
    from: { transform: "scale(0.8)" },
    to: { transform: "scale(1)" },
    config: { tension: 200, friction: 5 },
  });

  // useInView hook para detectar la visibilidad del título principal y el párrafo
  const [titleRef, titleInView] = useInView({
    triggerOnce: true, // Solo se activa una vez
    threshold: 0.5, // Umbral de visibilidad
  });

  // Animación para el subtítulo que se activa cuando es visible
  const [subtitleRef, subtitleInView] = useInView({
    triggerOnce: true, // Solo se activa una vez
    threshold: 0.5, // Umbral de visibilidad
  });

  const subtitleSpring = useSpring({
    opacity: subtitleInView ? 1 : 0,
    transform: subtitleInView ? "translateX(0)" : "translateX(-50px)",
    config: { tension: 200, friction: 10, delay: 200 },
  });

  // Animación para el título principal que se activa inmediatamente
  const mainTitleSpring = useSpring({
    opacity: titleInView ? 1 : 0,
    transform: titleInView ? "translateX(0)" : "translateX(-50px)",
    config: { tension: 200, friction: 10 },
  });

  const mainSubtitleSpring = useSpring({
    opacity: titleInView ? 1 : 0,
    transform: titleInView ? "translateX(0)" : "translateX(-50px)",
    config: { tension: 200, friction: 10 },
  });

  return (
    <>
      <Nav></Nav>
      <div className="container-background"></div>

      <div className="container-titles">
        <animated.h1 className="title-home" style={titleSpring}>
          <span className="line1">Iglesia</span>
          <br />
          <span className="line2">
            <b className="title-color">V</b>icen<b className="title-color">t</b>
            e <b className="title-color">L</b>opez
          </span>
        </animated.h1>
        <animated.h4
          className="subtitulo-home"
          style={subtitleSpring}
          ref={subtitleRef}
        >
          Tu esperanza y salvación están en Jesús. <br />
          Solo Cristo Salva.
        </animated.h4>
      </div>

      <animated.h1
        className="titulo-main"
        style={mainTitleSpring}
        ref={titleRef}
      >
        Estas son nuestras actividades <br /> semanales. Podés sumarte a <br />{" "}
        cualquiera de ellas.
      </animated.h1>
      <animated.p className="subtitle-actividades" style={mainSubtitleSpring}>
        Hay actividades todos los días. <br />
        Podés ponerte en{" "}
        <Link to='/Contacto' className="redireccion-contacto">
          <u>contacto</u>
        </Link>{" "}
        con nosotros <br />
        para poder asistir a la actividad que desees.
      </animated.p>

      <main className="main-container">
        <animated.div className="carrusel">
          <Slider {...settings}>
            <div className="slick-slide">
              <img
                src="placas-slider/placa-avi.jpeg"
                alt=""
                className="img-slider"
                onClick={() =>
                  handleFullscreenImage("placas-slider/placa-avi.jpeg")
                }
              />
            </div>
            <div className="slick-slide">
              <img
                src="placas-slider/reunion-femenina.jpg"
                alt=""
                className="img-slider"
                onClick={() =>
                  handleFullscreenImage("placas-slider/reunion-femenina.jpg")
                }
              />
            </div>
            <div className="slick-slide">
              <img
                src="placas-slider/placa-ev.jpeg"
                alt=""
                className="img-slider"
                onClick={() =>
                  handleFullscreenImage("placas-slider/placa-ev.jpeg")
                }
              />
            </div>
            <div className="slick-slide">
              <img
                src="placas-slider/placa-viernes.jpeg"
                alt=""
                className="img-slider"
                onClick={() =>
                  handleFullscreenImage("placas-slider/placa-viernes.jpeg")
                }
              />
            </div>
            <div className="slick-slide">
              <img
                src="placas-slider/placa-evangelismo.jpeg"
                alt=""
                className="img-slider"
                onClick={() =>
                  handleFullscreenImage("placas-slider/placa-evangelismo.jpeg")
                }
              />
            </div>
            <div className="slick-slide">
              <img
                src="placas-slider/placa-espacio-mujer.jpeg"
                alt=""
                className="img-slider"
                onClick={() =>
                  handleFullscreenImage(
                    "placas-slider/placa-espacio-mujer.jpeg"
                  )
                }
              />
            </div>
            <div className="slick-slide">
              <img
                src="placas-slider/placa-domingo.jpeg"
                alt=""
                className="img-slider"
                onClick={() =>
                  handleFullscreenImage("placas-slider/placa-domingo.jpeg")
                }
              />
            </div>
            <div className="slick-slide">
              <img
                src="placas-slider/placa-escuelita.jpg"
                alt=""
                className="img-slider"
                onClick={() =>
                  handleFullscreenImage("placas-slider/placa-escuelita.jpg")
                }
              />
            </div>
            <div className="slick-slide">
              <img
                src="placas-slider/placa-pre.jpeg"
                alt=""
                className="img-slider"
                onClick={() =>
                  handleFullscreenImage("placas-slider/placa-pre.jpeg")
                }
              />
            </div>
          </Slider>
        </animated.div>
      </main>

      <Articles></Articles>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div className="fullscreen-modal" onClick={handleCloseFullscreen}>
          <button className="close-button" onClick={handleCloseFullscreen}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="fullscreen-image"
          />
        </div>
      )}

      {/* <Cumpleaños></Cumpleaños> */}

      <Footer></Footer>
    </>
  );
}

export default Home;
