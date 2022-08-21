import * as bodyParser from 'body-parser';
import express from 'express';
import { Logger } from '../logger/logger';
import Coupons from './coupons';

class Routes {
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
    this.express.use('/', Coupons);
  }
}

export default new Routes().express;
