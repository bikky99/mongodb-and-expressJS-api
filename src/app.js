const express = require('express');
require('../src/db/conn')
const router = require('./routers/men')
const app = express();
const MensRankings = require('./models/mens')


app.use(router)




app.use(express.json());

const port = process.env.PORT || 3000;



app.listen(port);