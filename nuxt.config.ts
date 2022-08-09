import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
  },
  css: ['@/assets/css/styles.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
});
