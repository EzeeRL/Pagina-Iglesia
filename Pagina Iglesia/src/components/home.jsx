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

useEffect(() => {
	const fetchLatestShort = async () => {
		try {
		  const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAK6-kZIK18LUT0EerYfx2xfVCK23jNWdE&channelId=UCYCyujpetSCp4aq79i_HpwQ&part=snippet,id&order=date&maxResults=1&type=video&videoDuration=short`);
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

  return (
    <>
    <Nav></Nav>
			<h1 className='titulo-main'>Algunas de Nuestras Actividades</h1>
			<main className="main-container">
				<div className="carrusel">
					<Slider {...settings}>
						<div className='slick-slide'>
							<img src="placa-avi.jpg" alt="" className='img-slider'/>
						</div>
						<div className='slick-slide'>
							<img src="placa-campa.png" alt="" className='img-slider'/>
						</div>
						<div className='slick-slide'>
							<img src="placa-espacio-mujer.jpg" alt="" className='img-slider'/>
						</div>
						<div className='slick-slide'>
							<img src="placa-evangelista.jpg" alt="" className='img-slider'/>
						</div>
						<div className='slick-slide'>
							<img src="placa-predicacion.png" alt="" className='img-slider'/>
						</div>
						<div className='slick-slide'>
							<img src="placa-semillero.jpg" alt="" className='img-slider'/>
						</div>
						<div className='slick-slide'>
							<img src="placa-viernes.png" alt="" className='img-slider'/>
						</div>
						<div className='slick-slide'>
							<img src="916.jpg" alt="" className='img-slider'/>
						</div>
						<div className='slick-slide'>
							<img src="PreAdos.jpg" alt="" className='img-slider'/>
						</div>
					</Slider>
				</div>
			</main>

      <h2 className='titulo-noticias'><b className='underline-noticias'>Noticias</b></h2>
	  
      <div className="container-noticias" id='noticias-section'>
        <article className='article-container'>
          <div className="container-img">
            <img src="imagen-campa.jpeg" alt="" className='img-noticias'/>
            <h4 className='titulo-texto-noticias'>Campamento de Iglesia</h4>
            <p className='texto-noticias'>Inscribite al próximo campamento. <br /> ¡No te lo pierdas!</p><br />
            <Link to='/Campamento' className='link-inscripcion-campa'>Inscribite ahora acá</Link>
          </div>
        </article>
        <article className='article-container'>
          <div className="container-img">
            <img src="reunion-alabanza.jpg" alt="" className='img-noticias'/>
            <h4 className='titulo-texto-noticias'>Reunión de Alabanza</h4>
            <p className='texto-noticias'>Próximo sabado 24 de Febrero <br />a las 20:00hs.</p>
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
                <a href={`https://youtube.com/playlist?list=PL5ZoETzk92AAVIJXcWY7Qtxs6zCQa7L5C&si=gcM3j4k6h3Iow5U2`} className='link-inscripcion-campa' target='_blank'>Ver lista de reels</a>
              </>
            ) : (
              <>
              </>
            )}
          </div>
        </article>



      </div>
      <Footer></Footer>
		</>
  )
}

export default Home;
