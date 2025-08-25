import { useState, useEffect } from "react";
import "./nav.css";
import { Link, useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const linkAnimation = useSpring({
    opacity: 1,
    transform: "scale(1.0)",
    config: { tension: 200, friction: 20 },
    from: { opacity: 0, transform: "scale(0.6)" },
    delay: mobileMenuOpen ? 300 : 0,
  });

  const titleAnimation = useSpring({
    opacity: 1,
    transform: "scale(1.0)",
    config: { tension: 200, friction: 20 },
    from: { opacity: 0, transform: "scale(0.6)" },
    delay: mobileMenuOpen ? 300 : 0,
  });

  const logoAnimation = useSpring({
    opacity: 1,
    transform: "scale(1.0)",
    config: { tension: 200, friction: 20 },
    from: { opacity: 0, transform: "scale(0.6)" },
    delay: mobileMenuOpen ? 300 : 0,
  });

  return (
    <nav>
      <div className="container-logo-iglesia">
        <animated.img
          src="logo/logo-nuevo.png"
          alt=""
          className="logo-img"
          style={logoAnimation}
        />
        <animated.h1 className="titulo-nav" style={titleAnimation}>
          Iglesia<b className="texto-especial-nav">VTL</b>
        </animated.h1>
      </div>
      <ul
        className={`container-links-nav ${mobileMenuOpen ? "show-menu" : ""}`}
      >
        <animated.li style={linkAnimation}>
          <Link to="/" className="link-nav">
            <i className="fa-solid fa-house icons-nav"></i> Inicio
          </Link>
        </animated.li>
        {/* <animated.li style={linkAnimation}>
          <Link to="/Campa" className="link-nav">
            <i class="fa-solid fa-tents icons-nav"></i> Campamento
          </Link>
        </animated.li> */}
        <animated.li style={linkAnimation}>
          <Link to="/Coros" className="link-nav">
            <i className="fa-solid fa-music icons-nav"></i> Cancionero
          </Link>
        </animated.li>
        <animated.li style={linkAnimation}>
          <Link to="/Ministerios" className="link-nav">
            <i className="fa-solid fa-calendar-days icons-nav"></i> Ministerios
          </Link>
        </animated.li>
        {/* <animated.li style={linkAnimation}>
          <Link to="/PedidosDeOracion" className="link-nav">
            <i className="fa-solid fa-hands-praying icons-nav"></i> Pedidos de
            Oración
          </Link>
        </animated.li> */}
        <animated.li style={linkAnimation}>
          <Link to="/Contacto" className="link-nav">
            <i className="fa-solid fa-user icons-nav"></i> Contacto
          </Link>
        </animated.li>
      </ul>
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        <i
          className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars menu-icon"}`}
        ></i>
      </div>
    </nav>
  );
}

export default Nav;
