const express = require('express');
const logger = require('morgan');
// creating a new instance of express server
const app = express();
const port = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));

app.set('view engine', 'ejs');
app.set('views', './views');

// setting up the correct path to public folder
app.set(express.static(__dirname, 'public'));

app.listen(port, () => consoloe.log(`The server is SMASHIN' on port ${port}`))
