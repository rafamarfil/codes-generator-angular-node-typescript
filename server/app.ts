import * as bodyParser from 'body-parser';
import express from 'express';

import { Logger } from './logger/logger';
import Routes from './routes/routes';

class App {
  public express: express.Application;
  public logger: Logger;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.logger = new Logger();
  }

  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    this.express.get('/', (req, res, next) => {
      res.sendFile(process.cwd() + '/dist/index.html');
    });

    this.express.use('/api', Routes);

    // handle undefined routes
    this.express.use('*', (req, res, next) => {
      res.send('Wrong url, try once again!!!');
    });
  }
}

export default new App().express;
