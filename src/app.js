const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

//sets view directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//tell express how to find and serve static directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/' ,(req, res) => res.render('index', {title:'Index'}));

app.listen(3000, () => console.log('Console running on port 3000'));