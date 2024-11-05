import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import { remarkAlert } from "remark-github-blockquote-alert";

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkAlert],
  },
  site: "https://screwfast.uk",
  image: {
    domains: ["images.unsplash.com"],
  },
  redirects: {
    "/docs": "/welcome-to-docs",
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es",
          en: "en",
        },
      },
    }),
    starlight({
      title: "MakerSpace docs",
      defaultLocale: "root",
      sidebar: [
        {
          label: "Guías de Inicio Rápido",
          translations: {
            en: "Quick start guides",
          },
          autogenerate: { directory: "guides" },
        },
        // {
        //   label: "Equipo y Herramientas",
        //   translations: {
        //     en: "Tools & Equipment"
        //   },
        //   items: [
        //     { label: "Equipo", link: "tools/tool-guides/" },
        //     { label: "Mantenimiento", link: "tools/equipment-care/" },
        //   ],
        // },
        // {
        //   label: "Advanced Topics",
        //   autogenerate: { directory: "advanced" },
        // },
        { label: "Impresora 3D",
          autogenerate: { directory: "3d-printer"},
        },
      ],
      social: {
        github: "https://github.com/Y0z64",
      },
      disable404Route: true,
      customCss: ["./src/assets/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
        MobileMenuFooter:
          "./src/components/ui/starlight/MobileMenuFooter.astro",
        ThemeSelect: "./src/components/ui/starlight/ThemeSelect.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://screwfast.uk" + "/social.webp",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "https://screwfast.uk" + "/social.webp",
          },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
    react(),
  ],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
});
