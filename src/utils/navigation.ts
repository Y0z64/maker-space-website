// An array of links for navigation bar
const navBarLinks = [
  { name: "Inicio", url: "/" },
  // { name: "Services", url: "/services" }
  { name: "Blog", url: "/blog" },
  { name: "Guias", url: "/welcome-to-docs/" }, 
  { name: "Contacto", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Nosotros",
    links: [
      { name: "Contacto", url: "/contact" },
      { name: "Blog", url: "/blog" },
      { name: "Documentation", url: "/welcome-to-docs/" },
    ],
  },
  {
    section: "",
    links: [
      { name: "", url: "/welcome-to-docs/" },
      { name: "", url: "/products" },
      { name: "", url: "/services" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};