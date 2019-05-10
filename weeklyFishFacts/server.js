const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const userRoutes = require('./routes/user.routes');
const factRoutes = require('./routes/facts.routes');




app.use(allowCrossDomain);

app.use(express.static(__dirname+"/dist"));

app.use(bodyParser.json());
app.use('/api/users/', userRoutes);
app.use('/api/facts/', factRoutes);

app.get('*', (req, res) => {
      res.sendFile(__dirname + '/dist/index.html');
  });


app.listen(PORT);