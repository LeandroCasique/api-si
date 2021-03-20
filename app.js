const express = require('express');
const cors = require("cors");

const app = express();
const db = require('./config/db');
const apiRouter = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('Server runnig');
});