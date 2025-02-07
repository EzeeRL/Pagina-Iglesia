import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, ValidationError } from "@formspree/react";
import "./Campamento.css";
import es from 'date-fns/locale/es';

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
      nombre.trim() === "" ||
      apellido.trim() === "" ||
      edad === "" ||
      dni.trim() === "" ||
      fechaNacimiento === null ||
      telefono.trim() === "" ||
      (esMenor &&
        (nombreResponsable.trim() === "" || telefonoResponsable.trim() === ""))
    ) {
      alert("Debes completar todos los campos del formulario");
      return;
    }

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("apellido", apellido);
    formData.append("edad", edad);
    formData.append("dni", dni);
    formData.append("fechaNacimiento", fechaNacimiento.toLocaleDateString());
    formData.append("telefono", telefono);
    if (esMenor) {
      formData.append("nombre_responsable", nombreResponsable);
      formData.append("telefono_responsable", telefonoResponsable);
    }

    try {
      const response = await fetch("https://vtl-back.vercel.app/inscripcion", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
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
    <>
      <div className="registro-container">
        {formularioEnviado ? (
          <div className="registro-confirmacion">
            <h2>¡Formulario enviado correctamente!</h2>
            <p>Gracias por tu inscripción.</p>
            <p>Te esperamos el Viernes 26 en Vicente López 2113, Avellaneda</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="formulario-registro">
            <h1 className="titulo-registro"><u>Inscripción Campamento <br />2024</u></h1>
            <div className="campo-registro">
              <label htmlFor="nombre" className="label-campo">
                Nombre:
              </label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="input-campo"
              />
            </div>
            <div className="campo-registro">
              <label htmlFor="apellido" className="label-campo">
                Apellido:
              </label>
              <input
                type="text"
                id="apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                className="input-campo"
              />
            </div>
            <div className="campo-registro">
              <label htmlFor="edad" className="label-campo">
                Edad:
              </label>
              <input
                type="number"
                id="edad"
                value={edad}
                onChange={(e) => handleEdadChange(e)}
                className="input-campo"
              />
            </div>
            <div className="campo-registro">
              <label htmlFor="dni" className="label-campo">
                DNI:
              </label>
              <input
                type="text"
                id="dni"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                className="input-campo"
              />
            </div>
            <div className="campo-registro">
              <label htmlFor="fechaNacimiento" className="label-campo">
                Fecha de Nacimiento:
              </label>
              <DatePicker
                id="fechaNacimiento"
                selected={fechaNacimiento}
                onChange={(date) => setFechaNacimiento(date)}
                className="input-campo"
                dateFormat="dd/MM/yyyy"
                placeholderText="Dia/Mes/Año"
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
                locale={es}
              />
            </div>
            <div className="campo-registro">
              <label htmlFor="telefono" className="label-campo">
                Ingrese su número de celular:
              </label>
              <input
                type="text"
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="input-campo"
              />
            </div>
            {esMenor && (
              <div className="campo-registro">
                <label
                  htmlFor="nombreResponsable"
                  className="label-campo"
                >
                  Nombre del responsable o tutor:
                </label>
                <input
                  type="text"
                  id="nombreResponsable"
                  value={nombreResponsable}
                  onChange={(e) => setNombreResponsable(e.target.value)}
                  className="input-campo"
                />
                <label
                  htmlFor="telefonoResponsable"
                  className="label-campo"
                >
                  Celular del responsable o tutor:
                </label>
                <input
                  type="text"
                  id="telefonoResponsable"
                  value={telefonoResponsable}
                  onChange={(e) => setTelefonoResponsable(e.target.value)}
                  className="input-campo"
                />
              </div>
            )}
            <button type="submit" className="boton-enviar">
              Enviar
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default Campa;
