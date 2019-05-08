const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 3000;
const userRoutes = require('./routes/user.routes');
const factRoutes = require('./routes/facts.routes');
const cors = require('cors');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}


app.use(allowCrossDomain);


app.use(bodyParser.json());
app.use('/api/users/', userRoutes);
app.use('/api/facts/', factRoutes);


app.listen(PORT);