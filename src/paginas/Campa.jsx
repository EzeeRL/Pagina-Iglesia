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
  const [iglesia, setIglesia] = useState(""); // Nuevo estado para la iglesia
  const [quienInvito, setQuienInvito] = useState(""); // Nuevo estado para quien invitó
  const [mostrarCampoInvitacion, setMostrarCampoInvitacion] = useState(false); // Estado para mostrar/ocultar el campo adicional

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !nombre.trim() ||
      !apellido.trim() ||
      !edad ||
      !dni.trim() ||
      !fechaNacimiento ||
      !telefono.trim() ||
      !iglesia ||
      (esMenor && (!nombreResponsable.trim() || !telefonoResponsable.trim())) ||
      (iglesia === "Otra" && !quienInvito.trim())
    ) {
      alert("Debes completar todos los campos del formulario");
      return;
    }

    const formData = {
      nombre,
      apellido,
      edad: parseInt(edad, 10),
      dni,
      fechaNacimiento: fechaNacimiento.toISOString().split("T")[0],
      telefono,
      esMenor,
      nombreResponsable: esMenor ? nombreResponsable : null,
      telefonoResponsable: esMenor ? telefonoResponsable : null,
      iglesia,
      quienInvito: iglesia === "Otra" ? quienInvito : null,
    };

    const makeAPIData = {
      Nombre: formData.nombre,
      Apellido: formData.apellido,
      DNI: formData.dni,
      "Fecha de Nacimiento": formData.fechaNacimiento,
      Telefono: formData.telefono,
      "Telefono del Responsable": formData.telefonoResponsable || "",
      "¿Quién lo Invitó?": formData.quienInvito || "",
      "Estado de Pago": "Pendiente", // Puedes ajustar este valor según corresponda
      edad: parseInt(edad, 10),
      iglesia,
    };

    try {
      const [response1, response2] = await Promise.all([
        fetch("https://vtl-back.vercel.app/inscripcion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }),
        fetch("https://hook.us2.make.com/darva34iuoqp85wmosd8pz7h6xpnv0ln", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(makeAPIData),
        }),
      ]);

      if (response1.ok && response2.ok) {
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

  const handleIglesiaChange = (e) => {
    const valorIglesia = e.target.value;
    setIglesia(valorIglesia);
    setMostrarCampoInvitacion(valorIglesia === "Otra"); // Mostrar el campo adicional si se selecciona "Otra"
  };

  return (
    <div className="registro-container">
      {formularioEnviado ? (
        <div className="registro-confirmacion">
          <h2>¡Formulario enviado correctamente!</h2>
          <p>Gracias por tu inscripción.</p>
          <p>
            Te esperamos el Viernes 28 de Marzo en Vicente López 2113
            Avellaneda, a las 19hs.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="formulario-registro">
          <h1 className="titulo-registro">
            <u>Inscripción Campamento 2025</u>
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
          <div className="campo-registro">
            <label htmlFor="iglesia">¿De qué Iglesia sos?</label>
            <select
              id="iglesia"
              value={iglesia}
              onChange={handleIglesiaChange}
              className="input-campo"
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Vicente López">Vicente López</option>
              <option value="Otra">Otra, específicar cual</option>
            </select>
          </div>
          {mostrarCampoInvitacion && (
            <div className="campo-registro">
              <label htmlFor="quienInvito">
                ¿De qué Iglesia sos y quién te invitó?
              </label>
              <input
                type="text"
                id="quienInvito"
                value={quienInvito}
                onChange={(e) => setQuienInvito(e.target.value)}
                className="input-campo"
                required
              />
            </div>
          )}
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
