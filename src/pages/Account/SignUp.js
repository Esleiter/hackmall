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
  const handleOpen = () => {
    if (clientName != "" && phone != "") {
      setOpen(true);
      setChecked(true);
    } else {
      setErrClientName("Campo Vacio");
      setErrPhone("Campo Vacio")
    }
  };
  
  // ============= Error Msg Start here =================
  const [errClientName, setErrClientName] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const navigate = useNavigate();

  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };

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
      if (clientName) {
        setMarca(false);
        setOpen(false);
        navigate("/shop");
        setClientName("");
        setPhone("");
      }
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
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
    marginTop: "1rem",
    marginBottom: "1rem",
    backgroundColor: "#f44336",
    color: "#fff",
    fontSize: "1.2rem",
    padding: ".5em 2rem",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
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
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                Personalizacion de Preferencias
              </h1>
              <div className="flex flex-col gap-3">
                {/* client name */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Full Name
                  </p>
                  <input
                    onChange={handleName}
                    value={clientName}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="ej. John Doe"
                  />
                  {errClientName && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errClientName}
                    </p>
                  )}
                </div>
                {/* Phone Number */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Phone Number
                  </p>
                  <input
                    onChange={handlePhone}
                    value={phone}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="0999999999"
                  />
                  {errPhone && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPhone}
                    </p>
                  )}
                </div>

                <Box style={PreferentCustom}>
                  <Typography
                    fontSize={15}
                    fontWeight={"bold"}
                    color={"#f44336"}
                  >
                    Nos gustaria conocer un poco mas de ti
                  </Typography>
                  <Button
                    variant="contained"
                    sx={buttonStyle}
                    onClick={handleOpen}
                  >
                    Vamos
                  </Button>
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
                          <Typography>Colores</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <PreferenceForm />
                            <Button
                              variant="contained"
                              sx={buttonStyle}
                              onClick={() => (
                                setColor(false), setVestiment(true)
                              )}
                            >
                              Siguiente
                            </Button>
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
                          <Typography>Vestimenta</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <PreferenceForm />
                            <Button
                              variant="contained"
                              sx={buttonStyle}
                              onClick={() => (
                                setVestiment(false), setAliment(true)
                              )}
                            >
                              Siguiente
                            </Button>
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
                          <Typography>Alimentacion</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <PreferenceForm />
                            <Button
                              variant="contained"
                              sx={buttonStyle}
                              onClick={() => (
                                setAliment(false), setMarca(true)
                              )}
                            >
                              Siguiente
                            </Button>
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
                          <Typography>Marca</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <PreferenceForm />
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
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    )}
                  </Box>
                )}

                {/* Checkbox */}
                {/* <div className="flex items-start mdl:items-center gap-2">
                  <input
                    onChange={() => setChecked(!checked)}
                    className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                    type="checkbox"
                  />
                  <p className="text-sm text-primeColor">
                    I agree to the OREBI{" "}
                    <span className="text-blue-500">Terms of Service </span>and{" "}
                    <span className="text-blue-500">Privacy Policy</span>.
                  </p>
                </div> */}
                {/* <button
                  onClick={handleSignUp}
                  className={`${
                    checked
                      ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                      : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
                  } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                >
                  Create Account
                </button> */}
                {/* <p className="text-sm text-center font-titleFont font-medium">
                  Don't have an Account?{" "}
                  <Link to="/signin">
                    <span className="hover:text-blue-600 duration-300">
                      Sign in
                    </span>
                  </Link>
                </p> */}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
