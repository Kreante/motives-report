/** @type {import('next').NextConfig} */
const nextConfig = {
  // Comentar o eliminar la configuración de i18n
  // i18n: {
  //   locales: ['fr', 'en'],
  //   defaultLocale: 'fr',
  // },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = nextConfig