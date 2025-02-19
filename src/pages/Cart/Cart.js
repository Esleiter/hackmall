import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "./ItemCard";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(2);
    } else if (totalAmt <= 400) {
      setShippingCharge(4);
    } else if (totalAmt > 401) {
      setShippingCharge(5);
    }
  }, [totalAmt, shippingCharge]);

  useEffect(() => {
    let totalAmtm = (totalAmt + shippingCharge) * 100;
    // Agrega el script de Payphone directamente
    const script = document.createElement("script");
    script.text = `
      function loadPay() {
        function generateUniqueID() {
          const timestamp = new Date().getTime();
          const randomValue = Math.random() * 1000000; // Puedes ajustar el valor máximo según tus necesidades
          const uniqueID = randomValue;
          return uniqueID;
        }
        payphone.Button({
          //token obtenido desde la consola de developer
          token: "nVW5WIJ5C2A6S13HNKrK-kfaF7pDdOa-5zxLJUves7NDGShCW92gtUVKspmESY_qwpWvE_8rU4bzGyipTw8brS5TBhNAVdalJSfBN8D6cljBGQt2qDAnTRkZ7ejQHlkHQ2LgpH95IMLbg6eaNz6w_IB97_euHyIpG5wO3yek395pkSPZ8pK5-3WnBRC2Jtcslkhy3Zg3y5za3cnDVi20cpieoIOZnZOPFTrbk1t2fY7Lm1BG5i1YGoOxrCuR3BPX8X2Fai6qrVmdO45yGgiT_zGf14SOnXLu2Z9Z2W3OIuwD_y_6Tuslfx2-j5TAQMz9gPJ2EQ",
          //PARÁMETROS DE CONFIGURACIÓN
          btnHorizontal: true,
          btnCard: true,
          createOrder: function(actions){
            // Se ingresan los datos de la transaccion ej. monto, impuestos, etc
            return actions.prepare({
              amount: ${totalAmtm},
              amountWithoutTax: ${totalAmtm},
              currency: "USD",
              clientTransactionId: generateUniqueID(),
              lang: "es"
            }).then(function(paramlog){
              console.log(paramlog);
              return paramlog;
            }).catch(function(paramlog2){
              console.log(paramlog2);
              return paramlog2;
            });
          },
          onComplete: function(model, actions){
            console.log("Modelo:");
            console.log(model);
          }
        }).render("#pp-button");
      }
      loadPay();
      var contenedor = document.getElementById('pp-button');
  var elementos = contenedor.querySelectorAll('.payphone');

  // Ocultar todos los divs hijos
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].style.display = 'none';
  }

  // Mostrar solo el último div hijo
  var ultimoElemento = elementos[elementos.length - 1];
  ultimoElemento.style.display = 'block';
    `;
    document.head.appendChild(script);
  }, [totalAmt]);

  const handleClick = () => {
    // Recuperar los productos existentes del localStorage
    const existingProducts = JSON.parse(localStorage.getItem("topProduct")) || [];

    // Combinar los productos recuperados con los productos de "products"
    const updatedProducts = [...existingProducts, ...products];

    console.log(updatedProducts);

    // Almacenar el nuevo conjunto de productos en el localStorage
    localStorage.setItem("topProduct", JSON.stringify(updatedProducts));
    // Puedes agregar lógica adicional aquí para manejar la respuesta
  }

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Cart" />
      {products.length > 0 ? (
        <div className="pb-20">
          <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>
          <div className="mt-5">
            {products.map((item) => (
              <div key={item._id}>
                <ItemCard item={item} />
              </div>
            ))}
          </div>

          <button
            onClick={() => dispatch(resetCart())}
            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300">
            Reset cart
          </button>

          <div className="flex flex-col mdl:flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0">
            <div className="flex items-center gap-4">
              <input
                className="w-44 mdl:w-52 h-8 px-4 border text-primeColor text-sm outline-none border-gray-400"
                type="text"
                placeholder="Coupon Number"
              />
              <p className="text-sm mdl:text-base font-semibold">
                Apply Coupon
              </p>
            </div>
            <p className="text-lg font-semibold">Update Cart</p>
          </div>
          <div className="max-w-7xl gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right">Cart totals</h1>
              <div>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Subtotal
                  <span className="font-semibold tracking-wide font-titleFont">
                    ${totalAmt}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Shipping Charge
                  <span className="font-semibold tracking-wide font-titleFont">
                    ${shippingCharge}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                  Total
                  <span className="font-bold tracking-wide text-lg font-titleFont">
                    ${totalAmt + shippingCharge}
                  </span>
                </p>
              </div>
              <div className="flex justify-end">
                <div id="pp-button" onClick={() => handleClick()}></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20">
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/shop">
              <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
