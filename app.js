const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const xoticRouter = require('./routes/xoticRouter')

const app = express();
app.use(cors());
app.use(morgan('dev'))

app.use(express.json())

app.use('/xotic', xoticRouter);

module.exports = app;
