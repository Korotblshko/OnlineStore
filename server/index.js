require('dotenv').config();
const express = require('express');
const sequelize = require('./db'); // Импорт из db.js
const models = require("./models/models")
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require("./routes/index")
const errorHandler = require("./middleware/ErrorHandlingMiddleware")
const path = require('path')

const app = express();
const PORT = process.env.PORT || 5000; // Фallback на 5000
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))

app.use('/api', router)

// Обработка ошибок, последний мидлвэр
app.use(errorHandler)


const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ alter: true }); // Синхронизация моделей
    console.log('Database synced.');
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.error('Unable to connect to the database:', e);
  }
};

start(); // Запуск асинхронной функции