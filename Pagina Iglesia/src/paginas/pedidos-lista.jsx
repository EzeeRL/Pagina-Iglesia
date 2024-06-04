import React, { useEffect } from "react";
import "./pedidos-lista.css";
import Footer from "../components/footer";

import { Link, useLocation } from "react-router-dom";

function ListaDePedidos() {
  // JSON con los datos de los pedidos de oración
  const pedidosOracion = [
    {
      Nombre: "Carlos Laffitte",
      "Pedido de Oracion":
        "El compromiso en el servicio/comunión con Dios y con la obra local. Que haya entusiasmo por todas las actividades programadas, en especial con el próximo campamento Asociarnos con los más necesitados y con los que tienen dificultades para trasladarse a los cultos Orar por Rita y su familia; por Walter Curumilla, por Lila, Eze, Lidia; Laura; Amanda;. Por los ancianos de edad. Por el despeje definitivo del SUM. Que se pueda concretar la venta de los fierros apilados",
    },
    {
      Nombre: "Diana",
      "Pedido de Oracion": "Por ezequias y sus papás",
    },
    {
      Nombre: "Liliana Amenos",
      "Pedido de Oracion":
      "Por la actividad femenina a comenzar en mayo. que crezcamos en amor y conocimiento de Dios, y disfrutemos un hermoso tiempo de comunión fraternal. Que muchas más puedan sumarse este año"
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
              {pedido["Pedido de Oracion"]}
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
