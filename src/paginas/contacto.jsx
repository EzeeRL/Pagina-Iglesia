import "./contacto.css";
import Footer from "../components/footer.jsx";

import { useSpring, animated } from "react-spring";

// const containerRef = useRef(null);

function Contacto() {
  const mapsAnimation = useSpring({
    opacity: 1,
    transform: "scale(1.0)",
    config: { tension: 200, friction: 20 },
    from: { opacity: 0, transform: "scale(0.6)" },
  });
  return (
    <>
      <div className="container-contacto">
        <h1 className="titulo-contacto">Contacto</h1>
        <h2 className="txt-ubi">
          Nos ubicamos en la calle Vicente López 2113, Sarandí.
        </h2>
        <div className="container-map">
          <animated.iframe
            src="https://www.google.com/maps/embed?pb=!3m2!1ses!2sar!4v1708718562628!5m2!1ses!2sar!6m8!1m7!1sTJqX5QQXjv_3I1FFrdlYVQ!2m2!1d-34.66927629370714!2d-58.34771169505758!3f247.95233143999894!4f12.885079741660363!5f0.7820865974627469"
            className="mapa"
            style={mapsAnimation}
          ></animated.iframe>
          <animated.iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1327.552102751343!2d-58.34890559794034!3d-34.669131113851826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33371e5a6a455%3A0x191540cece4dc22!2sIglesia%20Cristiana%20Evangelica!5e0!3m2!1ses!2sar!4v1710434434486!5m2!1ses!2sar"
            className="mapa"
            style={mapsAnimation}
          ></animated.iframe>
        </div>
        <p className="subtitulo-contacto">
          También nos podes escribir a nuestro gmail haciendo click acá:
        </p>
        <div className="container-redes-contacto">
          <p className="name-redes-contacto">
            <img
              class="gb_Mc"
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
              srcset="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png 2x "
              alt=""
              aria-hidden="true"
              role="presentation"
            ></img>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDfrnmWzFsRSnxKjkwCgtWsGTFbQhkThrNgcTwBFSfRNGXjMttHGvvTPRRLJQbdkPfJWJL"
              className="email-contacto"
              target="_blank"
            >
              :icevtl@gmail.com
            </a>
          </p>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Contacto;
