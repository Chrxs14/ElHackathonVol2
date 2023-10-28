const express = require('express');
const productRouter = require('./product.router');
const userRouter = require('./user.router');
const mallRouter = require('./mall.router');
const storeRouter = require ('./store.router');
const categoryRouter = require ('./category.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/product', productRouter);
  router.use('/user', userRouter);
  router.use('/mall', mallRouter);
  router.use('/store', storeRouter);
  router.use('/category', categoryRouter);
}

module.exports = routerApi;
