import React, { useState } from "react";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./home.css";
import Nav from "./nav";
import Footer from "./footer";
// import Cumpleaños from "../paginas/cumpleaños";

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

      <Articles></Articles>

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
