import { resolve } from 'path';
import db from './models/index.mjs';

import initBillsController from './controllers/bills.mjs';

export default function routes(app) {
  // special JS page. Include the webpack index.html file
  const billController = initBillsController(db);
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
  app.put('/bill/create', billController.create);
}
