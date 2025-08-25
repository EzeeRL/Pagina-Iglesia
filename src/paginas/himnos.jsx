import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./himnoss.css";

const Himnos = () => {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [list, setList] = useState([]);
  const [letraCoro, setLetraCoro] = useState("");
  const [titulo, setTitulo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [tamañoLetra, setTamañoLetra] = useState(16);
  const [versosRes, setVersosRes] = useState([]);
  const [err, setErr] = useState(false);
  const [errMesage, setErrMesage] = useState(false);
  const [titulo2, setTitulo2] = useState("");

  const itemsPerPage = 50;
  const navigate = useNavigate();

  const handleBusqueda = (event) => {
    setBusqueda(event.target.value);
  };

  // Función para eliminar duplicados basada en el ID
  const eliminarDuplicados = (array) => {
    const seen = new Set();
    return array.filter((item) => {
      // Verificamos si ya hemos visto este ID
      const duplicate = seen.has(item.ID);
      // Añadimos el ID al conjunto de "vistos"
      seen.add(item.ID);
      // Mantenemos solo los elementos no duplicados
      return !duplicate;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://vtl-back.vercel.app/totalHimnos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ termino: busqueda }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        setErrMesage(errorData);
        throw new Error(`Error en la solicitud: ${errorData}`);
      }

      const data = await response.json();
      console.log(data);
      setErr(false);

      // Eliminar duplicados antes de establecer los resultados
      const resultadosUnicos = eliminarDuplicados(data);

      if (resultadosUnicos.length > 0) {
        setTitulo2(resultadosUnicos[0].Titulo);
      }

      setResultados(resultadosUnicos);
    } catch (error) {
      setErr(true);
      console.error("Error al buscar himnos:", error.message);
    }
  };

  useEffect(() => {
    console.log(titulo2);
  }, [titulo2]);

  useEffect(() => {
    const fetchHimnos = async () => {
      try {
        const response = await fetch("https://vtl-back.vercel.app/listHimno");
        if (!response.ok) {
          throw new Error("Error al obtener los himnos");
        }
        const data = await response.json();
        setList(data);
        console.log(data);
      } catch (error) {
        console.error("Error al obtener los himnos:", error);
      }
    };

    fetchHimnos();
  }, []);

  const handleLetra = async (titulo) => {
    try {
      const response = await fetch("https://vtl-back.vercel.app/himno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ titulo }),
      });

      if (!response.ok) {
        throw new Error("Error al obtener la letra del himno");
      }

      const data = await response.json();
      setLetraCoro(data.letra);
      setTitulo(data.titulo);
    } catch (error) {
      console.error("Error al obtener la letra del himno:", error);
    }
  };

  const handleCoros = () => {
    navigate("/Coros");
  };

  const volverAtras = () => {
    setLetraCoro("");
    setResultados([]);
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
      setVersosRes(resultados[0].Letra.split("\n"));
    }
  }, [resultados]);

  const totalPages = Math.ceil(list.length / itemsPerPage);

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedList = list.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const manejarCambioTamaño = (event) => {
    setTamañoLetra(event.target.value);
  };

  return (
    <div className="container-cancionero">
      <h1 className="titulo-cancionero">Himnos</h1>
      <h3 className="subtitle">
        Por favor, no dejar espacios al final del texto de la búsqueda
      </h3>
      <div className="container-buscador">
        <form onSubmit={handleSubmit} className="form-buscador">
          <input
            type="text"
            className="buscador"
            placeholder=" Ingrese un himno"
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
        <button onClick={handleCoros} className="button-cambiar-himnos">
          Ver Coros
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
        <h1 className="title-lista-himnos">Lista de Himnos</h1>
      ) : null}
      <div className="resultados-busqueda">
        {resultados.length > 0 ? (
          resultados.map((coro) => (
            <div key={coro.ID} className="container-letra-himno">
              <button onClick={volverAtras} className="button-volver">
                <i className="fa-solid fa-circle-arrow-left icono-volver"></i>
              </button>
              <h2 className="titulo-himno">{coro.Titulo}</h2>
              <div className="letra-coro">
                {coro.Letra.split("\n").map((verso, index) => (
                  <p
                    key={`${coro.ID}-${index}`}
                    style={{ fontSize: `${tamañoLetra}px` }}
                  >
                    {verso}
                  </p>
                ))}
              </div>
            </div>
          ))
        ) : letraCoro ? (
          <div className="container-letra-himno">
            <button onClick={volverAtras} className="button-volver">
              <i className="fa-solid fa-circle-arrow-left icono-volver"></i>
            </button>
            <h2 className="titulo-himno">{titulo}</h2>
            <div className="letra-himno">
              {versos.map((verso, index) => (
                <p
                  key={`${titulo}-${index}`}
                  style={{ fontSize: `${tamañoLetra}px` }}
                >
                  {verso}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <div className="lista-himnos">
            <ol>
              {paginatedList.map((himno) => (
                <div key={himno.ID} className="resultado-himno">
                  <h2
                    onClick={() => handleLetra(himno.Titulo)}
                    className="himno"
                  >
                    {himno.ID}: {himno.Titulo}
                  </h2>
                </div>
              ))}
            </ol>
            <div className="container-pagination">
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
  );
};

export default Himnos;
