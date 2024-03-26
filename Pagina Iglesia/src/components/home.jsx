import React, { useRef, useEffect, useState } from "react";
import { Link, Element } from "react-scroll";
import { useSpring, animated } from "react-spring";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import "./home.css";
import Nav from "./nav";
import Footer from "./footer";
// import Cumpleaños from "../paginas/cumpleaños";


import axios from "axios";

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

  const [latestVideo, setLatestShort] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0, // Ajusta la opacidad de 0 a 1 dependiendo de si el elemento está visible
    transform: isVisible ? "translateY(0) scale(1)" : "translateY(100px) scale(0.8)", // Ajusta la posición vertical de la animación
  });
  

  useEffect(() => {
    const fetchLatestShort = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBSaOcJEpgiOEkE-VziGbQRvOMcoyADa2U&channelId=UCYCyujpetSCp4aq79i_HpwQ&part=snippet,id&order=date&maxResults=1&type=video&videoDuration=short`
        );
        const latestShortData = response.data.items[0].snippet;
        const latestShortInfo = {
          title: latestShortData.title,
          description: latestShortData.description,
          thumbnailUrl: latestShortData.thumbnails.default.url,
          videoId: response.data.items[0].id.videoId,
        };
        setLatestShort(latestShortInfo);
      } catch (error) {
        console.error("Error fetching latest short:", error);
      }
    };

    fetchLatestShort();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.7 }); // Define el threshold (umbral) en 0.5 para activar la animación cuando el elemento está a la mitad de la pantalla
  
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
  
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
  });


  const handleFullscreenImage = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <Nav></Nav>
      <h1 className="titulo-main">Algunas de Nuestras Actividades</h1>
      <main className="main-container">
        <div className="carrusel">
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
                src="placas-slider/placa-pre.jpeg"
                alt=""
                className="img-slider"
                onClick={() =>
                  handleFullscreenImage("placas-slider/placa-pre.jpeg")
                }
              />
            </div>
            {/* <div className="slick-slide">
              <img
                src="placas-slider/placa-semillero.jpg"
                alt=""
                className="img-slider"
                onClick={() =>
                  handleFullscreenImage("placas-slider/placa-semillero.jpg")
                }
              />
            </div> */}
            {/* <div className='slick-slide'>
							<img src="916.jpg" alt="" className='img-slider' onClick={() => handleFullscreenImage("noticia-1.jpg")}/>
						</div> */}
          </Slider>
        </div>
      </main>

        <h1 className="titulo-noticias">
          <b className="underline-noticias">Noticias</b>
        </h1>

        <div className="container-noticias" id="noticias-section" ref={containerRef}>
          <animated.article
            // className="article-video"
            className="article-container"
            style={animationProps}
          >
            <div className="container-img">
              <img
                src="noticias/placa-campa.png"
                alt=""
                className="img-noticias"
                onClick={() =>
                  handleFullscreenImage("noticias/placa-campa.png")
                }
              />
              {/* <video
              src="noticias/noticia-1.mp4"
              className="noticia-video"
              controls
            ></video> */}
              <h4 className="titulo-texto-noticias">Campamento de Iglesia</h4>
              <p className="texto-noticias">
                26 al 28 de Abril. <br />a las
                <b className="txt-horario-noticia"> 19:00hs</b>
              </p>
              {/* <Link to='/Campamento' className='link-inscripcion-campa'>Inscribite ahora acá</Link> */}
            </div>
          </animated.article>

          <animated.article className="article-reel" style={animationProps}>
            <div className="container-reel">
              {latestVideo ? (
                <>
                  <iframe
                    width="210"
                    height="315"
                    src={`https://www.youtube.com/embed/${latestVideo.videoId}`}
                    title={latestVideo.title}
                    className="video-player"
                    allowFullScreen
                  />
                  <p className="texto-reel">Nuestro último reel:</p>
                  <h4 className="titulo-texto-noticias">
                    Titulo: {latestVideo.title}
                  </h4>
                  <a
                    href={`https://youtube.com/playlist?list=PL5ZoETzk92AAVIJXcWY7Qtxs6zCQa7L5C&si=gcM3j4k6h3Iow5U2`}
                    className="link-reels"
                    target="_blank"
                  >
                    Ver lista de reels
                  </a>
                </>
              ) : (
                <>
                  <h2 className="titulo-aux">Video no disponible</h2>
                  <p className="txt-aux-reel">
                    Mientras tanto, visitá nuestro canal de YouTube
                  </p>
                  <a
                    href="https://www.youtube.com/@IglesiaVicenteLopez"
                    target="_blank"
                  >
                    <i className="fa-brands fa-youtube icons-redes-footer icon-youtube-aux"></i>
                  </a>
                  <a
                    href={`https://youtube.com/playlist?list=PL5ZoETzk92AAVIJXcWY7Qtxs6zCQa7L5C&si=gcM3j4k6h3Iow5U2`}
                    className="link-reels-aux"
                    target="_blank"
                  >
                    Ver lista de reels
                  </a>
                </>
              )}
            </div>
          </animated.article>

          <animated.article className="article-container" style={animationProps}>
            <div className="container-img">
              <img
                src="noticias/noticia-2.png"
                alt=""
                className="img-noticias"
                onClick={() => handleFullscreenImage("noticias/noticia-2.png")}
              />
              <h4 className="titulo-texto-noticias">Runión de Bautismo</h4>
              <p className="texto-noticias">
                Sábado 6 de Abril
                <br />a partir de las
                <b className="txt-horario-noticia"> 19:00hs</b>
              </p>
            </div>
          </animated.article>
        </div>

        {/* <div className="container-noticias-2">
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
              Sábado 23 de Marzo<br />a partir de las
              <b className="txt-horario-noticia"> 16:00hs</b>
            </p>
          </div>
        </article>

        <article className="article-container-2">
          <div className="container-img">
            <img
              src="noticias/noticia-4.jpg"
              alt=""
              className="img-noticias"
              onClick={() => handleFullscreenImage("noticias/noticia-4.jpg")}
            />
            <h4 className="titulo-texto-noticias">
              Inicio Escuela Bíblica Dominical
            </h4>
            <p className="texto-noticias">
              Domingo 24 de Marzo <br />a partir de las
              <b className="txt-horario-noticia"> 11:30hs</b>
            </p>
          </div>
        </article>

        <article className="article-container-2">
          <div className="container-img">
            <img
              src="noticias/noticia-5.png"
              alt=""
              className="img-noticias"
              onClick={() => handleFullscreenImage("noticias/noticia-5.png")}
            />
            <h4 className="titulo-texto-noticias">Campamento de Iglesia</h4>
            <p className="texto-noticias">
              26 al 28 de Abril. <br />
              Precio de: <b className="txt-horario-noticia">$35.000</b>
            </p>
          </div>
        </article>
      </div> */}

      {/* Fullscreen Image Modal */}
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

      {/* <Cumpleaños></Cumpleaños> */}

      <Footer></Footer>
    </>
  );
}

export default Home;
