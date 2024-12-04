import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "./footer.css";

function Footer() {
  // Configuración de la animación para los íconos de redes sociales
  // const [iconsRef, iconsInView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  // const iconsSpring = useSpring({
  //   transform: iconsInView ? "scale(1)" : "scale(0.5)",
  //   config: { tension: 120, friction: 5 },
  // });

  // Configuración de la animación para la imagen del logo
  const [logoRef, logoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const logoSpring = useSpring({
    transform: logoInView ? "scale(1)" : "scale(0.5)",
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
        {/* <div classNameName="container-icons-redes" ref={iconsRef}>
          <animated.a
            href="https://www.facebook.com/iglesia.vicentelopez"
            target="_blank"
            style={iconsSpring}
          >
            <i classNameName="fa-brands fa-facebook icons-redes-footer icon-facebook"></i>
          </animated.a>
          <animated.a
            href="https://www.youtube.com/c/IglesiaVicenteL%C3%B3pez"
            target="_blank"
            style={iconsSpring}
          >
            <i classNameName="fa-brands fa-youtube icons-redes-footer icon-youtube"></i>
          </animated.a>
          <animated.a
            href="https://www.instagram.com/iglesia.vtl/"
            target="_blank"
            style={iconsSpring}
            classNameName="container-icon-instagram"
          >
            <i classNameName="fa-brands fa-instagram icons-redes-footer icon-instagram"></i>
          </animated.a>
          <animated.a
            href="https://whatsapp.com/channel/0029VaaaXzfKQuJCYrzv540X"
            target="_blank"
            style={iconsSpring}
            classNameName="container-icon-whatsapp"
          >
            <i classNameName="fa-brands fa-whatsapp icons-redes-footer icon-whatsapp"></i>
          </animated.a>
        </div> */}
        <div className="container-general-animation-footer">
          <div className="container-animation-footer">
            <img
              src="footer/whatsapp-logo.png"
              alt=""
              className="img-redes-footer"
            />
            <div className="container-card-hover container-whatsapp">
              <div className="container-1">
                <img
                  src="footer/whatsapp-logo.png"
                  alt=""
                  className="img-card-hover"
                />
                <h2 className="red-social">WhatsApp</h2>
              </div>
              <div className="container-info-card">
                <h3 className="user-name">@ICE VTL</h3>
                <h3 className="followers">53 Seguidores</h3>
              </div>
              <div className="container-link-card">
                <a
                  href="https://whatsapp.com/channel/0029VaaaXzfKQuJCYrzv540X"
                  target="_blank"
                  className="link-card"
                >
                  Ver Canal
                </a>
              </div>
            </div>
          </div>

          <div className="container-animation-footer">
            <img
              src="footer/logo-ig.png"
              alt=""
              className="img-redes-footer"
            />
            <div className="container-card-hover container-instagram">
              <div className="container-1">
                <img
                  src="footer/logo-ig.png"
                  alt=""
                  className="img-card-hover"
                />
                <h2 className="red-social">Instagram</h2>
              </div>
              <div className="container-info-card">
                <h3 className="user-name">@iglesia.vtl</h3>
                <h3 className="followers">450+ Seguidores</h3>
              </div>
              <div className="container-link-card">
                <a
                  href="https://www.instagram.com/iglesia.vtl/"
                  target="_blank"
                  className="link-card"
                >
                  Ver Cuenta
                </a>
              </div>
            </div>
          </div>

          <div className="container-animation-footer">
            <img
              src="footer/logo-facebook.png"
              alt=""
              className="img-redes-footer"
            />
            <div className="container-card-hover container-facebook">
              <div className="container-1">
                <img
                  src="footer/logo-facebook.png"
                  alt=""
                  className="img-card-hover"
                />
                <h2 className="red-social">Facebook</h2>
              </div>
              <div className="container-info-card">
                <h3 className="user-name">@Iglesia Vicente Lopez</h3>
                <h3 className="followers">150+ Seguidores</h3>
              </div>
              <div className="container-link-card">
                <a
                  href="https://www.facebook.com/iglesia.vicentelopez"
                  target="_blank"
                  className="link-card"
                >
                  Ver Cuenta
                </a>
              </div>
            </div>
          </div>
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
          <br />
          <br />
          <Link to="/Problemas" className="report-problem">
            <u>Reportar un Problema sobre el sitio web</u>
          </Link>
        </p>
        <p className="texto-derechos">
          © 2024 Iglesia VTL - Todos los Derechos Reservados
        </p>
      </footer>
    </>
  );
}

export default Footer;
