const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
const cors = require('cors');

app.use(cors);
app.use(bodyParser);
app.use('/api', userRoutes);


app.listen(PORT);