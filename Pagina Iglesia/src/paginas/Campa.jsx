import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, ValidationError } from "@formspree/react";
import "./Campamento.css";

import Footer from "../components/footer.jsx";

function Campa() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState(""); // Nuevo estado para el apellido
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
      apellido.trim() === "" || // Validar el apellido
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
    formData.append("apellido", apellido); // Agregar apellido al formulario
    formData.append("edad", edad);
    formData.append("dni", dni);
    formData.append("fechaNacimiento", fechaNacimiento.toLocaleDateString());
    formData.append("telefono", telefono);
    if (esMenor) {
      formData.append("nombre_responsable", nombreResponsable);
      formData.append("telefono_responsable", telefonoResponsable);
    }

    try {
      const response = await fetch("https://formspree.io/f/mzbnjgbb", {
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
      <div className="container-general-inscripcion">
        {formularioEnviado ? (
          <div className="container-enviado">
            <h2>¡Formulario enviado correctamente!</h2>
            <p>Gracias por tu inscripción.</p>
            <p>Te esperamos el Viernes 26 en Vicente López 2113, Avellaneda</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-inscripcion">
            <h1 className="titulo-campa"><u>Inscripcion Campamento <br />2024</u></h1>
            <div>
              <label htmlFor="nombre" className="label-inscripcion">
                Nombre:
              </label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="input-inscripcion"
              />
            </div>
            <div>
              <label htmlFor="apellido" className="label-inscripcion">
                Apellido:
              </label>
              <input
                type="text"
                id="apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)} // Manejar cambios en el apellido
                className="input-inscripcion"
              />
            </div>
            <div>
              <label htmlFor="edad" className="label-inscripcion">
                Edad:
              </label>
              <input
                type="number"
                id="edad"
                value={edad}
                onChange={(e) => handleEdadChange(e)}
                className="input-inscripcion"
              />
            </div>
            <div>
              <label htmlFor="dni" className="label-inscripcion">
                DNI:
              </label>
              <input
                type="text"
                id="dni"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                className="input-inscripcion"
              />
            </div>
            <div>
              <label htmlFor="fechaNacimiento" className="label-inscripcion">
                Fecha de Nacimiento:
              </label>
              <DatePicker
                id="fechaNacimiento"
                selected={fechaNacimiento}
                onChange={(date) => setFechaNacimiento(date)}
                className="input-inscripcion"
                dateFormat="dd/MM/yyyy"
                placeholderText="Dia/Mes/Año"
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="label-inscripcion">
                Ingrese su número de celular:
              </label>
              <input
                type="text"
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="input-inscripcion"
              />
            </div>
            {esMenor && (
              <div>
                <label
                  htmlFor="nombreResponsable"
                  className="label-inscripcion"
                >
                  Nombre del responsable o tutor:
                </label>
                <input
                  type="text"
                  id="nombreResponsable"
                  value={nombreResponsable}
                  onChange={(e) => setNombreResponsable(e.target.value)}
                  className="input-inscripcion"
                />
                <label
                  htmlFor="telefonoResponsable"
                  className="label-inscripcion"
                >
                  Celular del responsable o tutor:
                </label>
                <input
                  type="text"
                  id="telefonoResponsable"
                  value={telefonoResponsable}
                  onChange={(e) => setTelefonoResponsable(e.target.value)}
                  className="input-inscripcion"
                  placeholder="Ej: +54 9 11 1234-5678"
                />
              </div>
            )}
            <button type="submit" className="button-submit-inscripcion">
              Enviar
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default Campa;
