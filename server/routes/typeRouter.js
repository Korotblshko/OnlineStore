const { Router } = require('express'); // Правильный импорт
const router = Router();
const TypeController = require("../controllers/typeController");
const typeController = require('../controllers/typeController');
const checkRole = require("../middleware/checkRoleMiddleware")



router.post('/', checkRole('ADMIN'), typeController.create)

router.get('/', typeController.getAll)

module.exports = router;