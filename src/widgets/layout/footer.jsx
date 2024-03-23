import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import { PageTitle } from "@/widgets/layout";
const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative px-4 pt-8 pb-6">
  <div className="container mx-auto">
    <PageTitle section="" heading="Visítanos">
      ¡Esperamos verte pronto en nuestro café!
    </PageTitle>
    <div className="flex flex-wrap pt-6 text-center lg:text-left">
      <div className="w-full px-4 lg:w-6/12">
        <iframe
          className="w-full h-96 md:h-80 lg:h-96"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.231566472139!2d-75.60675492428781!3d6.233175326467518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442993eeb42edd%3A0x75818b7e73dfbd5e!2sCentro%20Comercial%20Los%20Molinos!5e0!3m2!1ses!2sco!4v1709509871206!5m2!1ses!2sco"
          frameBorder="0"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mx-auto">
        <img
          src="/img/logo.png"
          alt="imag logo"
          className="w-96 lg:w-80 xl:w-96 float-left mr-8 rounded"
        />
      </div>
    </div>
    <div className="flex flex-wrap items-center justify-center md:justify-between mt-8">
      <div className="mx-auto w-full px-4 text-center">
        <Typography
          variant="small"
          className="font-normal text-blue-gray-500"
        >
          Created by students SENA
        </Typography>
        {/* Agregar enlaces a redes sociales */}
        <div className="mt-4">
          <a
            href="https://www.facebook.com/donhenrycafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 mr-4"
          >
            <img src="/img/facebook.png" alt="Facebook" className="w-8 h-8 inline-block" />
          </a>
          <a
            href="https://www.instagram.com/donhenrycafe/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <img src="/img/instagram.png" alt="Instagram" className="w-8 h-8 inline-block" />
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>



  );
}

Footer.defaultProps = {
  title: "Material Tailwind",
  description:
    "Easy to use React components for Tailwind CSS and Material Design.",
  socials: [
    {
      color: "gray",
      name: "twitter",
      path: "https://www.twitter.com/creativetim",
    },
    {
      color: "gray",
      name: "youtube",
      path: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
    {
      color: "gray",
      name: "instagram",
      path: "https://www.instagram.com/creativetimofficial/",
    },
    {
      color: "black",
      name: "github",
      path: "https://github.com/creativetimofficial/material-tailwind",
    },
  ],
  menus: [
    {
      name: "useful links",
      items: [
        { name: "About Us", path: "https://www.creative-tim.com/presentation" },
        { name: "Blog", path: "https://www.creative-tim.com/blog" },
        {
          name: "Github",
          path: "https://www.github.com/creativetimofficial/material-tailwind?ref=mtk",
        },
        {
          name: "Free Products",
          path: "https://www.creative-tim.com/templates/free?ref=mtk",
        },
      ],
    },
    {
      name: "other resources",
      items: [
        {
          name: "MIT License",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
        },
        {
          name: "Contribute",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk",
        },
        {
          name: "Change Log",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
        },
        {
          name: "Contact Us",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} Material Tailwind by{" "}
      <a
        href="https://www.creative-tim.com?ref=mtk"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        Creative Tim
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
