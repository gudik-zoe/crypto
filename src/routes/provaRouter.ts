import { Router } from 'express';
const controller = require('../controllers/controller');
const router = Router();

router.get('/', controller.login);

router.get('/crypto', controller.getExternalApi);

router.get('/lunarcrush/:coin', controller.getLunarCrush);

module.exports = router;
