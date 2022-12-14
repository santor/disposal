import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
  },
  css: [
    '@/assets/css/styles.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  head: {
    title: 'Waste Disposal Schedule Zürich',
    htmlAttrs: {
      lang: 'en',
    },
  },
});
