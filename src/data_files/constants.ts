import ogImageSrc from "@images/social.png";

// Check if this modifes for the english version of the site

export const SITE = {
  title: "Maker Space",
  tagline: "Espacio de prototipado y desarrollo",
  description:
    "Maker Space es un taller de prototipado y espacio colaborativo equipado con herramientas de última generación. Ofrecemos un ambiente ideal para crear, innovar y aprender, con eventos regulares y asesoría técnica personalizada. Perfecto para entusiastas de la tecnología, emprendedores y creadores que buscan llevar sus ideas a la realidad.",
  description_short:
    "Taller de prototipado con equipo avanzado, eventos y asesoría técnica para innovadores y creadores.",
  url: "https://makerspacegdl.space", // The domain is not closed yet
  author: "Yair Salvador Y0z64",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es-MX",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_MX",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Espacio de innovación y prototipado`,
  description:
    "Desarrolla tus proyectos en Maker Space con equipo de última generación, asesoría técnica y eventos. Ideal para innovadores, creadores y emprendedores que buscan convertir ideas en realidad. ¡Explora nuestras instalaciones y únete a nuestra comunidad creativa!",
  image: ogImageSrc,
};
