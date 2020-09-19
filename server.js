const path = require('path');
const express = require('express');

const app = express();

//set STATIC
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;
console.log("hare krishna");
app.listen(PORT); 