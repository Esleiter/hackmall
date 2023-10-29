import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import PreferenceForm from "./PreferentForm";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

const SignUp = () => {
  // ============= Initial State Start here =============
  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState(true);
  const [vestiment, setVestiment] = React.useState(false);
  const [aliment, setAliment] = React.useState(false);
  const [marca, setMarca] = React.useState(false);

  const [colors, setColors] = useState([
    {
      name: "Rojo",
      id: 1,
    },
    {
      name: "Verde",
      id: 2,
    },
    {
      name: "Azul",
      id: 3,
    },
    {
      name: "Amarillo",
      id: 4,
    },
    {
      name: "Cyan",
      id: 5,
    },
    {
      name: "Negro",
      id: 6,
    },
  ]);

  const [vestimentOption, setVestimentOption] = useState([
    {
      name: "Formal",
      id: 1,
    },
    {
      name: "Informal",
      id: 2,
    },
    {
      name: "Deportiva",
      id: 3,
    },
    {
      name: "De playa",
      id: 4,
    },
    {
      name: "De montaña",
      id: 5,
    },
    {
      name: "De invierno",
      id: 6,
    },
    {
      name: "De verano",
      id: 7,
    },
    {
      name: "Casual",
      id: 8,
    },
  ]);

  const [alimentOption, setAlimentOption] = useState([
    {
      name: "Comida rapida",
      id: 1,
    },
    {
      name: "Vegetariana",
      id: 2,
    },
    {
      name: "Basada en Proteinas",
      id: 3,
    },
    {
      name: "Mediterránea",
      id: 4,
    },
    {
      name: "Ayuno intermitente",
      id: 5,
    },
    {
      name: "Dieta calorica",
      id: 6,
    },
    {
      name: "Golosinas",
      id: 7,
    },
    {
      name: "Proteinico",
      id: 8,
    },
    {
      name: "Carbohidrato",
      id: 9,
    },
    {
      name: "Lactosa",
      id: 10,
    },
    {
      name: "No Lactosa",
      id: 11,
    },
  ]);

  const [marcaOption, setMarcaOption] = useState([
    {
      name: "Nike",
      id: 1,
    },
    {
      name: "Adidas",
      id: 2,
    },
    {
      name: "Reebok",
      id: 3,
    },
    {
      name: "Puma",
      id: 4,
    },
    {
      name: "Sumesa",
      id: 5,
    },
    {
      name: "Nestle",
      id: 6,
    },
    {
      name: "Unilever",
      id: 7,
    },
    {
      name: "P&G",
      id: 8,
    },
    {
      name: "Maggi",
      id: 9,
    },
    {
      name: "Tesco",
      id: 10,
    },
    {
      name: "Vans",
      id: 11,
    },
    {
      name: "H&M",
      id: 12,
    },
    {
      name: "Fila",
      id: 13,
    },
    {
      name: "Lacoste",
      id: 14,
    },
    {
      name: "Boss",
      id: 15,
    },
    {
      name: "Toni",
      id: 16,
    },
    {
      name: "Tru",
      id: 17,
    },
  ]);

  const handleOpen = () => {
    if (clientName == "" && phone == "") {
      setOpen(true);
      setChecked(true);
    } else {
      setErrClientName("Campo Vacio");
      setErrPhone("Campo Vacio");
    }
  };

  // ============= Error Msg Start here =================
  const [errClientName, setErrClientName] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const navigate = useNavigate();

  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============

  // ============= Event Handler End here ===============

  const handleSignUp = (e) => {
    e.preventDefault();
    if (checked) {
      if (!clientName) {
        setErrClientName("Enter your name");
      }

      if (!phone) {
        setErrPhone("Enter your phone number");
      }

      // ============== Getting the value ==============
      if (clientName == "") {
        setMarca(false);
        setOpen(false);
        navigate("/shop");
        setClientName("");
        setPhone("");
      }
    }
  };

  const handleNotCheck = (e) => {
    localStorage.removeItem("selectedOptions");
    e.preventDefault();
    setMarca(false);
    setOpen(false);
    navigate("/shop");
    setClientName("");
    setPhone("");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const PreferentCustom = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "2rem",
  };

  const buttonStyle = {
    backgroundColor: "#f44336",
    color: "#fff",
    fontSize: "1.2rem",
    margin: "0 .5rem 0 0",
    padding: ".5em 2rem",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const buttonStyleSubmit = {
    marginTop: "1rem",
    marginBottom: "1rem",
    backgroundColor: "#f44336",
    color: "#fff",
    fontSize: "1rem",
    width: "120px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const buttonStyleDown = {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "end",
  };

  return (
    <div className="w-full h-screen flex items-center justify-start">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">
              Get started for free
            </h1>
            <p className="text-base">Create your account to access more</p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Get started fast with OREBI
              </span>
              <br />
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Access all OREBI services
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Trusted by online Shoppers
              </span>
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              © OREBI
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Terms
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Privacy
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Security
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
        {successMsg ? (
          <div className="w-[500px]">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/signin">
              <button
                className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
            tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Sign in
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl md:text-3xl mb-4 text-red-500 text-center mx-auto">
                Nos gustaría conocer un poco más de ti
              </h1>
              <div className="flex flex-col gap-3">
                <Box style={PreferentCustom}>
                  <div className="flex justify-between">
                    <Button
                      variant="contained"
                      sx={buttonStyle}
                      onClick={handleNotCheck}
                    >
                      Despues
                    </Button>

                    <Button
                      variant="contained"
                      sx={buttonStyle}
                      onClick={handleOpen}
                    >
                      Vamos
                    </Button>
                  </div>
                </Box>

                {open && (
                  <Box sx={style}>
                    {color && (
                      <Accordion expanded={color}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography
                            fontSize={25}
                            fontWeight={"bold"}
                            color={"#f44336"}
                          >
                            Colores
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <PreferenceForm preferents={colors} />
                            <Box style={buttonStyleDown}>
                              <Button
                                variant="contained"
                                sx={buttonStyleSubmit}
                                onClick={() => (
                                  setColor(false), setVestiment(true)
                                )}
                              >
                                Siguiente
                              </Button>
                            </Box>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    )}

                    {vestiment && (
                      <Accordion expanded={vestiment}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography
                            fontSize={25}
                            fontWeight={"bold"}
                            color={"#f44336"}
                          >
                            Vestimenta
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <PreferenceForm preferents={vestimentOption} />
                            <Box style={buttonStyleDown}>
                              <Button
                                variant="contained"
                                sx={buttonStyleSubmit}
                                onClick={() => (
                                  setVestiment(false), setAliment(true)
                                )}
                              >
                                Siguiente
                              </Button>
                            </Box>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    )}

                    {aliment && (
                      <Accordion expanded={aliment}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography
                            fontSize={25}
                            fontWeight={"bold"}
                            color={"#f44336"}
                          >
                            Alimentacion
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <PreferenceForm preferents={alimentOption} />
                            <Box sx={buttonStyleDown}>
                              <Button
                                variant="contained"
                                sx={buttonStyleSubmit}
                                onClick={() => (
                                  setAliment(false), setMarca(true)
                                )}
                              >
                                Siguiente
                              </Button>
                            </Box>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    )}

                    {marca && (
                      <Accordion expanded={marca}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography
                            fontSize={25}
                            fontWeight={"bold"}
                            color={"#f44336"}
                          >
                            Marca
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <PreferenceForm preferents={marcaOption} />
                            <Box style={buttonStyleDown}>
                              <Button
                                variant="contained"
                                sx={buttonStyle}
                                onClick={handleSignUp}
                                className={`${
                                  checked
                                    ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                                    : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
                                } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                              >
                                Listo
                              </Button>
                            </Box>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    )}
                  </Box>
                )}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
