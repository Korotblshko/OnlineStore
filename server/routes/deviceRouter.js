const uuid = require('uuid')
const { Router } = require('express'); 
const multer = require('multer');
const path = require('path');
const deviceController = require("../controllers/deviceController")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '..', 'static')); // Папка для сохранения файлов
  },
  filename: (req, file, cb) => {
    cb(null, `${uuid.v4()}${path.extname(file.originalname)}`); // Уникальное имя с расширением
  },
});

const upload = multer({ storage });

const router = new Router()

router.post('/', upload.single('img'), deviceController.create); // Обрабатываем файл с ключом 'img'
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);

module.exports = router
