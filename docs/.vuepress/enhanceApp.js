const { flatList } = require('./scripts/301-record');

const extRouter = flatList.map(([oldUrl, newUrl]) => ({ path: oldUrl, redirect: newUrl }));

export default ({ router }) => {
  router.addRoutes(extRouter);
};
