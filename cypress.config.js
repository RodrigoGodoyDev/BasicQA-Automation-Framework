const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // 1. ¿Tienes esto aquí arriba?
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    setupNodeEvents(on, config) {
      // 2. ¡ESTA ES LA LÍNEA MÁGICA QUE SUELE FALTAR!
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
  },
});