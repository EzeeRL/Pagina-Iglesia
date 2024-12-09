import "./cumpleaños.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

// import { useState } from "react";

function Cumpleaños() {
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
    <div className="container-cumpleaños">
      <h1>Cumpleaños de la Semana</h1>

      <main className="main-container">
        <div className="carrusel">
          <Slider {...settings}>
            <div className="slick-slide">
              <div className="container-card-cumple">
              <img
                src="Cumpleaños/foto-cumple-1.jpg"
                alt=""
                className="img-slider"
                onClick={() =>
                  handleFullscreenImage("Cumpleaños/foto-cumple-1.jpg")
                }
              />
              </div>
            </div>
            <div className="slick-slide">
              <img
                src="Cumpleaños/foto-cumple-2.jpg"
                alt=""
                className="img-slider"
                onClick={() =>
                  handleFullscreenImage("Cumpleaños/foto-cumple-2.jpg")
                }
              />
            </div>
          </Slider>
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
      </main>
    </div>
  );
}

export default Cumpleaños;
