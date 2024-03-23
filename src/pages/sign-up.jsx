import {
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
 


export function SignUp() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');
  const navigate = useNavigate();
  const handleSignUp = async () => {
    try {
      console.log('Antes de la solicitud fetch');
      const response = await fetch('https://backend-flax-seven.vercel.app/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, pswd }),
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
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/background-2.jpg"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <img src="/img/logop.png" alt="" width={'100'} className="mb-4" />
          <Typography variant="h2" className="font-bold mb-4">Registrate hoy</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Ingresa tu nombre, correo y contraseña para registrarte</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Nombre
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="AlejaMUndo"
              value={nombre}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
              value={pswd}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => setPswd(e.target.value)}
            />
          </div>

          <Button className="mt-6" fullWidth color="brown" onClick={handleSignUp}>
            Registrar
          </Button>


          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            ¿Ya tienes cuenta?
            <Link to="/sign-in" className="text-gray-900 ml-1">Inicia sesión</Link>
          </Typography>
        </form>

      </div>
    </section>
  );
}

export default SignUp;
