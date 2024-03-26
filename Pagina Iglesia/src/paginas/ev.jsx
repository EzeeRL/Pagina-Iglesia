import './ev.css';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Footer from '../components/footer.jsx';

function EspacioVaron() {
    const [isVisible] = useState(true);

    // Animación de escala para el contenedor de la imagen
    const containerAnimation = useSpring({
        from: { transform: 'scale(0)' }, // Escala inicial
        to: { transform: isVisible ? 'scale(1)' : 'scale(0)' }, // Escala final basada en isVisible
        config: { tension: 200, friction: 20 } // Configuración de la animación
    });

    // Estado y funciones para manejar la imagen a pantalla completa
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
                    <animated.div className="container-img" style={containerAnimation}>
                        {/* Agregamos la animación de escala al contenedor */}
                        <img src="Espacio Varon/placa-ev.jpeg" alt="" className='placa-ev' onClick={() => handleFullscreenImage("Espacio Varon/placa-ev.jpeg")} />
                    </animated.div>
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

            <Footer />
        </>
    )
}

export default EspacioVaron;
