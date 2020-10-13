const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const express = require('express');
const morgan = require('morgan');

const apiRouter = require('./api/api.js');

const app = express();
const PORT = process.env.PORT || 4000;

//app usage of package helpers
app.use(bodyParser.json());
app.use(cors());

//morgan depending on env
if (app.get('env') !== 'production') {
    app.use(morgan('dev'));
}


app.use('/api', apiRouter);
app.use(errorhandler());

app.listen(PORT, () => {
    console.log(`App listen on port ${PORT}!`);
})
module.exports = app;