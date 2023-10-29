import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import React, { useEffect } from "react";
import axios from "axios";
import qs from "qs";

const Payment = () => {
  useEffect(() => {
    () => dispatch(resetCart());
    // Datos a enviar en la solicitud POST
    const postData = {
      token: "kl0oknftzozoknua",
      to: "+584144582250",
      body: `¡Hola! 😃

      ¡Gracias por elegir HackMall para tus compras virtuales! 🛍️
      
      Hemos procesado tu pago con éxito 🎉, y tus productos están en camino 🚚. ¿Listo para disfrutar de las mejores ofertas y experiencias de compra en el futuro? 💫
      
      Recuerda que en HackMall, la diversión y la innovación nunca terminan. 🚀 ¡Mantente atento a nuestras ofertas exclusivas y eventos emocionantes! 🌟
      
      Si necesitas alguna ayuda o tienes alguna pregunta, ¡no dudes en contactarnos! Estamos aquí para ti. 📲
      
      Gracias por ser parte de nuestra comunidad en el Mall del Futuro. ¡Disfruta de tu compra! 🌌💻🛒
      
      ¡Hasta la próxima! 👋`,
    };

    // Convierte los datos a formato x-www-form-urlencoded
    const data = qs.stringify(postData);

    // Configuración de la solicitud
    const config = {
      method: "post",
      url: "https://api.ultramsg.com/instance12739/messages/chat",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    // Realiza la solicitud utilizando Axios
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // Puedes agregar lógica adicional aquí para manejar la respuesta
      })
      .catch(function (error) {
        console.log(error);
        // Puedes agregar lógica adicional aquí para manejar errores
      });
  }, []); // El segundo argumento (un arreglo vacío) garantiza que el efecto se ejecute solo una vez, equivalente a componentDidMount en clases de componentes.

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Su pago ha sido satisfactoriamente!" />
      <div className="pb-10">
        <p>
          Siga disfrutando de la experiencia de comprar con el mall del futuro.
        </p>
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Explorar más
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
