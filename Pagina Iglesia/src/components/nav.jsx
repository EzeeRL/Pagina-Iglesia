import React, { useState, useEffect } from 'react';
import './nav.css';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // Cerrar el menú al navegar a una nueva página
    useEffect(() => {
        setShowMenu(false);
    }, [location.pathname]);

    return (
        <nav>
            <div className="container-logo-iglesia">
                <img src="logo/logo.png" alt="" className='logo-img' />
                <h1 className='titulo-nav'>Iglesia<b className='texto-especial-nav'>VTL</b></h1>
            </div>
            <ul className={`container-links-nav ${showMenu ? 'show-menu' : ''}`}>
                <Link to='/' className='link-nav'>Inicio</Link>
                <Link to='/Coros' className='link-nav'>Cancionero</Link>
                <Link to='/Ministerios' className='link-nav'>Ministerios</Link>
                {/* <Link to='/Galeria' className='link-nav'>Galeria</Link> */}
                <Link to='/Contacto' className='link-nav'>Contacto</Link>
                {/* <Link to='/Prueba' className='link-nav'>Prueba</Link> */}
            </ul>
            <div className="mobile-menu-icon" onClick={toggleMenu}>
                <i className={`fas ${showMenu ? 'fa-times' : 'fa-bars menu-icon'}`}></i>
            </div>
        </nav>
    )
}

export default Nav;
