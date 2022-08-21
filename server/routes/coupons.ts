import * as bodyParser from 'body-parser';
import express from 'express';
import { Logger } from '../logger/logger';
import { ConfigData } from '../models/config-data';

class Coupons {
  public express: express.Application;
  public logger: Logger;
  public coupons?: string[];

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
    const amount = configData.amount;
    let coupons: string[];

    if (generatorType === 'random') {
      // request to get random coupons
      coupons = this.randomGenerate(amount);
    } else if (generatorType === 'even') {
      // request to get secuencial even coupons
      coupons = this.secuencialEvenGenerate(amount);
    } else {
      coupons = [];
    }

    return coupons;
  }

  private randomGenerate(amount: number): string[] {
    const coupons: string[] = [];
    let randomNumber: number;
    let randomString: string;

    for (let i = 0; i < amount; i++) {
      randomNumber = Math.floor(Math.random() * 1000000); // Generates a 6 digits random number between 000000 - 999999
      randomString = this.addZeros(randomNumber);
      coupons.push(randomString);
    }
    return coupons;
  }

  private secuencialEvenGenerate(amount: number): string[] {
    const coupons: string[] = [];
    let evenString: string;
    let counter = 0;

    while (coupons.length < amount) {
      if (counter % 2 === 0) {
        evenString = this.addZeros(counter);
        coupons.push(evenString);
      }
      counter++;
    }
    return coupons;
  }

  private addZeros(nNumber: number) {
    let nString: string;

    if (nNumber.toString().length < 6) {
      nString = '' + nNumber.toString();
      while (nString.length < 6) {
        nString = '0' + nString;
      }
    } else {
      nString = nNumber.toString();
    }

    return nString;
  }
}

export default new Coupons().express;
