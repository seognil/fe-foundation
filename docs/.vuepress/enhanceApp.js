const vueRedirect = require('./vue-redirect.js');

export default ({ router }) => {
  router.addRoutes(vueRedirect);
};
