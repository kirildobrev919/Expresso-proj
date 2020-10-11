const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 400;

//app usage of package helpers
app.use(bodyParser.json());
app.use(cors());
app.use(errorhandler());
//morgan depending on env
if (app.get(env) !== 'production') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('tiny'));
}


app.listen(PORT, () => {
    console.log(`App listen on port ${PORT}!`);
})
module.exports = app;