import * as express from 'express';
import { Constants } from '../constants/constants';
import { Crypto } from '../models/crypto';
const https = require('https');

exports.login = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    return res.json('hello world');
  } catch (err) {
    console.log(err);
  }
};

exports.getExternalApi = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  https
    .get(
      'https://api.nomics.com/v1/currencies/ticker?key=94a41b91ba95d2cfe32e673709d966a78054e0c1&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1',
      (response: any) => {
        let data = '';
        response.on('data', (chunk: Crypto) => {
          data += chunk;
        });
        // console.log(data);
        response.on('end', () => {
          let result: Crypto[] = JSON.parse(data);
          console.log(result[0].id);
          return res.status(200).json(result);
        });
      }
    )
    .on('error', (err: any) => {
      console.log(err);
    });
};

exports.getLunarCrush = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const coin = req.params.coin;
  https
    .get(
      `https://api.lunarcrush.com/v2?data=assets&key=${Constants.API_KEY}&symbol=${coin}`,
      (response: any) => {
        let data = '';
        response.on('data', (chunk: Crypto) => {
          data += chunk;
        });
        response.on('end', () => {
          let result: any = JSON.parse(data);
          new Date().getTime() - result.data[0].time;
          return res.status(200).json(result);
        });
      }
    )
    .on('error', (err: any) => {
      console.log(err);
    });
};
