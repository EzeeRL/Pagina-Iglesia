import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./cancionero.css";

const Coros = () => {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [list, setList] = useState([]);
  const [letraCoro, setLetraCoro] = useState("");
  const [titulo, setTitulo] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
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
        const errorData = await response.text();

        setErrMesage(errorData);

        throw new Error(`Error en la solicitud: ${errorData}`);
      }

      const data = await response.json();

      setErr(false);
      setResultados(data);

      console.log(data);
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
    setResultados([]);
  };

  let versos = [];

  if (letraCoro) {
    versos = letraCoro.split("\n");
  }

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
    currentPage * itemsPerPage,
  );

  return (
    <div className="cancionero-page">
      {/* HERO */}

      <section className="cancionero-hero">
        <span className="cancionero-tag">CANCIONERO</span>

        <h1 className="titulo-cancionero">Coros</h1>

        <p className="cancionero-description">
          Encuentra rápidamente los coros, buscando por titulo o letra de la
          canción. <br />
          Por favor, no dejar espacios ni puntos al final de la búsqueda.
        </p>

        {/* SEARCH */}

        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Buscar coro..."
            value={busqueda}
            onChange={handleBusqueda}
            className="buscador"
          />

          <button type="submit" className="search-button">
            Buscar
          </button>
        </form>

        {/* TABS */}

        <div className="cancionero-tabs">
          <button className="tab-active">Coros</button>

          <button onClick={handleHimnos} className="tab-button">
            Himnos
          </button>
        </div>
      </section>

      {/* ERROR */}

      {err && <div className="error-box">{errMesage}</div>}

      {/* SONG VIEW */}

      {letraCoro ||
      (resultados.length > 0 &&
        typeof resultados[0] === "object" &&
        resultados[0] !== null) ? (
        <section className="song-view">
          <div className="song-header">
            <button onClick={volverAtras} className="back-button">
              ← Volver
            </button>

            <div className="font-size-control">
              <span>A-</span>

              <input
                type="range"
                min="10"
                max="50"
                value={tamañoLetra}
                onChange={manejarCambioTamaño}
              />

              <span>A+</span>
            </div>
          </div>

          {resultados.length > 0 ? (
            resultados.map((coro) => {
              const versosResultado = coro.letra.split("\n");

              return (
                <div key={coro.id}>
                  <h2 className="song-title">{coro.titulo}</h2>

                  <div className="song-lyrics">
                    {versosResultado.map((verso, index) => (
                      <p key={index} style={{ fontSize: `${tamañoLetra}px` }}>
                        {verso}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <>
              <h2 className="song-title">{titulo}</h2>

              <div className="song-lyrics">
                {versos.map((verso, index) => (
                  <p key={index} style={{ fontSize: `${tamañoLetra}px` }}>
                    {verso}
                  </p>
                ))}
              </div>
            </>
          )}
        </section>
      ) : (
        <>
          {/* LIST */}

          <section className="songs-list">
            {paginatedList.map((coro, index) => (
              <button
                key={index}
                onClick={() => handleLetra(coro)}
                className="song-item"
              >
                <div className="song-item-left">
                  <span className="song-number">
                    {String(
                      (currentPage - 1) * itemsPerPage + index + 1,
                    ).padStart(3, "0")}
                  </span>

                  <span className="song-name">{coro}</span>
                </div>

                <span className="song-arrow">→</span>
              </button>
            ))}
          </section>

          {/* PAGINATION */}

          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handleChangePage(pageNumber)}
                  className={
                    pageNumber === currentPage
                      ? "pagination-active"
                      : "pagination-button"
                  }
                >
                  {pageNumber}
                </button>
              ),
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Coros;
