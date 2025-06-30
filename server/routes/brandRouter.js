const { Router } = require('express'); // Правильный импорт
const router = Router();
const BrandController = require("../controllers/brandController");
const brandController = require('../controllers/brandController');

router.post('/', brandController.create)

router.get('/', brandController.getAll)

module.exports = router;