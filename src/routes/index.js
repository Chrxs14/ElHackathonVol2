const express = require('express');
const productRouter = require('./product.router');
const userRouter = require('./user.router');
const mallRouter = require('./mall.router');
const storeRouter = require ('./store.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productRouter);
  router.use('/users', userRouter);
  router.use('/malls', mallRouter);
  router.use('/stores', storeRouter);
}

module.exports = routerApi;
