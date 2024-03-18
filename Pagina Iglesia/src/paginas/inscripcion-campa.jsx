import './inscripcion-campa.css';
import { useState } from 'react';

import Footer from '../components/footer';

function Campamento() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [sexo, setSexo] = useState('');
    const [email, setEmail] = useState('');
    const [alergias, setAlergias] = useState('');
    const [detallesAlergias, setDetallesAlergias] = useState('');
    const [tomaMedicamentos, setTomaMedicamentos] = useState('');
    const [detallesMedicamentos, setDetallesMedicamentos] = useState('');
    const [necesitaDieta, setNecesitaDieta] = useState('');
    const [detallesDieta, setDetallesDieta] = useState('');
    const [formularioEnviado, setFormularioEnviado] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            nombre.trim() !== '' &&
            apellido.trim() !== '' &&
            edad.trim() !== '' &&
            fechaNacimiento.trim() !== '' &&
            sexo.trim() !== '' &&
            email.trim() !== '' &&
            alergias.trim() !== '' &&
            alergias === 'no' ? true : detallesAlergias.trim() !== '' &&
            tomaMedicamentos.trim() !== '' &&
            tomaMedicamentos === 'no' ? true : detallesMedicamentos.trim() !== '' &&
            necesitaDieta.trim() !== '' &&
            necesitaDieta === 'no' ? true : detallesDieta.trim() !== ''
        ) {
            const data = {
                nombre,
                apellido,
                edad,
                fechaNacimiento,
                sexo,
                email,
                alergias,
                detallesAlergias,
                tomaMedicamentos,
                detallesMedicamentos,
                necesitaDieta,
                detallesDieta
            };

            try {
                const response = await fetch('URL_DEL_BACKEND', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    setFormularioEnviado(true);
                } else {
                    throw new Error('Error al enviar el formulario');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Hubo un error al enviar el formulario. Por favor, inténtelo nuevamente. Si el error continúa, intentelo más tarde');
            }
        } else {
            alert("Por favor, completa todos los campos")
        }
    };

    const guardarDatosEnArchivo = (jsonData) => {
        // Crear un Blob con los datos JSON
        const blob = new Blob([jsonData], { type: 'application/json' });

        // Crear una URL para el Blob
        const url = URL.createObjectURL(blob);

        // Crear un enlace para descargar el archivo
        const a = document.createElement('a');
        a.href = url;
        a.download = 'formulario.json';

        // Simular un clic en el enlace para iniciar la descarga
        document.body.appendChild(a);
        a.click();

        // Liberar recursos
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
    };


    return (
        <>
            {!formularioEnviado ? (
                <div className="formulario-inscripcion">
                    <h1 className="titulo-formulario">Formulario de Inscripción al campamento</h1>
                    <form onSubmit={handleSubmit}>
                        <label className="label-input">Nombre:</label>
                        <input type="text" className="input-formulario" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                        <label className="label-input">Apellido:</label>
                        <input type="text" className="input-formulario" value={apellido} onChange={(e) => setApellido(e.target.value)} />

                        <label className="label-input">Edad:</label>
                        <input type="number" className="input-formulario" value={edad} onChange={(e) => setEdad(e.target.value)} />

                        <label className="label-input">Fecha de Nacimiento:</label>
                        <input type="date" className="input-formulario" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />

                        <label className="label-input">Sexo:</label>
                        <select className="input-formulario" value={sexo} onChange={(e) => setSexo(e.target.value)}>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </select>

                        <label className="label-input">Email:</label>
                        <input type="email" className="input-formulario" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <label className="label-input">Alergias:</label>
                        <div>
                            <label><input type="radio" name="alergias" value="si" onChange={(e) => setAlergias(e.target.value)} /> Sí</label>
                            <label><input type="radio" name="alergias" value="no" onChange={(e) => setAlergias(e.target.value)} /> No</label>
                        </div>

                        {alergias === 'si' && (
                            <>
                                <label htmlFor="">Detallar en caso de que sí:</label>
                                <input type="text" className="input-formulario" value={detallesAlergias} onChange={(e) => setDetallesAlergias(e.target.value)} />
                            </>
                        )}

                        <label className="label-input">¿Toma medicamentos?</label>
                        <div>
                            <label><input type="radio" name="medicamentos" value="si" onChange={(e) => setTomaMedicamentos(e.target.value)} /> Sí</label>
                            <label><input type="radio" name="medicamentos" value="no" onChange={(e) => setTomaMedicamentos(e.target.value)} /> No</label>
                        </div>

                        {tomaMedicamentos === 'si' && (
                            <>
                                <label htmlFor="">Detallar en caso de que sí:</label>
                                <input type="text" className="input-formulario" value={detallesMedicamentos} onChange={(e) => setDetallesMedicamentos(e.target.value)} />
                            </>
                        )}

                        <label className="label-input">¿Necesita dieta especial?</label>
                        <div>
                            <label><input type="radio" name="dieta" value="si" onChange={(e) => setNecesitaDieta(e.target.value)} /> Sí</label>
                            <label><input type="radio" name="dieta" value="no" onChange={(e) => setNecesitaDieta(e.target.value)} /> No</label>
                        </div>

                        {necesitaDieta === 'si' && (
                            <>
                                <label htmlFor="">Detallar en caso de que sí:</label>
                                <input type="text" className="input-formulario" value={detallesDieta} onChange={(e) => setDetallesDieta(e.target.value)} />
                            </>
                        )}

                        <button type="submit" className="boton-submit">Enviar</button>
                    </form>
                </div>
            ) : (
                <div className="formulario-enviado">
                    <p>Inscripción enviada correctamente. <br /> Le confirmaremos su inscripción al campamento enviándole un email dentro de las próximas 72hs junto con el reglamento del mismo. <br /> Muchas gracias.</p>
                </div>
            )}

			<Footer></Footer>
        </>
    )
}

export default Campamento;
