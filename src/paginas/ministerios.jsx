import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "./ministerios.css";
import Footer from "../components/footer.jsx";

const Ministerios = () => {
  const tableAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 400,
  });

  const createOpacityAnimation = () => {
    const [ref, inView] = useInView({
      triggerOnce: false, // Permite que el observador se dispare cada vez que el elemento entra y sale de la vista
      threshold: 0.1,
    });

    const animation = useSpring({
      opacity: inView ? 1 : 0,
      config: { tension: 120, friction: 14 },
    });

    return { ref, style: animation };
  };

  const lunesAnim = createOpacityAnimation();
  const martesAnim = createOpacityAnimation();
  const miercolesAnim = createOpacityAnimation();
  const juevesAnim = createOpacityAnimation();
  const viernesAnim = createOpacityAnimation();
  const sabadoAnim = createOpacityAnimation();
  const domingoAnim = createOpacityAnimation();

  return (
    <>
      <div className="container">
        <div className="container-info-ministerios">
          <animated.h1 style={tableAnimation} className="titulo-ministerios">
            <b className="underline-titulo">Ministerios</b>
          </animated.h1>
          <p className="texto-informativo-ministerios texto-general">
            Acá vas a encontrar nuestras actividades organizadas en cada día de
            la semana. <br /> Al hacer clic en ellas podrás ver información más
            detallada acerca de cada una y fotos
          </p>
        </div>
        <animated.div
          className="container-lunes containers-dias"
          ref={lunesAnim.ref}
          style={lunesAnim.style}
        >
          <h1 className="dia-ministerios">
            <b className="underline-titulo">Lunes</b>
          </h1>
          <Link to="/AVI" className="links-ministerios">
            <u>Adicciones VS Vida 20:00hs</u>
          </Link>
        </animated.div>

        <animated.div
          className="container-martes containers-dias"
          ref={martesAnim.ref}
          style={martesAnim.style}
        >
          <h1 className="dia-ministerios martes">
            <b className="underline-titulo">Martes</b>
          </h1>
          <Link to="/ReunionFemenina" className="links-ministerios">
            <u>Reunión Femenina 18:00hs</u>
          </Link>
        </animated.div>

        <animated.div
          className="container-miercoles containers-dias"
          ref={miercolesAnim.ref}
          style={miercolesAnim.style}
        >
          <h1 className="dia-ministerios">
            <b className="underline-titulo">Miércoles</b>
          </h1>
          <Link to="/AVI" className="links-ministerios">
            <u>Adicciones VS Vida 20:00hs</u>
          </Link>
        </animated.div>

        <animated.div
          className="container-jueves containers-dias"
          ref={juevesAnim.ref}
          style={juevesAnim.style}
        >
          <h1 className="dia-ministerios jueves">
            <b className="underline-titulo ">Jueves</b>
          </h1>
          <Link to="/EspacioVaron" className="links-ministerios">
            <u>Espacio Varón 20:00hs</u>
          </Link>
        </animated.div>

        <animated.div
          className="container-viernes containers-dias"
          ref={viernesAnim.ref}
          style={viernesAnim.style}
        >
          <h1 className="dia-ministerios">
            <b className="underline-titulo">Viernes</b>
          </h1>
          <Link to="/Viernes" className="links-ministerios">
            <u>Reunión de Oración y Estudio 20:00hs</u>
          </Link>
        </animated.div>

        <animated.div
          className="container-sabado containers-dias"
          ref={sabadoAnim.ref}
          style={sabadoAnim.style}
        >
          <h1 className="dia-ministerios sabado">
            <b className="underline-titulo">Sábado</b>
          </h1>
          <Link to="/JovenesYAdolescentes" className="links-ministerios">
            <u>Actividad de Jóvenes y Adolescentes 19:00hs</u>
          </Link>
        </animated.div>

        <animated.div
          className="container-domingo containers-dias"
          ref={domingoAnim.ref}
          style={domingoAnim.style}
        >
          <h1 className="dia-ministerios domingo">
            <b className="underline-titulo">Domingo</b>
          </h1>
          <Link to="/Domingos" className="links-ministerios">
            <u className="links-domingo">
              Cena del Señor 9:30hs
              <br />
              Predicación el Evangelio 11:30hs
              <br />
              Escuela Bíblica Dominical 11:30hs
              <br />
              Actividad de Matrimonios +10 y -10. 14:00hs
              <br />
              Nunca más Solos
            </u>
          </Link>
        </animated.div>
      </div>
      <div className="container-footer-min">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Ministerios;
