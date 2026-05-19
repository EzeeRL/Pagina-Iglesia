import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./cancionero.css";

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
  const [errMesage, setErrMesage] = useState("");
  const [titulo2, setTitulo2] = useState("");
  const [todosLosHimnos, setTodosLosHimnos] = useState([]); // Nuevo estado para guardar todos los himnos

  const itemsPerPage = 50;
  const navigate = useNavigate();

  // Función para normalizar texto (quitar tildes y convertir a minúsculas)
  const normalizarTexto = (texto) => {
    if (!texto) return "";
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const handleBusqueda = (event) => {
    setBusqueda(event.target.value);
  };

  const eliminarDuplicados = (array) => {
    const seen = new Set();

    return array.filter((item) => {
      const duplicate = seen.has(item.ID);
      seen.add(item.ID);
      return !duplicate;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!busqueda.trim()) {
      setErrMesage("Por favor, ingrese un término de búsqueda");
      setErr(true);
      return;
    }

    try {
      // Normalizar el término de búsqueda
      const busquedaNormalizada = normalizarTexto(busqueda);

      // Buscar localmente en todos los himnos
      const resultadosBusqueda = todosLosHimnos.filter((himno) => {
        const tituloNormalizado = normalizarTexto(himno.Titulo);
        const letraNormalizada = normalizarTexto(himno.Letra || "");

        // Buscar coincidencias en título o letra
        return (
          tituloNormalizado.includes(busquedaNormalizada) ||
          letraNormalizada.includes(busquedaNormalizada)
        );
      });

      setErr(false);

      const resultadosUnicos = eliminarDuplicados(resultadosBusqueda);

      if (resultadosUnicos.length > 0) {
        setTitulo2(resultadosUnicos[0].Titulo);
      } else {
        setErrMesage("No se encontraron coincidencias");
        setErr(true);
      }

      setResultados(resultadosUnicos);
    } catch (error) {
      setErr(true);
      setErrMesage("Error al buscar himnos");
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchHimnos = async () => {
      try {
        const response = await fetch("https://vtl-back.vercel.app/listHimno");

        if (!response.ok) {
          throw new Error("Error al obtener himnos");
        }

        const data = await response.json();

        // Cargar todos los himnos completos (con letra) para búsqueda local
        const himnosCompletos = await Promise.all(
          data.map(async (himno) => {
            try {
              const responseLetra = await fetch(
                "https://vtl-back.vercel.app/himno",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ titulo: himno.Titulo }),
                },
              );

              if (responseLetra.ok) {
                const dataLetra = await responseLetra.json();
                return {
                  ...himno,
                  Letra: dataLetra.letra,
                };
              }
              return himno;
            } catch (error) {
              console.error(
                `Error al obtener letra de ${himno.Titulo}:`,
                error,
              );
              return himno;
            }
          }),
        );

        setTodosLosHimnos(himnosCompletos);
        setList(data);
      } catch (error) {
        console.error(error);
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
        throw new Error("Error al obtener himno");
      }

      const data = await response.json();

      setLetraCoro(data.letra);
      setTitulo(data.titulo);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCoros = () => {
    navigate("/Coros");
  };

  const volverAtras = () => {
    setLetraCoro("");
    setResultados([]);
    setErr(false);
  };

  let versos = [];

  if (letraCoro) {
    versos = letraCoro.split("\n");
  }

  useEffect(() => {
    if (
      resultados &&
      resultados.length > 0 &&
      typeof resultados[0] === "object" &&
      resultados[0] !== null
    ) {
      setVersosRes(resultados[0].Letra ? resultados[0].Letra.split("\n") : []);
    }
  }, [resultados]);

  const totalPages = Math.ceil(list.length / itemsPerPage);

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedList = list.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const manejarCambioTamaño = (event) => {
    setTamañoLetra(event.target.value);
  };

  return (
    <div className="cancionero-page">
      {/* HERO */}

      <section className="cancionero-hero">
        <span className="cancionero-tag">CANCIONERO</span>

        <h1 className="titulo-cancionero">Himnos</h1>

        <p className="cancionero-description">
          Encuentra rápidamente los himnos, buscando por titulo o letra de la
          canción. <br /> Por favor, no dejar espacios ni puntos al final de la
          búsqueda.
        </p>

        {/* SEARCH */}

        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Buscar himno..."
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
          <button onClick={handleCoros} className="tab-button">
            Coros
          </button>

          <button className="tab-active">Himnos</button>
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
            resultados.map((coro) => (
              <div key={coro.ID}>
                <h2 className="song-title">
                  {coro.ID} · {coro.Titulo}
                </h2>

                <div className="song-lyrics">
                  {(coro.Letra || "").split("\n").map((verso, index) => (
                    <p
                      key={`${coro.ID}-${index}`}
                      style={{
                        fontSize: `${tamañoLetra}px`,
                      }}
                    >
                      {verso}
                    </p>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <>
              <h2 className="song-title">{titulo}</h2>

              <div className="song-lyrics">
                {versos.map((verso, index) => (
                  <p
                    key={`${titulo}-${index}`}
                    style={{
                      fontSize: `${tamañoLetra}px`,
                    }}
                  >
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
            {paginatedList.map((himno) => (
              <button
                key={himno.ID}
                onClick={() => handleLetra(himno.Titulo)}
                className="song-item"
              >
                <div className="song-item-left">
                  <span className="song-number">
                    {String(himno.ID).padStart(3, "0")}
                  </span>

                  <span className="song-name">{himno.Titulo}</span>
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

export default Himnos;
