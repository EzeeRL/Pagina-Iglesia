import "./ministerios.css";
import Footer from "../components/footer.jsx";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const Ministerios = () => {
  const tableAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 200,
  });

  return (
    <>
      <div className="container">
        <div className="container-info-ministerios">
          <animated.h1 style={tableAnimation} className="titulo-ministerios">
            <b className="underline-titulo">Ministerios</b>
          </animated.h1>
          <p className="texto-informativo-ministerios texto-general">
            Acá vas a encontrar nuestras actividades organizadas en cada día de la
            semana. <br /> Al hacer clic en ellas podrás ver información más
            detallada acerca de cada una y fotos
          </p>
        </div>

        <div className="container-lunes">
          <h1 className="dia-ministerios">
            <b className="underline-titulo">Lunes:</b>
          </h1>
          <Link to="/AVI" className="links-ministerios">
            <u>Adicciones VS Vida 20:00hs</u>
          </Link>
        </div>

        <div className="container-martes">
          <h1 className="dia-ministerios martes">
            <b className="underline-titulo">Martes:</b>
          </h1>
          <Link to="/ReunionFemenina" className="links-ministerios">
            <u>Reunión Femenina 18:00hs</u>
          </Link>
        </div>

        <div className="container-miercoles">
          <h1 className="dia-ministerios">
            <b className="underline-titulo">Miércoles:</b>
          </h1>
          <Link to="/AVI" className="links-ministerios">
            <u>Adicciones VS Vida 20:00hs</u>
          </Link>
        </div>

        <div className="container-jueves">
          <h1 className="dia-ministerios jueves">
            <b className="underline-titulo ">Jueves:</b>
          </h1>
          <Link to="/EspacioVaron" className="links-ministerios">
            <u>Espacio Varón 20:00hs</u>
          </Link>
        </div>

        <div className="container-viernes">
          <h1 className="dia-ministerios">
            <b className="underline-titulo">Viernes:</b>
          </h1>
          <Link to="/Viernes" className="links-ministerios">
            <u>Reunión de Oración y Estudio 20:00hs</u>
          </Link>
        </div>

        <div className="container-sabado">
          <h1 className="dia-ministerios sabado">
            <b className="underline-titulo">Sábado:</b>
          </h1>
          <Link to="/JovenesYAdolescentes" className="links-ministerios">
            <u>Actividad de Jóvenes y Adolescnetes 19:00hs</u>
          </Link>
        </div>

        <div className="container-domingo">
          <h1 className="dia-ministerios">
            <b className="underline-titulo">Domingo:</b>
          </h1>
          <Link to="/Domingos" className="links-ministerios">
            <u className="links-domingo">Cena del Señor 10:00hs
            <br />
            Predicación el Evangelio 11:30hs
            <br />
            Escuela Bíblica Dominical 11:30hs
            <br />
            Actividad de Matrimonios +10 y -10. 14:00hs
            <br />
            Nunca más Solos</u>
          </Link>
        </div>
      </div>
      <div className="container-footer-min">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Ministerios;
