import express from 'express';
import cors from 'cors';

import { router as categoryRouter } from './router/categoryRoutes.js'
import { router as productsRouter } from './router/productRoutes.js';

export function createServer() {
  const app = express();

  app.use(express.static('./src'));

  app.use(cors());
  app.use('/products', productsRouter);
  app.use('/categories', categoryRouter);

  app.get('/', (req, res) => {
    res.send('Hi');
  });

  return app;
}