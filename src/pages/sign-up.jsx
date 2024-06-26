import {
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { number } from "prop-types";



export function SignUp() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  const handleSignUp = async () => {
    try {
      console.log('Antes de la solicitud fetch');
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, pswd, number, address }),
      });

      const data = await response.json();

      if (data.success) {
        // Si el registro es exitoso, muestra una alerta de éxito
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: '¡Tu cuenta ha sido registrada con éxito!',
        });
        navigate(`/sign-in`);

        // Puedes redirigir al usuario o realizar otras acciones aquí
      } else {
        // Si hay un error en el registro, muestra una alerta de error
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar',
          text: data.error || 'Hubo un error al intentar registrar la cuenta.',
        });
      }
    } catch (error) {
      console.error('Error de red:', error);
      // Muestra una alerta de error en caso de problemas de red
      Swal.fire({
        icon: 'error',
        title: 'Error de red',
        text: 'Hubo un problema al conectar con el servidor.',
      });
    }
  };

  return (
    <section className="m-8 flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full lg:w-2/5 lg:flex hidden">
        <img
          src="/img/background-2.jpg"
          className="h-full w-full object-cover rounded-3xl"
          alt="Background"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Link to="/">
            <img src="/img/logop.png" alt="Logo" width={'100'} className="mb-4" />
          </Link>
          <Typography variant="h2" className="font-bold mb-4">Registrate hoy</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Ingresa tu nombre, correo y contraseña para registrarte</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-full max-w-lg lg:w-2/3">
          <div className="mb-6 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Nombre Completo
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Nombre + apellido"
              value={nombre}
              className="border-t-blue-gray-200 focus:border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setNombre(e.target.value)}
            />

            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Email
            </Typography>
            <Input
              type="email"
              size="lg"
              placeholder="name@mail.com"
              value={email}
              className="border-t-blue-gray-200 focus:border-t-gray-900"
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
              value={pswd}
              className="border-t-blue-gray-200 focus:border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setPswd(e.target.value)}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Numero de Wapp
            </Typography>
            <Input
              type="tel"
              size="lg"
              placeholder="123456789"
              value={number}
              className="border-t-blue-gray-200 focus:border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setNumber(e.target.value)}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Direccion de vivienda
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Domicilio"
              value={address}
              className="border-t-blue-gray-200 focus:border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setAddress(e.target.value)}
            />

          </div>

          <Button className="mt-6" fullWidth color="brown" onClick={handleSignUp}>
            Registrar
          </Button>

          <div className="flex justify-between items-center mt-4 w-full">
            <Typography variant="paragraph" className="text-blue-gray-500 font-medium">
              ¿Ya tienes cuenta?
              <Link to="/sign-in" className="text-gray-900 ml-1">Inicia sesión</Link>
            </Typography>
            <div>
              <Button
                color="blue-gray"
                onClick={() => console.log('Iniciar sesión con Google')}
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-gray-300 hover:bg-gray-50"
              >
                <img src="/img/google.png" alt="Google" className="w-6 h-6" />
                <span className="font-bold text-black">Iniciar sesión</span>
              </Button>

            </div>
          </div>
        </form>

      </div>
    </section>
  );
}

export default SignUp;
