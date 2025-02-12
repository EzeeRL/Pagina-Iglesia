import { useState, useEffect } from "react";
import "./anotados-campa.css";

const CampamentoLista = () => {
  const [personas, setPersonas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [idAEliminar, setIdAEliminar] = useState(null);
  const [filtroEdad, setFiltroEdad] = useState("todos");
  const [edadMin, setEdadMin] = useState("");
  const [edadMax, setEdadMax] = useState("");
  const [busqueda, setBusqueda] = useState("");

  const fetchPersonas = () => {
    fetch("https://vtl-back.vercel.app/inscripcion")
      .then((response) => response.json())
      .then((data) => setPersonas(data));
  };

  useEffect(() => {
    fetchPersonas();
  }, []);

  const actualizarPago = async (id, estadoPago) => {
    try {
      const response = await fetch(
        `https://vtl-back.vercel.app/inscripcion/${id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ estadoPago }),
        }
      );
      if (response.ok) {
        fetchPersonas();
      }
    } catch (error) {
      console.error("Error al actualizar el estado de pago", error);
    }
  };

  const confirmarEliminacion = (id) => {
    setIdAEliminar(id);
    setModalVisible(true);
  };

  const eliminarInscripcionConfirmado = async () => {
    if (!idAEliminar) return;
    try {
      const response = await fetch(
        `https://vtl-back.vercel.app/inscripcion/${idAEliminar}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        fetchPersonas();
      }
    } catch (error) {
      console.error("Error al eliminar la inscripción", error);
    }
    setModalVisible(false);
    setIdAEliminar(null);
  };

  // 🔹 Filtro por edad
  const personasFiltradas = personas.filter((persona) => {
    if (filtroEdad === "menores") return persona.edad < 18;
    if (filtroEdad === "mayores") return persona.edad >= 18;
    if (filtroEdad === "rango" && edadMin && edadMax) {
      return persona.edad >= edadMin && persona.edad <= edadMax;
    }
    return true;
  });

  // 🔹 Filtro por búsqueda (nombre o apellido)
  const personasFiltradasYBuscadas = personasFiltradas.filter((persona) =>
    `${persona.nombre} ${persona.apellido}`
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Lista de Inscritos al Campamento</h1>

      {/* 🔹 Buscador */}
      <div>
        <input
          type="text"
          placeholder="Buscar por nombre o apellido..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="search-input"
        />
      </div>

      {/* 🔹 Filtros */}
      <div className="filtros">
        <h2 className="title-filtros">Filtros</h2>
        <label>
          <input
            type="radio"
            value="todos"
            checked={filtroEdad === "todos"}
            onChange={() => setFiltroEdad("todos")}
          />
          Mostrar todos
        </label>
        <label>
          <input
            type="radio"
            value="menores"
            checked={filtroEdad === "menores"}
            onChange={() => setFiltroEdad("menores")}
          />
          Solo menores de edad
        </label>
        <label>
          <input
            type="radio"
            value="mayores"
            checked={filtroEdad === "mayores"}
            onChange={() => setFiltroEdad("mayores")}
          />
          Solo mayores de edad
        </label>
        <label>
          <input
            type="radio"
            value="rango"
            checked={filtroEdad === "rango"}
            onChange={() => setFiltroEdad("rango")}
          />
          Rango de edad:
        </label>
        {filtroEdad === "rango" && (
          <div className="rango-edad">
            <input
              type="number"
              placeholder="Edad mínima"
              value={edadMin}
              onChange={(e) => setEdadMin(e.target.value)}
              className="inputs-filtros"
            />
            <input
              type="number"
              placeholder="Edad máxima"
              value={edadMax}
              onChange={(e) => setEdadMax(e.target.value)}
              className="inputs-filtros"
            />
          </div>
        )}
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
              <th>Teléfono</th>
              <th>Menor de Edad</th>
              <th>Adulto Responsable</th>
              <th>Teléfono Responsable</th>
              <th>Pago</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {personasFiltradasYBuscadas.map((persona, index) => (
              <tr key={index}>
                <td>{persona.nombre}</td>
                <td>{persona.apellido}</td>
                <td>{persona.edad}</td>
                <td>{persona.telefono}</td>
                <td>{persona.edad < 18 ? "Sí" : "No"}</td>
                <td>{persona.edad < 18 ? persona.adultoResponsable : "-"}</td>
                <td>{persona.edad < 18 ? persona.telefonoResponsable : "-"}</td>
                <td>{persona.estadoPago}</td>
                <td className="container-buttons-acciones">
                  <button
                    onClick={() => actualizarPago(persona.id, "completo")}
                    className="buttons-acciones"
                  >
                    Pagado
                  </button>
                  <button
                    onClick={() => actualizarPago(persona.id, "parcial")}
                    className="buttons-acciones"
                  >
                    Pago parcial
                  </button>
                  <button
                    onClick={() => actualizarPago(persona.id, "pendiente")}
                    className="buttons-acciones"
                  >
                    No pagado
                  </button>
                  <button
                    onClick={() => confirmarEliminacion(persona.id)}
                    className="buttons-acciones eliminar"
                  >
                    Eliminar Inscripción
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h3>¿Estás seguro de que deseas eliminar esta inscripción?</h3>
            <div className="modal-buttons">
              <button
                onClick={eliminarInscripcionConfirmado}
                className="confirmar"
              >
                Sí, eliminar
              </button>
              <button
                onClick={() => setModalVisible(false)}
                className="cancelar"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampamentoLista;
