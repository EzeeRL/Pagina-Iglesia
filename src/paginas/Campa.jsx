import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import "./Campamento.css";

function Campa() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [dni, setDni] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState(null);
  const [telefono, setTelefono] = useState("");
  const [esMenor, setEsMenor] = useState(false);
  const [nombreResponsable, setNombreResponsable] = useState("");
  const [telefonoResponsable, setTelefonoResponsable] = useState("");
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !nombre.trim() ||
      !apellido.trim() ||
      !edad ||
      !dni.trim() ||
      !fechaNacimiento ||
      !telefono.trim() ||
      (esMenor && (!nombreResponsable.trim() || !telefonoResponsable.trim()))
    ) {
      alert("Debes completar todos los campos del formulario");
      return;
    }

    const formData = {
      nombre,
      apellido,
      edad: parseInt(edad, 10),
      dni,
      fechaNacimiento: fechaNacimiento.toISOString().split("T")[0], // Formato YYYY-MM-DD
      telefono,
      esMenor,
      nombreResponsable: esMenor ? nombreResponsable : null,
      telefonoResponsable: esMenor ? telefonoResponsable : null,
    };

    try {
      const response = await fetch("https://vtl-back.vercel.app/inscripcion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormularioEnviado(true);
      } else {
        alert(
          "Ocurrió un error al enviar el formulario. Por favor, inténtalo nuevamente más tarde."
        );
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert(
        "Ocurrió un error al enviar el formulario. Por favor, inténtalo nuevamente más tarde."
      );
    }
  };

  const handleEdadChange = (e) => {
    const nuevaEdad = e.target.value;
    setEdad(nuevaEdad);
    setEsMenor(parseInt(nuevaEdad, 10) < 18);
  };

  return (
    <div className="registro-container">
      {formularioEnviado ? (
        <div className="registro-confirmacion">
          <h2>¡Formulario enviado correctamente!</h2>
          <p>Gracias por tu inscripción.</p>
          <p>Te esperamos el Viernes 26 en Vicente López 2113, Avellaneda.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="formulario-registro">
          <h1 className="titulo-registro">
            <u>Inscripción Campamento 2024</u>
          </h1>
          <div className="campo-registro">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="input-campo"
              required
            />
          </div>
          <div className="campo-registro">
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="input-campo"
              required
            />
          </div>
          <div className="campo-registro">
            <label htmlFor="edad">Edad:</label>
            <input
              type="number"
              id="edad"
              value={edad}
              onChange={handleEdadChange}
              className="input-campo"
              required
            />
          </div>
          <div className="campo-registro">
            <label htmlFor="dni">DNI:</label>
            <input
              type="text"
              id="dni"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              className="input-campo"
              required
            />
          </div>
          <div className="campo-registro">
            <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
            <DatePicker
              id="fechaNacimiento"
              selected={fechaNacimiento}
              onChange={(date) => setFechaNacimiento(date)}
              className="input-campo"
              dateFormat="dd/MM/yyyy"
              placeholderText="Día/Mes/Año"
              showYearDropdown
              showMonthDropdown
              dropdownMode="select"
              locale={es}
              required
            />
          </div>
          <div className="campo-registro">
            <label htmlFor="telefono">Número de celular:</label>
            <input
              type="text"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="input-campo"
              required
            />
          </div>
          {esMenor && (
            <>
              <div className="campo-registro">
                <label htmlFor="nombreResponsable">
                  Nombre del responsable o tutor:
                </label>
                <input
                  type="text"
                  id="nombreResponsable"
                  value={nombreResponsable}
                  onChange={(e) => setNombreResponsable(e.target.value)}
                  className="input-campo"
                  required
                />
              </div>
              <div className="campo-registro">
                <label htmlFor="telefonoResponsable">
                  Celular del responsable o tutor:
                </label>
                <input
                  type="text"
                  id="telefonoResponsable"
                  value={telefonoResponsable}
                  onChange={(e) => setTelefonoResponsable(e.target.value)}
                  className="input-campo"
                  required
                />
              </div>
            </>
          )}
          <button type="submit" className="boton-enviar">
            Enviar
          </button>
        </form>
      )}
    </div>
  );
}

export default Campa;
