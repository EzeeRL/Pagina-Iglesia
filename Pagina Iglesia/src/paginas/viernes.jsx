import './viernes.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useSpring, animated } from 'react-spring';

import Footer from '../components/footer.jsx';

import { useState } from 'react';

function Viernes() {
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

const [fullscreenImage, setFullscreenImage] = useState(null);

const handleFullscreenImage = (imageUrl) => {
    setFullscreenImage(imageUrl);
};

const handleCloseFullscreen = () => {
	setFullscreenImage(null);
};

const [isVisible] = useState(true);

// Animación de escala para el contenedor de la imagen
const containerAnimation = useSpring({
	from: { transform: 'scale(0)' }, // Escala inicial
	to: { transform: isVisible ? 'scale(1)' : 'scale(0)' }, // Escala final basada en isVisible
	config: { tension: 200, friction: 20 } // Configuración de la animación
});

	return (
		<>
		<h1 className="titulo-viernes">Reunión de oración y estudio de la Palabra</h1>

		{/* LOS ESTILOS DE ESTAS IMAGENES VIENEN SUJETOS AL CSS DEL HOME */}
		<main className="main-container-ministerios">
				<animated.div className="carrusel" style={containerAnimation}>
					<Slider {...settings}>
						<div className='slick-slide'>
							<img src="fotos-domingos/foto-domingo-1.jpeg" alt="" className='img-slider' onClick={() => handleFullscreenImage("fotos-domingos/foto-domingo-1.jpeg")}/>
						</div>
						<div className='slick-slide'>
							<img src="fotos-domingos/foto-domingo-2.jpeg" alt="" className='img-slider' onClick={() => handleFullscreenImage("fotos-domingos/foto-domingo-2.jpeg")}/>
						</div>
						<div className='slick-slide'>
							<img src="fotos-domingos/foto-domingo-3.jpeg" alt="" className='img-slider' onClick={() => handleFullscreenImage("fotos-domingos/foto-domingo-3.jpeg")}/>
						</div>
						<div className='slick-slide'>
							<img src="fotos-domingos/foto-domingo-4.jpeg" alt="" className='img-slider' onClick={() => handleFullscreenImage("fotos-domingos/foto-domingo-4.jpeg")}/>
						</div>
						<div className='slick-slide'>
							<img src="fotos-domingos/foto-domingo-5.jpeg" alt="" className='img-slider' onClick={() => handleFullscreenImage("fotos-domingos/foto-domingo-5.jpeg")}/>
						</div>
						<div className='slick-slide'>
							<img src="fotos-domingos/foto-domingo-6.jpeg" alt="" className='img-slider' onClick={() => handleFullscreenImage("fotos-domingos/foto-domingo-6.jpeg")}/>
						</div>
						<div className='slick-slide'>
							<img src="fotos-domingos/foto-domingo-7.jpeg" alt="" className='img-slider' onClick={() => handleFullscreenImage("fotos-domingos/foto-domingo-7.jpeg")}/>
						</div>
					</Slider>
				</animated.div>
			</main>
			
			{fullscreenImage && (
			<div className="fullscreen-modal" onClick={handleCloseFullscreen}>
				<button className="close-button" onClick={handleCloseFullscreen}>
					<i class="fa-solid fa-xmark"></i>
				</button>
				<img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" />
			</div>
    )}

	<Footer></Footer>
		</>
	)
}

export default Viernes;