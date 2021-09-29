"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants/constants");
const https = require('https');
exports.login = (req, res, next) => {
    try {
        return res.json('hello world');
    }
    catch (err) {
        console.log(err);
    }
};
exports.getExternalApi = (req, res, next) => {
    https
        .get('https://api.nomics.com/v1/currencies/ticker?key=94a41b91ba95d2cfe32e673709d966a78054e0c1&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1', (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        // console.log(data);
        response.on('end', () => {
            let result = JSON.parse(data);
            console.log(result[0].id);
            return res.status(200).json(result);
        });
    })
        .on('error', (err) => {
        console.log(err);
    });
};
exports.getLunarCrush = (req, res, next) => {
    const coin = req.params.coin;
    https
        .get(`https://api.lunarcrush.com/v2?data=assets&key=${constants_1.Constants.API_KEY}&symbol=${coin}`, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            let result = JSON.parse(data);
            new Date().getTime() - result.data[0].time;
            return res.status(200).json(result);
        });
    })
        .on('error', (err) => {
        console.log(err);
    });
};
