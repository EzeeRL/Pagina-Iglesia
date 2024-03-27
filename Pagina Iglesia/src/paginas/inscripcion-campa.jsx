import "./inscripcion-campa.css";
import { useState } from "react";

import Footer from "../components/footer";

function Campamento() {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mostrarCampoTutor, setMostrarCampoTutor] = useState(false);
    const [nombreTutor, setNombreTutor] = useState('');
    const [telefonoTutor, setTelefonoTutor] = useState('');
  
    const handleEdadChange = (e) => {
      setEdad(e.target.value);
      if (parseInt(e.target.value) < 18) {
        setMostrarCampoTutor(true);
      } else {
        setMostrarCampoTutor(false);
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('nombre', nombre);
      formData.append('edad', edad);
      formData.append('telefono', telefono);
      if (mostrarCampoTutor) {
        formData.append('nombre_tutor', nombreTutor);
        formData.append('telefono_tutor', telefonoTutor);
      }
  
      try {
        const response = await fetch('https://formspree.io/f/xkndvqaa', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
  
        if (response.ok) {
          alert('¡Inscripción exitosa! Nos pondremos en contacto contigo.');
          // Aquí puedes redirigir al usuario a una página de confirmación o realizar alguna otra acción
        } else {
          throw new Error('Hubo un error al enviar el formulario.');
        }
      } catch (error) {
        alert(error.message);
      }
    };

  return (
    <div className="container-form">
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </label>
      <br />
      <label>
        Edad:
        <input type="number" value={edad} onChange={handleEdadChange} required />
      </label>
      <br />
      <label>
        Teléfono:
        <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
      </label>
      <br />
      {mostrarCampoTutor && (
        <>
          <label>
            Nombre del tutor:
            <input type="text" value={nombreTutor} onChange={(e) => setNombreTutor(e.target.value)} required />
          </label>
          <br />
          <label>
            Teléfono del tutor:
            <input type="tel" value={telefonoTutor} onChange={(e) => setTelefonoTutor(e.target.value)} required />
          </label>
          <br />
        </>
      )}
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default Campamento;
