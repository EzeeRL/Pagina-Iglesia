import React, { useState } from 'react';
import './galeria.css';

const Galeria = () => {
    const [fullscreen, setFullscreen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setFullscreen(true);
    };

    const handleCloseClick = () => {
        setFullscreen(false);
        setSelectedImage(null);
    };

    return (
        <>
            <h1 className="titulo-galeria">Galeria</h1>

            <div className="row">
                <div className="column">
                    <img src="../public/foto-celu.jpeg" alt="" onClick={() => handleImageClick("../public/foto-celu.jpeg")} />
                    <img src="../public/foto-pc.jpeg" alt="" onClick={() => handleImageClick("../public/foto-pc.jpeg")} />
                    <img src="../public/foto-celu.jpeg" alt="" onClick={() => handleImageClick("../public/foto-celu.jpeg")} />
                    <img src="../public/foto-pc.jpeg" alt="" onClick={() => handleImageClick("../public/foto-pc.jpeg")} />
                    <img src="../public/foto-celu.jpeg" alt="" onClick={() => handleImageClick("../public/foto-celu.jpeg")} />
                </div>
                <div className="column">
                    <img src="../public/foto-celu.jpeg" alt="" onClick={() => handleImageClick("../public/foto-celu.jpeg")} />
                    <img src="../public/foto-pc.jpeg" alt="" onClick={() => handleImageClick("../public/foto-pc.jpeg")} />
                    <img src="../public/foto-celu.jpeg" alt="" onClick={() => handleImageClick("../public/foto-celu.jpeg")} />
                    <img src="../public/foto-pc.jpeg" alt="" onClick={() => handleImageClick("../public/foto-pc.jpeg")} />
                    <img src="../public/foto-celu.jpeg" alt="" onClick={() => handleImageClick("../public/foto-celu.jpeg")} />
                </div>
                <div className="column">
                    <img src="../public/foto-celu.jpeg" alt="" onClick={() => handleImageClick("../public/foto-celu.jpeg")} />
                    <img src="../public/foto-pc.jpeg" alt="" onClick={() => handleImageClick("../public/foto-pc.jpeg")} />
                    <img src="../public/foto-celu.jpeg" alt="" onClick={() => handleImageClick("../public/foto-celu.jpeg")} />
                    <img src="../public/foto-pc.jpeg" alt="" onClick={() => handleImageClick("../public/foto-pc.jpeg")} />
                    <img src="../public/foto-celu.jpeg" alt="" onClick={() => handleImageClick("../public/foto-celu.jpeg")} />
                </div>
                <div className="column">
                    <img src="../public/foto-celu.jpeg" alt="" onClick={() => handleImageClick("../public/foto-celu.jpeg")} />
                    <img src="../public/foto-pc.jpeg" alt="" onClick={() => handleImageClick("../public/foto-pc.jpeg")} />
                    <img src="../public/foto-celu.jpeg" alt="" onClick={() => handleImageClick("../public/foto-celu.jpeg")} />
                    <img src="../public/foto-pc.jpeg" alt="" onClick={() => handleImageClick("../public/foto-pc.jpeg")} />
                    <img src="../public/foto-celu.jpeg" alt="" onClick={() => handleImageClick("../public/foto-celu.jpeg")} />
                </div>
            </div>

            {fullscreen && selectedImage && (
                <div className="modal" onClick={handleCloseClick}>
                    <span className="close" onClick={handleCloseClick}>&times;</span>
                    <img className="modal-content" src={selectedImage} alt="fullscreen" />
                </div>
            )}
        </>
    );
}

export default Galeria;
