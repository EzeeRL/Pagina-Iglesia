import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./problemas.css";
import Footer from "../components/footer";

function reportProblems() {
  const [state, handleSubmit] = useForm("xdoqvrnj");

  if (state.succeeded) {
    return (
      <div className="container-agradecimiento">
        <p className="texto-agradecimiento">
          ¡Gracias por informarnos sobre el problema! <br />
          Lo revisaremos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="title-problemas">Reportar Problemas</h1>
      <main className="main-problemas">
        <h3 className="subtitulo">
          Por favor, describe el problema o error que encontraste
        </h3>
        <form onSubmit={handleSubmit} className="formulario">
          <div className="campo">
            <textarea
              id="message"
              name="message"
              placeholder="Escribe el problema o error acá"
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
            className="button-problemas"
          >
            Enviar
          </button>
        </form>
      </main>
    </div>
  );
}

export default reportProblems;
