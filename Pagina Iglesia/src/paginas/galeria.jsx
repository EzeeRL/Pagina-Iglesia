import React, { useState } from 'react';
import './galeria.css';

import Footer from '../components/footer.jsx';


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

    const handleDownloadClick = () => {
        // Crear un enlace temporal
        const downloadLink = document.createElement('a');
        downloadLink.href = selectedImage;
        downloadLink.download = 'imagen'; // Nombre del archivo de descarga (puedes personalizarlo)
        
        // Simular un clic en el enlace para iniciar la descarga
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Limpiar el enlace temporal
        document.body.removeChild(downloadLink);
    };

    return (
        <>
            <h1 className="titulo-galeria">Galeria</h1>
            <p className='txt-guia-galeria'>Si desea descargar una imagen haga clic en ella y luego verá arriba a la derecha un icono para descargarla.</p>

            <div className="row">
                <div className="column">
                    <img src="img-1.jpg" alt="" onClick={() => handleImageClick("../public/img-1.jpg")} />
                    <img src="img-2.png" alt="" onClick={() => handleImageClick("../public/img-2.png")} />
                    <img src="img-3.jfif" alt="" onClick={() => handleImageClick("../public/img-3.jfif")} />
                    <img src="img-4.jpg" alt="" onClick={() => handleImageClick("../public/img-4.jpg")} />
                    <img src="img5.jpg" alt="" onClick={() => handleImageClick("../public/img5.jpg")} />
                </div>
                <div className="column">
                <img src="img-1.jpg" alt="" onClick={() => handleImageClick("../public/img-1.jpg")} />
                    <img src="img-2.png" alt="" onClick={() => handleImageClick("../public/img-2.png")} />
                    <img src="img-3.jfif" alt="" onClick={() => handleImageClick("../public/img-3.jfif")} />
                    <img src="img-4.jpg" alt="" onClick={() => handleImageClick("../public/img-4.jpg")} />
                    <img src="img5.jpg" alt="" onClick={() => handleImageClick("../public/img5.jpg")} />
                </div>
                <div className="column">
                <img src="../public/img-1-jpg" alt="" onClick={() => handleImageClick("../public/img-1.jpg")} />
                    <img src="img-2.png" alt="" onClick={() => handleImageClick("../public/img-2.png")} />
                    <img src="img-3.jfif" alt="" onClick={() => handleImageClick("../public/img-3.jfif")} />
                    <img src="img-4.jpg" alt="" onClick={() => handleImageClick("../public/img-4.jpg")} />
                    <img src="img5.jpg" alt="" onClick={() => handleImageClick("../public/img5.jpg")} />
                </div>
                <div className="column">
                <img src="../public/img-1.jpg" alt="" onClick={() => handleImageClick("../public/img-1.jpg")} />
                    <img src="img-2.png" alt="" onClick={() => handleImageClick("../public/img-2.png")} />
                    <img src="img-3.jfif" alt="" onClick={() => handleImageClick("../public/img-3.jfif")} />
                    <img src="img-4.jpg" alt="" onClick={() => handleImageClick("../public//-4.jpg")} />
                    <img src="img5.jpg" alt="" onClick={() => handleImageClick("../public/img5.jpg")} />
                </div>
            </div>

            {fullscreen && selectedImage && (
            <div className="modal" onClick={handleCloseClick}>
                <span className="close" onClick={handleCloseClick}><i class="fa-solid fa-xmark"></i></span>
                <img className="modal-content" src={selectedImage} alt="fullscreen" />
                <i className="fa-solid fa-download icono-descargar" onClick={handleDownloadClick}></i>
            </div>
            )}

            <Footer></Footer>
        </>
    );
}

export default Galeria;
