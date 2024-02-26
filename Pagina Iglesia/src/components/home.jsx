import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';
import Nav from './nav';
import Footer from './footer';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';


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

  return (
    <>
    <Nav></Nav>
			<h1 className='titulo-main'>Algunas de Nuestras Actividades</h1>
			<main className="main-container">
				<div className="carrusel">
					<Slider {...settings}>
						<div className='slick-slide'>
							<img src="./public/placa-avi.jpg" alt="" className='img-slider'/>
						</div>
						<div className='slick-slide'>
							<img src="./public/placa-campa.png" alt="" className='img-slider'/>
						</div>
						<div className='slick-slide'>
							<img src="./public/placa-espacio-mujer.jpg" alt="" className='img-slider'/>
						</div>
						<div className='slick-slide'>
							<img src="./public/placa-evangelista.jpg" alt="" className='img-slider'/>
						</div>
						<div className='slick-slide'>
							<img src="./public/placa-predicacion.png" alt="" className='img-slider'/>
						</div>
						<div className='slick-slide'>
							<img src="./public/placa-semillero.jpg" alt="" className='img-slider'/>
						</div>
						<div className='slick-slide'>
							<img src="./public/placa-viernes.png" alt="" className='img-slider'/>
						</div>
						<div className='slick-slide'>
							<img src="./public/916.jpg" alt="" className='img-slider'/>
						</div>
						<div className='slick-slide'>
							<img src="./public/PreAdos.jpg" alt="" className='img-slider'/>
						</div>
					</Slider>
				</div>
			</main>

      <h2 className='titulo-noticias'><b className='underline-noticias'>Noticias</b></h2>
	  
      <div className="container-noticias" id='noticias-section'>
        <article className='article-container'>
          <div className="container-img">
            <img src="./public/imagen-campa.jpeg" alt="" className='img-noticias'/>
            <h4 className='titulo-texto-noticias'>Campamento de Iglesia</h4>
            <p className='texto-noticias'>Inscribite al próximo campamento. <br /> ¡No te lo pierdas!</p><br />
            <Link to='/Campamento' className='link-inscripcion-campa'>Inscribite ahora acá</Link>
          </div>
        </article>
        <article className='article-container'>
          <div className="container-img">
            <img src="./public/reunion-alabanza.jpg" alt="" className='img-noticias'/>
            <h4 className='titulo-texto-noticias'>Reunión de Alabanza</h4>
            <p className='texto-noticias'>Próximo sabado 24 de Febrero <br />a las 20:00hs.</p>
          </div>
        </article>
      </div>
      <Footer></Footer>
		</>
  )
}

export default Home;
