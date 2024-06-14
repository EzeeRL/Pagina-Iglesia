import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './footer.css';

function Footer() {
  // Configuración de la animación para los íconos de redes sociales
  const [iconsRef, iconsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconsSpring = useSpring({
    transform: iconsInView ? 'scale(1)' : 'scale(0.5)',
    config: { tension: 120, friction: 5 },
  });

  // Configuración de la animación para la imagen del logo
  const [logoRef, logoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const logoSpring = useSpring({
    transform: logoInView ? 'scale(1)' : 'scale(0.5)',
    config: { tension: 120, friction: 5 },
  });

  return (
    <>
      <footer id="footer-section">
        <div className="container-logo-iglesia-footer" ref={logoRef}>
          <animated.img
            src="logo/logo-nuevo.png"
            alt=""
            className="logo-iglesia"
            style={logoSpring}
          />
        </div>
        <h3 className="titulo-footer">
          ¡Seguinos y contactános en nuestras Redes!
        </h3>
        <div className="container-icons-redes" ref={iconsRef}>
          <animated.a
            href="https://www.facebook.com/iglesia.vicentelopez"
            target="_blank"
            style={iconsSpring}
          >
            <i className="fa-brands fa-facebook icons-redes-footer icon-facebook"></i>
          </animated.a>
          <animated.a
            href="https://www.youtube.com/c/IglesiaVicenteL%C3%B3pez"
            target="_blank"
            style={iconsSpring}
          >
            <i className="fa-brands fa-youtube icons-redes-footer icon-youtube"></i>
          </animated.a>
          <animated.a
            href="https://www.instagram.com/iglesia.vtl/"
            target="_blank"
            style={iconsSpring}
          >
            <i className="fa-brands fa-instagram icons-redes-footer icon-instagram"></i>
          </animated.a>
          <animated.a
            href="https://whatsapp.com/channel/0029VaaaXzfKQuJCYrzv540X"
            target="_blank"
            style={iconsSpring}
          >
            <i className="fa-brands fa-whatsapp icons-redes-footer icon-whatsapp"></i>
          </animated.a>
        </div>
        <p className="texto-spam">
          Escribinos a nuestro email:
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDfrnmWzFsRSnxKjkwCgtWsGTFbQhkThrNgcTwBFSfRNGXjMttHGvvTPRRLJQbdkPfJWJL"
            target="_blank"
            className="email"
          >
            {" "}
            icevtl@gmail.com
          </a>
          <br /><br />
          <Link to='/Problemas' className='report-problem'><u>Reportar un Problema sobre el sitio web</u></Link>
        </p>
        <p className="texto-derechos">
          © 2024 Iglesia VTL - Todos los Derechos Reservados
        </p>
      </footer>
    </>
  );
}

export default Footer;
