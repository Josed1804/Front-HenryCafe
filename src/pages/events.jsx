import {
  Avatar,
  Typography,
  Button,
  Card,
  CardHeader,
  CardBody
} from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Events() {
  const handleContactUs = () => {
    const message = encodeURIComponent("*¡Me interesa un evento con Henry Cafe!*");
    window.open(`https://wa.me/3005710804/?text=${message}`, "_blank");
  };



  return (
    <>
      <section className="relative block h-[90vh]">
        <div className="bg-profile-background absolute top-0 left-0 w-full h-full" style={{ backgroundPosition: "center top -10px" }}>
          <img src="/img/eventos1.jpg" alt="Eventos" className="object-cover w-full h-full" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
      </section>




      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="relative flex gap-6 items-start">
                <div className="-mt-20 w-40">
                  <Avatar
                    src="/img/eventos.jpg"
                    alt="Profile picture"
                    variant="circular"
                    className="h-full w-full"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <Typography variant="h4" color="blue-gray">
                    Nuestros Eventos
                  </Typography>
                </div>
              </div>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-6">

              <Card className="flex-row">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="m-0 w-2/5 shrink-0 rounded-r-none flex items-center justify-center"
                >
                  <img
                    src="/img/eventoos_sociales.jpg"
                    alt="card-image"
                    className="object-cover object-center w-full h-auto md:h-full min-h-[800px]"
                  />
                </CardHeader>
                <CardBody className="flex items-center justify-center">
                  <div className="text-justify relative group">
                    <div className="text-justify relative group">
                      <Typography variant="h4" className="text-blue-gray group-hover:text-black dark:text-black">
                        Eventos sociales
                        <br />
                      </Typography>
                    </div>
                    <div className="mt-2 mb-0">
                      <Typography className="text-gray font-normal group-hover:text-black dark:text-black">
                        Variedad en el menú Amplia gama de opciones gastronómicas, desde aperitivos hasta postres, para satisfacer todos los gustos y preferencias.
                        Ambiente acogedor Espacio elegante y acogedor que promueve la creación de recuerdos memorables con amigos y familiares, donde los invitados se sienten cómodos y bienvenidos.
                      </Typography>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[#6F4E37] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                </CardBody>
              </Card>

              <Card className=" flex-row bg-gray-50">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="m-0 w-2/5 shrink-0 rounded-r-none flex items-center justify-center"
                >
                  <img
                    src="/img/eventos_matrimonios.jpg"
                    alt="card-image"
                    className="object-cover object-center w-full h-auto md:h-full min-h-[800px]"
                  />
                </CardHeader>
                <CardBody className="flex items-center justify-center">
                  <div className="text-justify relative group">
                    <div className="text-justify relative group">
                      <Typography variant="h4" className="text-blue-gray group-hover:text-black dark:text-black">
                        Matrimonios
                        <br />
                      </Typography>
                    </div>
                    <div className="mb-8">
                      <Typography className="text-gray font-normal group-hover:text-black dark:text-black">
                        "¡Celebra tu día especial en grande! Don Henry Café te ofrece el escenario perfecto para tu boda de ensueño. Con un salón principal impresionante, con capacidad para hasta 200 invitados, y una hermosa terraza al aire libre para ceremonias íntimas bajo el cielo estrellado. Nuestro equipo de expertos estará a tu lado en cada paso del camino, asegurándose de que cada detalle sea perfecto y que tu día sea realmente inolvidable. ¡Deja que Don Henry Café sea el escenario de tu amor eterno!"
                      </Typography>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[#6F4E37] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                </CardBody>
              </Card>


              <Card className=" flex-row">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="m-0 w-2/5 shrink-0 rounded-r-none flex items-center justify-center"
                >
                  <img
                    src="/img/evento_empresarial.jpg"
                    className="object-cover object-center w-full h-auto md:h-full min-h-[800px]"
                  />
                </CardHeader>
                <CardBody className="flex items-center justify-center">
                  <div className="text-justify relative group">
                    <div className="text-justify relative group">
                      <Typography variant="h4" className="text-blue-gray group-hover:text-black dark:text-black">
                        Eventos Empresariales
                        <br />
                      </Typography>
                    </div>
                    <div className="mt-2 mb-0">
                      <Typography className="text-gray font-normal group-hover:text-black dark:text-black text-sm md:text-base lg:text-lg">
                        ¡Haz que tus eventos empresariales sean un éxito en Don Henry Café! Nuestro espacio elegante y acogedor es el escenario perfecto para tus reuniones de negocios, conferencias, lanzamientos de productos y más. Con salones versátiles que se adaptan a tus necesidades, nuestro equipo profesional te brindará una atención personalizada en cada detalle. Disfruta de nuestra deliciosa variedad gastronómica, desde coffee breaks hasta almuerzos ejecutivos.
                      </Typography>

                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[#6F4E37] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                </CardBody>
              </Card>

            </div>
          </div>
        </div>
        <div className="fixed bottom-4 right-4 z-50">
          <Button
            color="green"
            buttonType="filled"
            size="regular"
            onClick={handleContactUs}
            className="flex items-center space-x-2 transition-transform hover:scale-105"
          >
            <img src="/img/wapp.jpg" alt="WhatsApp Icon" className="w-10 h-10 rounded-full overflow-hidden" />
            <span>Contactanos</span>
          </Button>
        </div>
        
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Events;


