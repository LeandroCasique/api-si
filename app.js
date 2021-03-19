const express = require('express');

const app = express();
const db = require('./config/db');
const apiRouter = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('Server runnig');
});