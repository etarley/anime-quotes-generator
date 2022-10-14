const express = require('express');
const app = express();
const port = 3000;
import { Router } from 'express';
const Quote = require('./quotes');

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Add routes
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;

routes.post('/quote', async (req, res) => {
  const quote = new Quote({
    ...req.body,
  });
  try {
    await quote.save();
    res.status(201).send(quote);
  } catch (e) {}
});

routes.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
