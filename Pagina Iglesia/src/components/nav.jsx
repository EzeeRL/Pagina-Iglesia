import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // const handleScrollToNoticias = (event) => {
    //     event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    //     const noticiasSection = document.getElementById('noticias-section');
    //     if (noticiasSection) {
    //         scrollToSection(noticiasSection);
    //     }
    // };

    const scrollToSection = (section) => {
        const scrollPosition = section.offsetTop - (window.innerHeight / 2) + (section.offsetHeight / 2);
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    };

    return (
        <nav>
            <div className="container-logo-iglesia">
                <img src="./public/logo.png" alt="" className='logo-img' />
                <h1 className='titulo-nav'>Iglesia<b className='texto-especial-nav'>VTL</b></h1>
            </div>
            <ul className={`container-links-nav ${showMenu ? 'show-menu' : ''}`}>
                <Link to='/' className='link-nav'>Inicio</Link>
                <Link to='/Cancionero' className='link-nav'>Cancionero</Link>
                <Link to='/Ministerios' className='link-nav'>Ministerios</Link>
                <Link to='/Galeria' className='link-nav'>Galeria</Link>
                {/* <li className='links-nav'><a href='#' onClick={handleScrollToNoticias} className='link-nav'>Noticias</a></li> */}
                <Link to='/Contacto' className='link-nav'>Contacto</Link>
                {/* HACER QUE LOS "<u>" SOLO SE VEAN CUANDO ESTE EN LA VERSION MOBILE */}
                {/* <i className="fa-solid fa-magnifying-glass icono-buscador"></i> */}
            </ul>
            <div className="mobile-menu-icon" onClick={toggleMenu}>
                <i className={`fas ${showMenu ? 'fa-times' : 'fa-bars menu-icon'}`}></i>
            </div>
        </nav>
    )
}

export default Nav;
