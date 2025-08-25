import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./coross.css";

const Coros = () => {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [list, setList] = useState([]);
  const [letraCoro, setLetraCoro] = useState("");
  const [titulo, setTitulo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [versosRes, setVersosRes] = useState([]);
  const [err, setErr] = useState(false);
  const [errMesage, setErrMesage] = useState("");

  const itemsPerPage = 50;
  const navigate = useNavigate();

  const handleBusqueda = (event) => {
    setBusqueda(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://vtl-back.vercel.app/totalCoros", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ termino: busqueda }),
      });
      if (!response.ok) {
        const errorData = await response.text(); // Captura el mensaje de error del servidor
        setErrMesage(errorData);

        throw new Error(`Error en la solicitud: ${errorData}`);
      }

      const data = await response.json();
      setErr(false);
      setResultados(data);
    } catch (error) {
      setErr(true);
      console.error("Error al buscar coros:", error);
    }
  };

  useEffect(() => {
    const fetchCoros = async () => {
      try {
        const response = await fetch("https://vtl-back.vercel.app/listCoro");
        if (!response.ok) {
          throw new Error("Error al obtener los coros");
        }
        const data = await response.json();
        setList(data);
        console.log(data);
      } catch (error) {
        console.error("Error al obtener los coros:", error);
      }
    };

    fetchCoros();
  }, []);

  const handleLetra = async (titulo) => {
    try {
      const response = await fetch("https://vtl-back.vercel.app/coro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ titulo }),
      });

      if (!response.ok) {
        throw new Error("Error al obtener la letra del coro");
      }

      const data = await response.json();
      setLetraCoro(data.letra);
      setTitulo(data.titulo);
      console.log(data);
    } catch (error) {
      console.error("Error al obtener la letra del coro:", error);
    }
  };

  const handleHimnos = () => {
    navigate("/Himnos");
  };

  const volverAtras = () => {
    setLetraCoro("");
    setResultados("");
  };

  let versos = [];
  if (letraCoro) {
    versos = letraCoro.split("\n");
  }

  useEffect(() => {
    console.log(resultados);
    if (
      resultados &&
      resultados.length > 0 &&
      typeof resultados[0] === "object" &&
      resultados[0] !== null
    ) {
      setVersosRes(resultados[0].letra.split("\n"));
    }
  }, [resultados]);

  const [tamañoLetra, setTamañoLetra] = useState(16);

  const manejarCambioTamaño = (event) => {
    setTamañoLetra(event.target.value);
  };

  const totalPages = Math.ceil(list.length / itemsPerPage);

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedList = list.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="container-cancionero">
        <h1 className="titulo-cancionero">Coros</h1>
        <h3 className="subtitle">
          Por favor, no dejar espacios al final del texto de la búsqueda
        </h3>
        <div className="container-buscador">
          <form onSubmit={handleSubmit} className="form-buscador">
            <input
              type="text"
              className="buscador"
              placeholder=" Ingrese un coro"
              value={busqueda}
              onChange={handleBusqueda}
            />
            <button type="submit" className="button-submit">
              <i className="fa-solid fa-magnifying-glass icono-buscador"></i>
            </button>
          </form>
        </div>
        {err ? (
          <div className="container-error">
            <p className="message-error">{errMesage}</p>
          </div>
        ) : null}
        <div className="container-button-cambiar">
          <button onClick={handleHimnos} className="button-cambiar-coros">
            Ver Himnos
          </button>
        </div>
        {letraCoro ||
        (resultados.length > 0 &&
          typeof resultados[0] === "object" &&
          resultados[0] !== null) ? (
          <div className="container-px-letra">
            <p className="txt-tamaño-letra">Tamaño de la letra:</p>
            <input
              type="range"
              min="10"
              max="50"
              value={tamañoLetra}
              onChange={manejarCambioTamaño}
              className="slider-tamaño-letra"
            />
          </div>
        ) : null}
        {!letraCoro ? (
          <h1 className="title-lista-coros">Lista de Coros</h1>
        ) : null}

        <div className="resultados-busqueda">
          {resultados.length > 0 ? (
            resultados.map((coro) => (
              <div key={coro.id} className="container-letra-coro">
                <button onClick={volverAtras} className="button-volver">
                  <i className="fa-solid fa-circle-arrow-left icono-volver"></i>
                </button>
                <h2 className="titulo-coro">{coro.titulo}</h2>
                <div className="letra-coro">
                  {versosRes.map((verso, index) => (
                    <p key={index} style={{ fontSize: `${tamañoLetra}px` }}>
                      {verso}
                    </p>
                  ))}
                </div>
              </div>
            ))
          ) : letraCoro ? (
            <div className="container-letra-coro">
              <button onClick={volverAtras} className="button-volver">
                <i className="fa-solid fa-circle-arrow-left icono-volver"></i>
              </button>
              <h2 className="titulo-coro">{titulo}</h2>
              <div className="letra-coro">
                {versos.map((verso, index) => (
                  <p key={index} style={{ fontSize: `${tamañoLetra}px` }}>
                    {verso}
                  </p>
                ))}
              </div>
            </div>
          ) : (
            <div className="lista-coros">
              <ul>
                {paginatedList.map((coro, index) => (
                  <div key={index} className="container-resultado-coro">
                    <h2 onClick={() => handleLetra(coro)} className="coro">
                      {coro}
                    </h2>
                  </div>
                ))}
              </ul>
              <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => handleChangePage(pageNumber)}
                      className={
                        pageNumber === currentPage
                          ? "pagination-button-active"
                          : "pagination-button"
                      }
                    >
                      {pageNumber}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Coros;
