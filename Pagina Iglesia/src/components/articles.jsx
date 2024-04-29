import React, { useRef, useEffect, useState } from "react";

import { useSpring, animated } from "react-spring";

import { Link } from "react-router-dom";

import axios from "axios";

import "./articles.css";

function Articles() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    ); // Reducir el umbral a 0.3 para activar la animación antes

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const [latestVideo, setLatestVideo] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBSaOcJEpgiOEkE-VziGbQRvOMcoyADa2U&channelId=UCYCyujpetSCp4aq79i_HpwQ&part=snippet,id&order=date&maxResults=1&type=video&videoDuration=short`
        );
        const latestVideoData = response.data.items[0].snippet;
        const latestVideoInfo = {
          title: latestVideoData.title,
          description: latestVideoData.description,
          thumbnailUrl: latestVideoData.thumbnails.default.url,
          videoId: response.data.items[0].id.videoId,
        };
        setLatestVideo(latestVideoInfo);
      } catch (error) {
        console.error("Error fetching latest video:", error);
      }
    };

    fetchLatestVideo();
  }, []);

  const handleFullscreenImage = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <h1 className="titulo-noticias">
        <b className="underline-noticias">Noticias</b>
      </h1>

      <div
        className="container-noticias"
        id="noticias-section"
        ref={containerRef}
      >
        {/* <animated.article
          className="article-container"
          style={animationProps}
        >
          <div className="container-img">
            <img
              src="noticias/placa-campa.png"
              alt=""
              className="img-noticias"
              onClick={() => handleFullscreenImage("noticias/placa-campa.png")}
            />
            <h4 className="titulo-texto-noticias">Campamento de Iglesia</h4>
            <p className="texto-noticias">Precio: $35.000 <br />
              <b className="txt-horario-noticia">26 al 28 de Abril.</b>
            </p>
            <Link to="/Campa" className="link-inscripcion-campa">
              Inscribite ahora acá
            </Link>
          </div>
        </animated.article> */}

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
                <p className="texto-reel">Nuestro último Video:</p>
                <h4 className="titulo-texto-noticias">
                  Titulo: {latestVideo.title}
                </h4>
                <a
                  href={`https://www.youtube.com/@IglesiaVicenteLopez`}
                  className="link-reels"
                  target="_blank"
                >
                  Ver Canal
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
              src="noticias/placa-avi.jpeg"
              alt=""
              className="img-noticias"
              onClick={() =>
                handleFullscreenImage("noticias/placa-avi.jpeg")
              }
            />
            <h4 className="titulo-texto-noticias">
              Adicciones VS Vida
            </h4>
            <p className="texto-noticias">
              Lunes 29 de Abril
              <br />a partir de las
              <b className="txt-horario-noticia"> 20:00hs</b><br />
              Zoom ID: <b className="txt-horario-noticia">546 067 9344</b>
            </p>
            {/* <Link to="/PedidosDeOracion" className="link-inscripcion-campa">
              Enviar pedido de oración
            </Link> */}
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
              Sábado 23 de Marzo
              <br />a partir de las
              <b className="txt-horario-noticia"> 16:00hs</b>
            </p>
          </div>
        </article>

        <animated.article
          className="article-container-2"
          style={animationProps}
        >
          <div className="container-img">
            <img
              src="noticias/placa-nunca-mas-solos.png"
              alt=""
              className="img-noticias"
              onClick={() =>
                handleFullscreenImage("noticias/placa-nunca-mas-solos.png")
              }
            />
            <h4 className="titulo-texto-noticias">Runión de Bautismo</h4>
            <p className="texto-noticias">
              Sábado 6 de Abril
              <br />a partir de las
              <b className="txt-horario-noticia"> 19:00hs</b>
            </p>
          </div>
        </animated.article>

        <article className="article-container-2">
          <div className="container-img">
            <img
              src="noticias/placa-escuelita.jpg"
              alt=""
              className="img-noticias"
              onClick={() =>
                handleFullscreenImage("noticias/placa-escuelita.jpg")
              }
            />
            <h4 className="titulo-texto-noticias">Escuela Bíblica Dominical</h4>
            <p className="texto-noticias">
              Domingo 11:30hs <br />
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
    </>
  );
}

export default Articles;
