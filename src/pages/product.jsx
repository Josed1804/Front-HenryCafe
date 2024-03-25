import {
  Avatar, Typography, Button, Card,
  CardHeader,
  CardBody,
  CardFooter
} from "@material-tailwind/react";
import {
  ShoppingCartIcon
} from "@heroicons/react/24/solid";
import { useState } from 'react';
import { Footer } from "@/widgets/layout";
import Modal from 'react-modal';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
Modal.setAppElement('#root');

export function Product() {
  const location = useLocation();
  const [nombre, setNombre] = useState(new URLSearchParams(location.search).get('nombre'));
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  }

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }

  const generateWhatsAppMessage = () => {
    const message = cartItems.map(item => `${item.name} - Cantidad: 1 - Precio: $${item.price}`).join('\n');
    return `Hola, estoy interesado en estos productos:\n${message}\nTotal: $${calculateTotalPrice()}`;
  }

  const sendWhatsAppMessage = () => {
    const whatsappURL = `https://api.whatsapp.com/send/?phone=573005710804&text=${encodeURIComponent(generateWhatsAppMessage())}&type=phone_number&app_absent=0`;
    window.open(whatsappURL, '_blank');
  }
  const handleLogout = () => {
    // Limpiar el nombre al cerrar sesión
    setNombre(null);

    // Después de cerrar sesión, redirige al usuario a la página de inicio de sesión.
    navigate(`/product`);

  };

  return (
    <>
      <section className="relative flex h-screen sm:h-auto content-center items-center justify-center pt-16 pb-32 sm:pb-8">
      <div className="absolute top-0 h-full w-full bg-[url('/img/coffee.jpg')] bg-cover bg-center" />
      <br />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <br />
        <div className="max-w-8xl container relative mx-auto">
        <br />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl mb-4 sm:mb-9 text-white text-center"></h1>
        <br /><br />
          <p className="relative flex h-screen sm:h-auto content-center items-center justify-center pt-16 pb-32 sm:pb-8"></p>
          <br />
        </div>
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
                    {nombre ? (
                      <div>
                        <h1>Bienvenid@ , {nombre}!</h1>
                        <Button onClick={handleLogout}>
                          Cerrar Sesión
                        </Button>
                      </div>
                    ) : (
                      <Typography variant="h4" color="blue-gray">
                        Nuestros productos
                      </Typography>
                    )}
                  </Typography>



                </div>
              </div>

              <div className="mt-10 mb-10 flex lg:flex-col justify-between items-center lg:justify-end lg:mb-0 lg:px-4 flex-wrap lg:-mt-5">
                <Button className="bg-brown-900 w-fit lg:ml-auto text-center" onClick={handleOpenModal}>
                  <ShoppingCartIcon className="h-6 w-6 mr-2" />
                  Carrito ({cartItems.length})
                </Button>

                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={handleCloseModal}
                  contentLabel="Carrito de compras"
                  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[400px] w-full md:max-w-lg lg:max-w-xl bg-white p-8 rounded outline-none z-50"
                  overlayClassName="fixed top-0 left-0 w-full h-full bg-black/70 z-40"
                >
                  <div className="max-h-72 md:max-h-[70vh] overflow-y-auto">
                    <Typography variant="h4" className="mb-4">
                      Carrito de Compras
                    </Typography>
                    {cartItems.map((item, index) => (
                      <div key={index} className="flex items-center mb-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 mr-4 object-cover"
                        />
                        <div>
                          <Typography variant="h6" className="mb-2">
                            {item.name}
                          </Typography>
                          <Typography variant="paragraph" className="mb-2">
                            Precio: ${item.price}
                          </Typography>
                          <Button onClick={() => handleRemoveFromCart(index)} color="red">
                            Eliminar
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Typography variant="paragraph" className="mb-4">
                    Número de artículos en el carrito: {cartItems.length}
                  </Typography>
                  <Typography variant="paragraph" className="mb-4">
                    Total: ${calculateTotalPrice()}
                  </Typography>
                  <Button onClick={sendWhatsAppMessage} color="green" className="mr-2">
                    Enviar por WhatsApp
                  </Button>
                  <Button onClick={handleCloseModal} color="gray">
                    Cerrar
                  </Button>
                </Modal>



                <div className="flex justify-start py-4 pt-8 lg:pt-4">
                  <div className="mr-4 p-3 text-center">
                  </div>
                  <div className="mr-4 p-3 text-center">
                  </div>
                  <div className="p-3 text-center lg:mr-4">
                  </div>
                </div>

              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
              <Card className="mt-6 w-90 m-3">
                <CardHeader color="blue-gray" className="relative h-50">
                  <img
                    src="/img/rojo.PNG"
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Cafe De Frutos Rojos
                  </Typography>
                  <Typography>
                    Deléitate con nuestro café de frutos rojos de Andes, Antioquia. Esta mezcla única ofrece una experiencia sensorial: sabores dulces y afrutados se entrelazan en cada sorbo.
                  </Typography>
                  <Typography variant="h5" color="black" className="mt-2 mb-0">
                    <strong>$20.000</strong>
                  </Typography>
                </CardBody>
                <CardFooter className="mt-auto">
                  <Button onClick={() => handleAddToCart({ name: "Cafe De Frutos Rojos", price: 20000, image: "/img/rojo.PNG" })} color="brown">
                    Agregar al carrito
                  </Button>
                </CardFooter>

              </Card>

              <Card className="mt-6 w-90 m-3">
                <CardHeader color="blue-gray" className="relative h-50">
                  <img
                    src="/img/suave.PNG"
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Cafe Suave
                  </Typography>
                  <Typography>
                    Prueba nuestro Café Suave un equilibrio perfecto entre un espresso suave y un toque de leche vaporizada. Experimenta la armonía entre la intensidad del café y la cremosidad sutil en cada sorbo.
                  </Typography>
                  <Typography variant="h5" color="black" className="mt-2 mb-0">
                    <strong>$30.000</strong>
                  </Typography>
                </CardBody>
                <CardFooter className="mt-auto">
                  <Button onClick={() => handleAddToCart({ name: "Cafe Suave", price: 30000, image: "/img/suave.PNG" })} color="brown">
                    Agregar al carrito
                  </Button>
                </CardFooter>

              </Card>

              <Card className="mt-6 w-90 m-3">
                <CardHeader color="blue-gray" className="relative h-50">
                  <img
                    src="/img/kit.jpg"
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Kit cafetero
                  </Typography>
                  <Typography>
                    El kit cafetero colombiano es una experiencia completa que celebra el café premium de Colombia. Incluye granos selectos, tazas auténticas y una prensa francesa para disfrutar la esencia del café colombiano en casa.
                  </Typography>
                  <Typography variant="h5" color="black" className="mt-2 mb-0">
                    <strong>$50.000</strong>
                  </Typography>
                </CardBody>
                <CardFooter className="mt-auto">
                  <Button onClick={() => handleAddToCart({ name: "Kit cafetero", price: 50000, image: "/img/kit.jpg" })} color="brown">
                    Agregar al carrito
                  </Button>
                </CardFooter>

              </Card>

              <Card className="mt-6 w-90 m-3">
                <CardHeader color="blue-gray" className="relative h-50">
                  <img
                    src="/img/Bombon_expresso.jpg"
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Cafe Bonbón
                  </Typography>
                  <Typography>
                    Espresso y leche condensada en armonía, una mezcla dulce e intensa para los amantes del café con un toque de indulgencia.
                  </Typography>
                  <Typography variant="h5" color="black" className="mt-2 mb-0">
                    <strong>$20.000</strong>
                  </Typography>
                </CardBody>
                <CardFooter className="mt-auto">
                  <Button onClick={() => handleAddToCart({ name: "Cafe Bonbón", price: 20000, image: "/img/Bombon_expresso.jpg" })} color="brown">
                    Agregar al carrito
                  </Button>
                </CardFooter>
              </Card>
              <Card className="mt-6 w-90 m-3">
                <CardHeader color="blue-gray" className="relative h-50">
                  <img
                    src="/img/cafe_carajillo.jpg"
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Café Carajillo
                  </Typography>
                  <Typography>
                    Espresso con un toque de licor, una fusión audaz y enérgica para quienes buscan una experiencia de café única.
                  </Typography>
                  <Typography variant="h5" color="black" className="mt-2 mb-0">
                    <strong>$20.000</strong>
                  </Typography>
                </CardBody>
                <CardFooter className="mt-auto">
                  <Button onClick={() => handleAddToCart({ name: "Café Carajillo", price: 20000, image: "/img/cafe_carajillo.jpg" })} color="brown">
                    Agregar al carrito
                  </Button>
                </CardFooter>
              </Card>
              <Card className="mt-6 w-full m-3">
                <CardHeader color="blue-gray" className="relative h-50">
                  <img
                    src="/img/cafe_mocca.jpg"
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Café mocca
                  </Typography>
                  <Typography>
                    La combinación perfecta de espresso, chocolate y leche, creando una deliciosa y reconfortante experiencia de café con un toque de indulgencia.
                  </Typography>
                  <Typography variant="h5" color="black" className="mt-2 mb-0">
                    <strong>$10.000</strong>
                  </Typography>
                </CardBody>
                <CardFooter className="mt-auto">
                  <Button onClick={() => handleAddToCart({ name: "Café mocca", price: 10000, image: "/img/cafe_mocca.jpg" })} color="brown">
                    Agregar al carrito
                  </Button>
                </CardFooter>
              </Card>
              <Card className="mt-6 w-full m-3">
                <CardHeader color="blue-gray" className="relative h-50">
                  <img
                    src="/img/Café_irish.jpg"
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Café Irish
                  </Typography>
                  <Typography>
                    Una mezcla audaz de espresso y whisky irlandés, proporcionando una experiencia de café robusta con un toque cálido y embriagador.
                  </Typography>

                  <Typography variant="h5" color="black" className="mt-2 mb-0">
                    <strong>$10.000</strong>
                  </Typography>
                </CardBody>
                <CardFooter className="mt-auto">
                  <Button onClick={() => handleAddToCart({ name: "Café Irish", price: 10000, image: "/img/Café_irish.jpg" })} color="brown">
                    Agregar al carrito
                  </Button>
                </CardFooter>
              </Card>

              <Card className="mt-6 w-full m-3">
                <CardHeader color="blue-gray" className="relative h-50">
                  <img
                    src="/img/Café_expresso.jpg"
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Café expresso
                  </Typography>
                  <Typography>
                    La esencia pura del café concentrado en una pequeña cantidad. Un disparo intenso de sabor y energía para los amantes del café fuerte.
                  </Typography>

                  <Typography variant="h5" color="black" className="mt-2 mb-0">
                    <strong>$12.000</strong>
                  </Typography>
                </CardBody>
                <CardFooter className="mt-auto">
                  <Button onClick={() => handleAddToCart({ name: "Café expresso", price: 12000, image: "/img/Café_expresso.jpg" })} color="brown">
                    Agregar al carrito
                  </Button>
                </CardFooter>
              </Card>
              <Card className="mt-6 w-full m-3">
                <CardHeader color="blue-gray" className="relative h-50">
                  <img
                    src="/img/CafeAmericano.jpg"
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Café Americano
                  </Typography>
                  <Typography>
                    Espresso con agua caliente, ofreciendo una taza suave y equilibrada. Perfecto para aquellos que prefieren un café más suave y ligero.
                  </Typography>

                  <Typography variant="h5" color="black" className="mt-2 mb-0">
                    <strong>$12.000</strong>
                  </Typography>
                </CardBody>
                <CardFooter className="mt-auto">
                  <Button onClick={() => handleAddToCart({ name: " Café Americano", price: 12000, image: "/img/CafeAmericano.jpg" })} color="brown">
                    Agregar al carrito
                  </Button>
                </CardFooter>
              </Card>
              <Card className="mt-6 w-full m-3">
                <CardHeader color="brown" className="relative h-50">
                  <img
                    src="/img/CafeMacchiato.jpg"
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Cafe Macchiato
                  </Typography>
                  <Typography>
                    Espresso con una pequeña cantidad de leche, creando una bebida equilibrada y deliciosa. Ideal para aquellos que disfrutan de un toque suave en su espresso.
                  </Typography>

                  <Typography variant="h5" color="black" className="mt-2 mb-0">
                    <strong>$20.000</strong>
                  </Typography>
                </CardBody>
                <CardFooter className="mt-auto">
                  <Button onClick={() => handleAddToCart({ name: "Cafe Macchiato", price: 20000, image: "/img/CafeMacchiato.jpg" })} color="brown">
                    Agregar al carrito
                  </Button>
                </CardFooter>

              </Card>
              <Card className="mt-6 w-full m-3">
                <CardHeader color="brown" className="relative h-50">
                  <img
                    src="/img/Cappuccino.jpg"
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Cafe Cappuccino
                  </Typography>
                  <Typography>
                    Una mezcla perfecta de espresso, leche vaporizada y espuma de leche, creando una textura suave y una experiencia de café indulgente. Ideal para quienes buscan una bebida equilibrada y deliciosa.
                  </Typography>

                  <Typography variant="h5" color="black" className="mt-2 mb-0">
                    <strong>$10.000</strong>
                  </Typography>
                </CardBody>
                <CardFooter className="mt-auto">
                  <Button onClick={() => handleAddToCart({ name: "Cafe Cappuccino", price: 10000, image: "/img/Cappuccino.jpg" })} color="brown">
                    Agregar al carrito
                  </Button>
                </CardFooter>

              </Card>
              <Card className="mt-6 w-full m-3">
                <CardHeader color="brown" className="relative h-50">
                  <img
                    src="/img/Ristretto_espresso.jpg"
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Cafe Ristretto
                  </Typography>
                  <Typography>
                    <strong>Ristretto:</strong> Una versión más concentrada de espresso, con un sabor intenso y robusto. Perfecto para los amantes del café fuerte y aromático que buscan una experiencia de sabor concentrada.
                  </Typography>

                  <Typography variant="h5" color="black" className="mt-2 mb-0">
                    <strong>$15.000</strong>
                  </Typography>
                </CardBody>
                <CardFooter className="mt-auto">
                  <Button onClick={() => handleAddToCart({ name: "Cafe Ristretto", price: 15000, image: "/img/Ristretto_espresso.jpg" })} color="brown">
                    Agregar al carrito
                  </Button>
                </CardFooter>

              </Card>
            </div>


          </div>


        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>

    </>
  );
}

export default Product;
