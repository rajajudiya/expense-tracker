const express = require('express');
const app = express();
const path = require('path');
const env = require('dotenv')
env.config();
const port = process.env.PORT || 3000;
const Path = path.join(__dirname, '/views');
const router = require('./routes/index.js');
const bodyParser = require('body-parser')
const mongoose = require("./database/database.js");

app.set('view engine', 'ejs');
app.set('views', Path);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('/views'));
app.use('/', router);

app.listen(port, (err) => {
    if (!err) {
        console.log(`Server listening on port http://localhost:${port}`);
    }
})