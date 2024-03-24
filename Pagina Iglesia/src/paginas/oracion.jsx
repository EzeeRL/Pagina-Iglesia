import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./oracion.css"; // Asegúrate de tener tus estilos CSS en este archivo

function MotivosDeOracion() {
  const [state, handleSubmit] = useForm("xkndvqaa");
  const [pedidosOracion, setPedidosOracion] = useState([]);

  const handleFormSubmit = async (event) => {
    const formData = new FormData(event.target);
    const nuevoPedido = formData.get("message");

    setPedidosOracion([...pedidosOracion, nuevoPedido]);

    await handleSubmit(event);
  };

  if (state.succeeded) {
    return (
      <>
        <div className="container-agradecimiento">
          <p className="texto-agradecimiento">
            ¡Gracias por enviarnos tu motivo de oración! <br />
            Lo tendremos en cuenta y vamos a estar orando por vos.
            <i className="fa-solid fa-heart icon-corazon"></i>
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="titulo-oracion">Motivos de Oración</h1>

      <main>
        <h3 className="subtitulo">Podés dejarnos tu motivo de oración</h3>
        <form onSubmit={handleFormSubmit} className="formulario">
          <div className="campo">
            <label htmlFor="email" className="etiqueta">
              Ingresá tu nombre o email para que podamos conocerte.
            </label>
            <input
              id="email"
              type="text"
              name="name"
              placeholder="Ingresá tu nombre o email"
              required
              className="entrada"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="error"
            />
          </div>
          <div className="campo">
            <textarea
              id="message"
              name="message"
              placeholder="Escribí tu motivo de oración acá"
              required
              className="entrada mensaje"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="error"
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="boton"
          >
            Enviar
          </button>
        </form>

        {/* <div className="container-lista">
          <h1>Lista de pedidos de Oración</h1>
          <ul>
            {pedidosOracion.map((pedido, index) => (
              <li key={index}>{pedido}</li>
            ))}
          </ul>
        </div> */}
      </main>
    </>
  );
}

export default MotivosDeOracion;
