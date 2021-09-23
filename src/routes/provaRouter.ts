import { Router } from 'express';
const controller = require('../controllers/controller');
const router = Router();

router.get('/', controller.login);

router.get('/crypto', controller.getExternalApi);

module.exports = router;
