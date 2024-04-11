import React, { useEffect } from "react";
import "./pedidos-lista.css";
import Footer from "../components/footer";

import { Link, useLocation } from "react-router-dom";

function ListaDePedidos() {
  // JSON con los datos de los pedidos de oración
  const pedidosOracion = [
    {
      Nombre: "Ezequiel Ramos Lencina",
      "Pedido de Oración": "Por la familia de Leo y Lila que perdieron el bebé.",
    },
    {
      Nombre: "Diana",
      "Pedido de Oración": "Por la salud y la provisión de Gaby Stimolo.",
    },
    {
      Nombre: "Marcela Moledo",
      "Pedido de Oración": "El testimonio de vida de los hermanos que mañana pasarán por las aguas del bautismo, y que este testimonio impacte en cada hogar, lugar de estudio o trabajo.",
    },
    {
      Nombre: "Marcela Moledo",
      "Pedido de Oración":
        "Oremos por Moisés Escobar y Alan Núñez, ambos con dengue",
    },
    {
      Nombre: "Silvina y Alejo y Bauti",
      "Pedido de Oración":
        "Oración para bendecir nuestro Bautismo y para edificar amor en nuestros corazones juntos como cuerpo en nuestra Iglesia",
    },
    {
      Nombre: "Carlos Laffitte",
      "Pedido de Oración":
        "El compromiso en el servicio/comunión con Dios y con la obra local. Que haya entusiasmo por todas las actividades programadas, en especial con el próximo campamento Asociarnos con los más necesitados y con los que tienen dificultades para trasladarse a los cultos Orar por Rita y su familia; por Walter Curumilla, por Lila, Eze, Lidia; Laura; Amanda;. Por los ancianos de edad. Por el despeje definitivo del SUM. Que se pueda concretar la venta de los fierros apilados",
    },
    {
      Nombre: "Ezequiel Ramos Lencina",
      "Pedido de Oración":
        "Por la relación personal con Dios de cada uno de los hermanos de la iglesia y el grupo de Evangelismo",
    },
  ];

  // useEffect(() => {
  //   // Verificar si el navegador soporta notificaciones
  //   if ('Notification' in window) {
  //     // Pedir permiso para enviar notificaciones
  //     Notification.requestPermission();
  //   }
  // }, []);

  // const handleNotificationClick = () => {
  //   // Redirigir a la URL al hacer clic en la notificación
  //   window.open("https://icevtl.com/ListaDePedidos", "_blank");
  // };

  // const sendNotification = () => {
  //   // Verificar si el permiso para enviar notificaciones está concedido
  //   if (Notification.permission === 'granted') {
  //     // Crear y mostrar la notificación
  //     const notification = new Notification("Te recordamos que puedes enviarnos tu pedido de oración o enviar uno de otra persona. ¡Lo vamos a tener en cuenta!");
  //     notification.onclick = handleNotificationClick;
  //   }
  // };

  // useEffect(() => {
  //   // Enviar la notificación cada 10 segundos si el permiso está concedido
  //   const intervalId = setInterval(() => {
  //     sendNotification();
  //   }, 10000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <>
      <h1 className="titulo-lista">Lista de Pedidos de Oración</h1>
      <div className="container-lista">
        <ol className="ol-container-lista">
          {/* Mapeamos sobre los datos del JSON para renderizar cada pedido de oración */}
          {pedidosOracion.map((pedido, index) => (
            <li key={index}>
              {/* Mostramos el nombre y el pedido de oración */}
              <strong className="pedido-oracion">
                {pedido.Nombre}: <br />{" "}
              </strong>
              {pedido["Pedido de Oración"]}
            </li>
          ))}
        </ol>
      </div>

      <h2 className="texto-enviar-pedido">
        Podés enviarnos tu pedido de oración acá:
      </h2>
      <div className="container-button-redireccion">
        <Link to={"/PedidosDeOracion"} className="button-redireccion">
          Enviar Pedido de Oración
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ListaDePedidos;
