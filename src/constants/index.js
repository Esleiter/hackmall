import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,

  huevos,
  aceite,
  azucar,
  harina,
  leche,
  zanahoria,
  canela,
  mantequilla,
  nuez,
  pan_rebanadas,
  queso_crema,
  bicarbonato,
  impalpable,
  vainilla,
  hornear,
  sal,

  bano,
  combo1,
  combobox,
  ecuador,
  fritas,
  montana,
  termico,
  twister,
  licra,

} from "../assets/images/index";

// =================== NavBarList Start here ====================
export const navBarList = [
  // {
  //   _id: 1001,
  //   title: "Home",
  //   link: "/",
  // },
  {
    _id: 1002,
    title: "Shop",
    link: "/shop",
  },
  // {
  //   _id: 1003,
  //   title: "About",
  //   link: "/about",
  // },
  // {
  //   _id: 1004,
  //   title: "Contact",
  //   link: "contact",
  // },
  // {
  //   _id: 1005,
  //   title: "Journal",
  //   link: "/journal",
  // },
];
// =================== NavBarList End here ======================
// =================== Special Offer data Start here ============
export const SplOfferData = [
  {
    _id: "201",
    img: spfOne,
    productName: "Cap for Boys",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: "202",
    img: newArrFour,
    productName: "Tea Table",
    price: "180.00",
    color: "Gray",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: "203",
    img: spfThree,
    productName: "Headphones",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
  {
    _id: "204",
    img: spfFour,
    productName: "Sun glasses",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
  },
];
// =================== Special Offer data End here ==============

// =================== PaginationItems Start here ===============

export const paginationItems = [
  {
    _id: 1001,
    img: leche,
    productName: "Leche",
    price: "1.00",
    color: "",
    badge: true,
    des: "Articulo de consumo para bebidasa frias y calientes",
    descuento: 15,
    tipo_alimentacion: "Lactosa",
    marca: "Toni",
    tienda: "Megamaxi",
    keywords: ['Leche', "Laptosa"]
  },
  {
    _id: 1002,
    img: pan_rebanadas,
    productName: "Pan en Rebanadas",
    price: "1.50",
    color: "",
    badge: true,
    des: "Panes muy ricos ricos, Harina espespecial",
    descuento: 5,
    tipo_alimentacion: "Carbohidrato",
    marca: "Maggi",
    tienda: "Megamaxi",
    keywords: ["Pan", "Panceta"]
  },
  {
    _id: 1003,
    img: huevos,
    productName: "Huevos Medianos",
    price: "6.00",
    color: "",
    badge: true,
    des: "Huevos para cocinar",
    descuento: 5,
    tipo_alimentacion: "Proteinico",
    marca: "Sumesa",
    tienda: "Megamaxi",
    keywords: ["Huevos", "Huevos Medianos"]
  },
  {
    _id: 1005,
    img: harina,
    productName: "Harina de trigo",
    price: "1.00",
    color: "",
    badge: true,
    des: "Saludable para todas las casas",
    descuento: 15,
    tipo_alimentacion: "Carbohidrado",
    marca: "Tru",
    tienda: "Megamaxi",
    keywords: ["Harina", "Harina de trigo"]
  },
  {
    _id: 1006,
    img: azucar,
    productName: "Azúcar",
    price: "2.00",
    color: "",
    badge: true,
    des: "Endulza todas tus bebidas",
    descuento: 10,
    tipo_alimentacion: "Especias",
    marca: "Tru",
    tienda: "Megamaxi",
    keywords: ["Azucar", "Azúcar"]
  },
  {
    _id: 1007,
    img: aceite,
    productName: "Aceite vegetal",
    price: "2.00",
    color: "",
    badge: true,
    des: "Aceite para tus comida el mas delicioco",
    descuento: 10,
    tipo_alimentacion: "Especias",
    marca: "Tru",
    tienda: "Megamaxi",
    keywords: ["Aceite", "Aceite Vegetal"]
  },
  {
    _id: 1008,
    img: hornear,
    productName: "Polvo para hornear",
    price: "1.60",
    color: "",
    badge: true,
    des: "Hornea todas tus tortas",
    descuento: 8,
    tipo_alimentacion: "Especias",
    marca: "Tru",
    tienda: "Megamaxi",
    keywords: ["Polvo para hornear"]
  },
  {
    _id: 1009,
    img: bicarbonato,
    productName: "Bicarbonato de sodio",
    price: "3.00",
    color: "",
    badge: true,
    des: "Cosas saludables",
    descuento: 0,
    tipo_alimentacion: "Especias",
    marca: "Tru",
    tienda: "Megamaxi",
    keywords: ["Bicarbonato"]
  },
  {
    _id: 1010,
    img: sal,
    productName: "Sal",
    price: "1.00",
    color: "",
    badge: true,
    des: "Sal para mesa",
    descuento: 0,
    tipo_alimentacion: "Especias",
    marca: "Sumesa",
    tienda: "Megamaxi",
  },
  {
    _id: 1011,
    img: canela,
    productName: "Canela en polvo",
    price: "1.75",
    color: "",
    badge: true,
    des: "Dale sabor a tus postres y comidas",
    descuento: 20,
    tipo_alimentacion: "Pasteleria",
    marca: "Tru",
    tienda: "Megamaxi",
  },
  {
    _id: 1012,
    img: nuez,
    productName: "Nueces o almendras picadas",
    price: "1.90",
    color: "",
    badge: true,
    des: "Crocantes",
    descuento: 15,
    tipo_alimentacion: "Fibra natural",
    marca: "Sumesa",
    tienda: "Megamaxi",
  },
  {
    _id: 1013,
    img: queso_crema,
    productName: "Queso crema",
    price: "6.50",
    color: "",
    badge: true,
    des: "La proteina para ser mas musculoso",
    descuento: 5,
    tipo_alimentacion: "Proteinico",
    marca: "Tru",
    tienda: "Megamaxi",
  },
  {
    _id: 1014,
    img: mantequilla,
    productName: "Mantequilla",
    price: "2.20",
    color: "",
    badge: true,
    des: "Baja en grasa",
    descuento: 0,
    tipo_alimentacion: "Proteinico",
    marca: "Sumesa",
    tienda: "Megamaxi",
  },
  {
    _id: 1015,
    img: impalpable,
    productName: "Azúcar impalpable",
    price: "7.00",
    color: "",
    badge: true,
    des: "Para tus postres",
    descuento: 0,
    tipo_alimentacion: "Pasteleria",
    marca: "Tru",
    tienda: "Megamaxi",
  },
  {
    _id: 1016,
    img: vainilla,
    productName: "Extracto de vainilla",
    price: "6.50",
    color: "",
    badge: true,
    des: "Para tus tortas",
    descuento: 0,
    tipo_alimentacion: "Pasteleria",
    marca: "Sumesa",
    tienda: "Megamaxi",
  },
  {
    _id: 1017,
    img: ecuador,
    productName: "Camiseta Ecuador",
    price: "80.00",
    color: "amarillo",
    badge: true,
    des: "De nylon",
    descuento: 0,
    tipo_alimentacion: "Deportiva",
    marca: "Adidas",
    tienda: "Marathon",
    keywords: ["Camiseta manga corta", "Camiseta", "Camiseta Ecuador", "Camiseta deportiva"]
  },
  {
    _id: 1018,
    img: montana,
    productName: "Zapatos de montana",
    price: "70.00",
    color: "cafe",
    badge: true,
    des: "Zapatos de montana para montanaa",
    descuento: 0,
    tipo_alimentacion: "Deportiva",
    marca: "Nike",
    tienda: "Marathon",
    keywords: ["Zapatos", "Montana"]
  },
  {
    _id: 1019,
    img: bano,
    productName: "Traje de bano",
    price: "40.00",
    color: "gris",
    badge: true,
    des: "impermeable",
    descuento: 0,
    tipo_alimentacion: "Deportiva",
    marca: "Puma",
    tienda: "Marathon",
    keywords: ["Banador", "Traje de bano"]
  },
  {
    _id: 1020,
    img: termico,
    productName: "Buzo Terminco",
    price: "180.00",
    color: "rojo",
    badge: true,
    des: "Protegete del Frio con este buszo termico qu mantendra tu temperatura corporal",
    descuento: 0,
    tipo_alimentacion: "Deportiva",
    marca: "Adidas",
    tienda: "Marathon",
    keywords: ["Buzo", "Termico"]
  },
  {
    _id: 1021,
    img: licra,
    productName: "Licra mujer",
    price: "50.00",
    color: "azul",
    badge: true,
    des: "Se las mas linda del baile de primavera",
    descuento: 0,
    tipo_alimentacion: "Deportiva",
    marca: "Nike",
    tienda: "Marathon",
  },
  {
    _id: 1022,
    img: combo1,
    productName: "Combo 1 - Original",
    price: "5.50",
    color: "",
    badge: true,
    des: "3 presas + papas + cola",
    descuento: 0,
    tipo_alimentacion: "Comida rapida",
    marca: "KFC",
    tienda: "KFC",
  },
  {
    _id: 1023,
    img: fritas,
    productName: "Papas Fritas",
    price: "1.50",
    color: "",
    badge: true,
    des: "Para llevar",
    descuento: 0,
    tipo_alimentacion: "Comida rapida",
    marca: "KFC",
    tienda: "KFC",
    keywords: ["Comida"]
  },
  {
    _id: 1024,
    img: combobox,
    productName: "Combo BOX 1 - Crispy",
    price: "7.50",
    color: "",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    descuento: 0,
    tipo_alimentacion: "Comida rapida",
    marca: "KFC",
    tienda: "KFC",
  },
  {
    _id: 1025,
    img: twister,
    productName: "Combo Twister",
    price: "3.50",
    color: "",
    badge: true,
    des: "Roll de pollo",
    descuento: 0,
    tipo_alimentacion: "Comida rapida",
    marca: "KFC",
    tienda: "KFC",
    keywords: ["Comida"]
  },
  {
    _id: 1070,
    img: zanahoria,
    productName: "Zanahoria",
    price: "1.00",
    color: "",
    badge: true,
    des: "Articulo tipo Vegetal",
    descuento: 15,
    tipo_alimentacion: "Vegetal",
    marca: "Toni",
    tienda: "Megamaxi",
    keywords: ['Zanahoria', "Zanahoria rallada"]
  }
];
// =================== PaginationItems End here =================

export const profile_user = [
  {
    id_profile: "601",
    role_user: "admin",
    name_user: "Mauro Echeverria",
    celular: "0960939030",
    email: "maurovinicio.echeverria@gmail.com",
    preferencias: {
      color: [],
      tipo_alimentacion: ["vegetariana","Basada en Proteinas"],
      tipo_vestimenta:["Informal"],
      marcas: ["Nike","Adidas","H&M","Fila","Lacoste","Boss"]
    }
  }
];

export const preferecnia_user = [
  {
    colores: ["Rojo","Verde","Azul","Amarillo","Cyan","Negro","Blanco"],
    tipo_vestimenta:["Formal","Informal","Deportiva","De playa","De montaña","De invierno","De verano","Casual"],
    tipo_alimentacion: ["Comida rapida","Vegetariana","Basada en Proteinas","Mediterránea","Ayuno intermitente","Dieta calorica","Golosinas","Proteinico","Carbohidrato","Lactosa","No Lactosa"],
    marcas: ["Nike","Adidas","Reebok","Puma","Sumesa","Nestle","Unilever","P&G","Maggi","Tesco","Vans","H&M","Fila","Lacoste","Boss","Toni","Tru"]
  }
];

export const purchases_made = [
  {
    id_transaction: 1000,
    id_profile: 601,
    products: [
      {
        product_id: 1012,
        cantidad: 1
      },
      {
        product_id: 1013,
        cantidad: 1
      },
      {
        product_id: 1014,
        cantidad: 1
      }
    ]
  },
  {
    id_transaction: 1001,
    id_profile: 601,
    products: [
      {
        product_id: 1015,
        cantidad: 1
      },
      {
        product_id: 1016,
        cantidad: 1
      },
      {
        product_id: 1017,
        cantidad: 1
      }
    ]
  },
  {
    id_transaction: 1002,
    id_profile: 602,
    products: [
      {
        product_id: 1012,
        cantidad: 1
      },
      {
        product_id: 1013,
        cantidad: 1
      },
      {
        product_id: 1014,
        cantidad: 1
      }
    ]
  },
];