import React, { useState } from "react";

function AndresCampa() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const generarDNI = () =>
    Math.floor(10000000 + Math.random() * 90000000).toString();
  const generarTelefono = () =>
    "11" + Math.floor(10000000 + Math.random() * 90000000).toString();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre.trim() || !apellido.trim()) {
      alert("Debes completar todos los campos del formulario");
      return;
    }

    const formData = {
      nombre,
      apellido,
      edad: 18, // Valor fijo
      dni: generarDNI(), // Generar un DNI único
      fechaNacimiento: "2006-01-01", // Valor fijo (YYYY-MM-DD)
      telefono: generarTelefono(), // Generar un teléfono único
      esMenor: false, // Valor fijo
      nombreResponsable: null, // No se envía si no es menor
      telefonoResponsable: null, // No se envía si no es menor
      iglesia: "VTL", // Valor fijo
      quienInvito: "...", // Valor fijo
      estadoPago: "pendiente", // Valor fijo
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
          "Ocurrió un error al enviar el formulario. Inténtalo nuevamente."
        );
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Ocurrió un error al enviar el formulario. Inténtalo nuevamente.");
    }
  };

  return (
    <div className="registro-container">
      {formularioEnviado ? (
        <div className="registro-confirmacion">
          <h2>Formulario enviado correctamente</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="formulario-registro">
          <h1 className="titulo-registro">
            <u>Inscripción Andres Campamento 2025</u>
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
          <button type="submit" className="boton-enviar">
            Enviar
          </button>
        </form>
      )}
    </div>
  );
}

export default AndresCampa;
