import './ev.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Footer from '../components/footer.jsx';

import { useState } from 'react';

function EspacioVaron() {
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

    return (
        <>
            <h1 className="titulo-ev">Espacio Varón</h1>

            <main className="main-container-ev">
                <article className='article-container-ev'>
                    <div className="container-img">
                        <video src="noticias/noticia-video.mp4" className='noticia-video-ev' autoPlay="true" controls></video>
                    </div>
                </article>
            </main>

            {fullscreenImage && (
                <div className="fullscreen-modal" onClick={handleCloseFullscreen}>
                    <button className="close-button" onClick={handleCloseFullscreen}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" />
                </div>
            )}

            <Footer></Footer>
        </>
    )
}

export default EspacioVaron;
