import * as bodyParser from 'body-parser';
import express from 'express';
import { Logger } from '../logger/logger';
import { ConfigData } from '../models/config-data';

class Coupons {
  public express: express.Application;
  public logger: Logger;
  public coupons?: number[];

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.logger = new Logger();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    // request to get random coupons
    this.express.post('/coupons', (req, res, next) => {
      this.logger.info('url::::' + req.url);
      const configData: ConfigData = req.body;
      if (configData) {
        this.coupons = this.generateCoupons(configData);

        res.json(this.coupons);
      } else {
        this.logger.error('url::::' + req.url);
      }
    });
  }

  private generateCoupons(configData: ConfigData) {
    const generatorType = configData.algorithm;
    const coupons: number[] = [];

    if (generatorType === 'random') {
      for (let i = 0; i < configData.amount; i++) {
        coupons.push(i);
      }
    } else if (generatorType === 'odd') {
      for (let i = 0; i < configData.amount; i++) {
        coupons.push(i * 2);
      }
    } else {
    }

    return coupons;
  }
}

export default new Coupons().express;
