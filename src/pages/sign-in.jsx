import {
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const navigate = useNavigate(); 

  const handleSignIn = async () => {
    try {
      console.log('Antes de la solicitud fetch');
      const response = await fetch("https://backend-flax-seven.vercel.app/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, pswd }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (data.success) {
        // La autenticación fue exitosa
        console.log("Inicio de sesión exitoso:", data.user);
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: '¡Bienvenido de nuevo!',
        });

        navigate(`/product?nombre=${data.user.name}`);
      } else {
        // La autenticación falló
        console.error("Error al iniciar sesión:", data.error);
        Swal.fire({
          icon: 'error',
          title: 'Error al iniciar sesión',
          text: data.error,
        });
      }
    } catch (error) {
      // Error de red
      console.error("Error de red:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error de red',
        text: error.message,
      });
    }
  };
  
  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
      <div className="flex flex-col items-center justify-center">
        <Link to="/">
          <img src="/img/logop.png" alt="Logo" width={'100'} className="mb-4" />
        </Link>
        <Typography variant="h2" className="font-bold mb-4"> Iniciar Sesion </Typography>
        <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Ingresa tu correo y contraseña para Iniciar Sesion </Typography>
      </div>

        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Email
            </Typography>
            <Input
            type="email"
              size="lg"
              placeholder="name@mail.com"
              value={email}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Contraseña
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={pswd}
              onChange={(e) => setPswd(e.target.value)}
            />
          </div>

          <Button className="mt-10 mb-10" fullWidth color="brown" onClick={handleSignIn}>
            LogIn
          </Button>


          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            ¿No estas registrado?
            <Link to="/sign-up" className="text-gray-900 ml-1">Crea una cuenta</Link>
          </Typography>
        </form>

      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/background-3.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>

    </section>
  );
}

export default SignIn;
