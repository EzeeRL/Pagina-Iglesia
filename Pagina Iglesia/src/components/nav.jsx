import React, { useState, useEffect } from 'react';
import './nav.css';
import { Link, useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú en versión móvil
    const location = useLocation();

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Cerrar el menú al navegar a una nueva página
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    // Animaciones con react-spring para los links
    const linkAnimation = useSpring({
        opacity: 1,
        transform: 'scale(1.0)',
        config: { tension: 200, friction: 20 },
        from: { opacity: 0, transform: 'scale(0.6)' },
        delay: mobileMenuOpen ? 300 : 0 // Retraso para la versión móvil
    });

    // Animaciones con react-spring para el título y el logo
    const titleAnimation = useSpring({
        opacity: 1,
        transform: 'scale(1.0)',
        config: { tension: 200, friction: 20 },
        from: { opacity: 0, transform: 'scale(0.6)' },
        delay: mobileMenuOpen ? 300 : 0 // Retraso para la versión móvil
    });

    const logoAnimation = useSpring({
        opacity: 1,
        transform: 'scale(1.0)',
        config: { tension: 200, friction: 20 },
        from: { opacity: 0, transform: 'scale(0.6)' },
        delay: mobileMenuOpen ? 300 : 0 // Retraso para la versión móvil
    });

    return (
        <nav>
            <div className="container-logo-iglesia">
                {/* Logo e H1 con animaciones */}
                <animated.img src="logo/logo-nuevo.png" alt="" className='logo-img' style={logoAnimation} />
                <animated.h1 className='titulo-nav' style={titleAnimation}>Iglesia<b className='texto-especial-nav'>VTL</b></animated.h1>
            </div>
            <ul className={`container-links-nav ${mobileMenuOpen ? 'show-menu' : ''}`}>
                {/* Links con animaciones */}
                <animated.li style={linkAnimation}><Link to='/' className='link-nav'><i className="fa-solid fa-house"></i> Inicio</Link></animated.li>
                <animated.li style={linkAnimation}><Link to='/Coros' className='link-nav'><i className="fa-solid fa-music"></i> Cancionero</Link></animated.li>
                <animated.li style={linkAnimation}><Link to='/Ministerios' className='link-nav'><i className="fa-solid fa-calendar-days"></i> Ministerios</Link></animated.li>
                <animated.li style={linkAnimation}><Link to='/PedidosDeOracion' className='link-nav'><i className="fa-solid fa-hands-praying"></i> Pedidos de Oración</Link></animated.li>
                {/* <animated.li style={linkAnimation}><Link to='/Campa' className='link-nav'><i className="fa-solid fa-tents"></i> Campamento</Link></animated.li> */}
                <animated.li style={linkAnimation}><Link to='/Contacto' className='link-nav'><i className="fa-solid fa-user"></i> Contacto</Link></animated.li>
            </ul>
            {/* Icono del menú móvil */}
            <div className="mobile-menu-icon" onClick={toggleMenu}>
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars menu-icon'}`}></i>
            </div>
        </nav>
    )
}

export default Nav;
