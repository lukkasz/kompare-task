const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 9000;
const ENV = process.env.NODE_ENV || 'development';

console.log(" Node ENV:", ENV);

if ( ENV !== 'production' ) {
  const webpack = require('webpack');
  const config = require('./../webpack.config');
  var compiler = webpack(config);
 
  app.use(require('webpack-dev-middleware')(compiler));
  app.use(require('webpack-hot-middleware')(compiler));   
}

app.use(bodyParser.json());
// Server Loggin
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
// Routes
app.use('/', routes);

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});