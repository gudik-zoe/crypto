"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller = require('../controllers/controller');
const router = (0, express_1.Router)();
router.get('/', controller.login);
router.get('/crypto', controller.getExternalApi);
router.get('/lunarcrush/:coin', controller.getLunarCrush);
module.exports = router;
