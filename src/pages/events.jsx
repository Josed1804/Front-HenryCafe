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
    window.open("https://wa.me/3005710804", "_blank");
  };

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/somo.jpeg')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="relative flex gap-6 items-start">
                <div className="-mt-20 w-40">
                  <Avatar
                    src="/img/background-1.jpg"
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
                    src="/img/event1.jpg"
                    alt="card-image"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody className="flex items-center justify-center">
                  <div className="text-justify">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                      Eventos sociales
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                      Don Henry Café es el lugar perfecto para celebrar cumpleaños, aniversarios o cualquier otra ocasión especial. Contamos con un menú variado para todos los gustos, así como con un equipo de profesionales que se encargará de que tu evento sea perfecto.
                    </Typography>
                  </div>
                </CardBody>
              </Card>

              <Card className=" flex-row bg-gray-50">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                  <img
                    src="/img/event2.jpg"
                    alt="card-image"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody className="flex items-center justify-center">
                  <div className="text-justify">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                    Matrimonios
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                      Don Henry Café es el lugar perfecto para celebrar tu boda de ensueño. Contamos con un salón principal con capacidad para hasta 200 invitados, así como con una terraza al aire libre para una ceremonia íntima. Nuestro equipo de profesionales te ayudará a planificar cada detalle de tu boda para que sea un día inolvidable.
                    </Typography>
                  </div>
                </CardBody>
              </Card>


              <Card className=" flex-row">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                  <img
                    src="/img/event3.jpg"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody className="flex items-center justify-center">
                  <div className="text-justify">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                    Eventos empresariales
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                      Don Henry Café ofrece espacios ideales para reuniones de negocios, conferencias o lanzamientos de productos. Contamos con equipos audiovisuales de última generación y catering personalizado.
                    </Typography>
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


