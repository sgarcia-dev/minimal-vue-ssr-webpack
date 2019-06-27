const fs = require('fs');
const express = require('express');
const router = require('./router');

const app = express();

app.use('/dist', express.static('dist'));
app.use(router);;

app.listen(3000);
console.log('App listening on http://localhost:3000');