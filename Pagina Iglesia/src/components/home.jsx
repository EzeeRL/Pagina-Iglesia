import React from 'react';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import './home.css';
import Nav from './nav';
import Footer from './footer';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

import axios from 'axios';



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
	  centerPadding: '0',
};

const [latestVideo, setLatestShort] = useState(null);
const [fullscreenImage, setFullscreenImage] = useState(null);

useEffect(() => {
	const fetchLatestShort = async () => {
		try {
		  const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBSaOcJEpgiOEkE-VziGbQRvOMcoyADa2U&channelId=UCYCyujpetSCp4aq79i_HpwQ&part=snippet,id&order=date&maxResults=1&type=video&videoDuration=short`);
		  const latestShortData = response.data.items[0].snippet;
		  const latestShortInfo = {
			title: latestShortData.title,
			description: latestShortData.description,
			thumbnailUrl: latestShortData.thumbnails.default.url,
			videoId: response.data.items[0].id.videoId,
		  };
		  setLatestShort(latestShortInfo);
		} catch (error) {
		  console.error('Error fetching latest short:', error);
		}
	  };	  

  fetchLatestShort();
}, []);

const handleFullscreenImage = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
    <Nav></Nav>
			<h1 className='titulo-main'>Algunas de Nuestras Actividades</h1>
			<main className="main-container">
				<div className="carrusel">
					<Slider {...settings}>
						<div className='slick-slide'>
							<img src="placas-slider/placa-avi.jpg" alt="" className='img-slider' onClick={() => handleFullscreenImage("placas-slider/placa-avi.jpg")}/>
						</div>
						<div className='slick-slide'>
							<img src="placas-slider/placa-campa.png" alt="" className='img-slider' onClick={() => handleFullscreenImage("placas-slider/placa-campa.png")}/>
						</div>
						<div className='slick-slide'>
							<img src="placas-slider/placa-espacio-mujer.jpg" alt="" className='img-slider' onClick={() => handleFullscreenImage("placas-slider/placa-espacio-mujer.jpg")}/>
						</div>
						<div className='slick-slide'>
							<img src="placas-slider/placa-evangelista.jpg" alt="" className='img-slider' onClick={() => handleFullscreenImage("placas-slider/placa-evangelista.jpg")}/>
						</div>
						<div className='slick-slide'>
							<img src="placas-slider/placa-predicacion.png" alt="" className='img-slider' onClick={() => handleFullscreenImage("placas-slider/placa-predicacion.png")}/>
						</div>
						<div className='slick-slide'>
							<img src="placas-slider/placa-semillero.jpg" alt="" className='img-slider' onClick={() => handleFullscreenImage("placas-slider/placa-semillero.jpg")}/>
						</div>
						<div className='slick-slide'>
							<img src="placas-slider/placa-viernes.png" alt="" className='img-slider' onClick={() => handleFullscreenImage("placas-slider/placa-viernes.png")}/>
						</div>
						{/* <div className='slick-slide'>
							<img src="916.jpg" alt="" className='img-slider' onClick={() => handleFullscreenImage("noticia-1.jpg")}/>
						</div> */}
						<div className='slick-slide'>
							<img src="placas-slider/PreAdos.jpg" alt="" className='img-slider' onClick={() => handleFullscreenImage("placas-slider/PreAdos.jpg")}/>
						</div>
					</Slider>
				</div>
			</main>

      <h2 className='titulo-noticias'><b className='underline-noticias'>Noticias</b></h2>
	  
      <div className="container-noticias" id='noticias-section'>
        <article className='article-container'>
          <div className="container-img">
            <img src="noticias/noticia-2.jpeg" alt="" className='img-noticias' onClick={() => handleFullscreenImage("noticias/noticia-2.jpeg")}/>
            <h4 className='titulo-texto-noticias'>Taller de Evangelismo</h4>
            <p className='texto-noticias'>Próximo Sábado 9 de Marzo <br />a las 17:00hs</p>
            {/* <Link to='/Campamento' className='link-inscripcion-campa'>Inscribite ahora acá</Link> */}
          </div>
        </article>
        <article className='article-container'>
          <div className="container-img">
            <img src="noticias/noticia-1.jpg" alt="" className='img-noticias' onClick={() => handleFullscreenImage("noticias/noticia-1.jpg")}/>
            <h4 className='titulo-texto-noticias'>Picnic de Elim</h4>
            <p className='texto-noticias'>Próximo sabado 16 de Marzo <br />a partir de las 10:00hs.</p>
          </div>
        </article>




        <article className='article-reel'>
          <div className="container-reel">
            {latestVideo ? (
              <>
                <iframe
                  width="210"
                  height="315"
                  src={`https://www.youtube.com/embed/${latestVideo.videoId}`}
                  title={latestVideo.title}
                  className='video-player'
                  allowFullScreen
                />
				<p className='texto-reel'>Nuestro último reel:</p>
                <h4 className='titulo-texto-noticias'>Titulo: {latestVideo.title}</h4>
                <a href={`https://youtube.com/playlist?list=PL5ZoETzk92AAVIJXcWY7Qtxs6zCQa7L5C&si=gcM3j4k6h3Iow5U2`} className='link-reels' target='_blank'>Ver lista de reels</a>
              </>
            ) : (
              <>
              </>
            )}
          </div>
        </article>

    {/* Fullscreen Image Modal */}
    {fullscreenImage && (
      <div className="fullscreen-modal" onClick={handleCloseFullscreen}>
		<button className="close-button" onClick={handleCloseFullscreen}><i class="fa-solid fa-xmark"></i></button>
        <img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" />
      </div>
    )}

      </div>
      <Footer></Footer>
		</>
  )
}

export default Home;
