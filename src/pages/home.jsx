import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import ReactPlayer from 'react-player';
import logoss from '/img/logop.png';

export function Home() {
  return (
    <>
      <div className="relative flex h-screen sm:h-auto content-center items-center justify-center pt-16 pb-32 sm:pb-8">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="mx-auto w-full px-4 text-center sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black text-3xl sm:text-4xl md:text-5xl"
              >
                Bienvenido a Don Henry Café
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 text-sm sm:text-base md:text-lg">
                Café colombiano de calidad superior, en un acogedor espacio para amantes del buen café.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-16 sm:-mt-32 bg-white px-4 pb-20 pt-4 sm:pt-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description, image }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
                image={image}
              />
            ))}
          </div>
          <div className="mt-16 sm:mt-32 flex flex-wrap items-center justify-center">
            <div className="mx-auto w-full px-4 sm:w-5/12">
              <div className="mb-6 inline-flex items-center justify-center">
                <img src={logoss} alt='logo' className="w-25 h-20 mb-4" />
              </div>
              <>
                <div className="mb-8 p-4 border border-gray-300 rounded-lg font-bold hover:border-black">
                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                  >
                    Quiénes Somos
                  </Typography>
                  <Typography className="mb-8 font-normal text-justify">
                    Sumérgete en nuestro mundo y descubre una amplia gama de cafés de origen único, cuidadosamente seleccionados de las mejores cosechas de Colombia. Desde los exuberantes paisajes montañosos hasta las manos expertas que cultivan y procesan estos granos, cada taza de café que servimos cuenta una historia de pasión y calidad inigualable.
                    <br />
                    <br />
                  </Typography>
                </div>
                <div className="mb-8 p-4 border border-gray-300 rounded-lg font-bold hover:border-black">
                  <Typography className="mb-8 font-normal text-justify">
                    En Don Henry Café, no solo te ofrecemos una experiencia de degustación excepcional, sino que también te invitamos a explorar y aprender sobre el arte detrás de cada taza. Nuestros expertos baristas te guiarán a través del proceso de elaboración, desde la cosecha hasta la preparación, revelando los secretos que hacen que nuestros cafés sean únicos en sabor y aroma.
                    <br />
                    <br />
                  </Typography>
                </div>
                <div className="mb-8 p-4 border border-gray-300 rounded-lg font-bold hover:border-black">
                  <Typography className="mb-8 font-normal text-justify">
                    Además de deleitarte con nuestra selección exclusiva de cafés, podrás disfrutar de un ambiente acogedor y relajante que complementa a la perfección la experiencia sensorial que ofrecemos. Desde los momentos íntimos de la primera taza del día hasta las conversaciones animadas en una tarde soleada, Don Henry Café es el lugar donde los apasionados del café encuentran su hogar.
                    <br /><br />
                  </Typography>
                </div>
              </>

            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/somo.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Conoce nuestra historia</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Brisa de Café
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500 leading-relaxed md:text-lg lg:text-xl">
                    En los campos de nuestra tierra, baila la brisa entre las sierras. El café, tesoro de aroma y sabor, enciende pasiones con su fervor. En cada sorbo, encuentras el alma, de montañas, de sol y de calma. Colombia, patria del café, donde el amor se mezcla con la fe.
                  </Typography>


                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
  <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
  <div className="absolute top-0 h-full w-full bg-black/70 bg-cover bg-center" />
  <div className="max-w-8xl container relative mx-auto">
    <div className="flex flex-wrap items-center">
      <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12 ">
        <Typography
          variant="h5"
          color="white" // Cambiado a blanco
          className="mb-3 mt-2 font-bold text-xl"
        >
          Explora Don Henry Café Un Viaje Sensorial por los Sabores del Café Colombiano
        </Typography>
        <div className="container mx-auto px-4 py-8">
          <Typography className="font-normal text-white text-sm md:text-base lg:text-lg leading-relaxed">
            "Descubre nuestro mundo a través de este video ilustrativo, que te ofrece un vistazo exclusivo a lo que tenemos preparado para ti en Don Henry Café. Sumérgete en la experiencia sensorial de nuestros exquisitos cafés y déjate llevar por los sabores auténticos de Colombia. ¡Disfruta de un viaje único a través de los aromas y las historias que se esconden detrás de cada taza! Bienvenido a Don Henry Café, donde cada momento se convierte en una experiencia inolvidable."
          </Typography>
</div>

            </div>
          </div>
        </div>
      </div>
      <section id="video-section" className="px-4 pt-10 md:pt-20 pb-20 md:pb-40">
        <div className="container mx-auto">
          <div className="max-w-full mx-auto md:max-w-md">
            <div className="relative overflow-hidden rounded-lg shadow-lg border-4 border-gray-200">
              <video id="promo-video" controls className="w-full h-auto">
                <source src="/video/henrrycafeVideo.mp4" type="video/mp4" />
                Tu navegador no admite el elemento de video.
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-40">
        <div className="container mx-auto">
          <PageTitle section="Nuestros clientes" heading="Comentarios acerca del producto"></PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, rating }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                rating={rating}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="bg-gray-50 ">
        <Footer />
      </div>
    </>
  );
}
export default Home;
