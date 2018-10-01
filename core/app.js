require('dotenv').config();
const path = require('path');
/*express*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router/index');
/*db*/
const sqlite = require('sqlite');
const db = sqlite.open('./app/db/vendor/test.sqlite');
/*nuxt*/
const {Builder, Nuxt} = require('nuxt');
const config = require('../nuxt.config.js');
/*settings server*/
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

app.use('/api', router);
app.set('port', port);
app.use(bodyParser.json());
app.use(express.static('assets'));


config.dev = !(process.env.TYPE === 'prod');
const nuxt = new Nuxt(config);

if (config.dev) {
    const builder = new Builder(nuxt);
    builder.build();
}

app.use(nuxt.render);

app.listen(port, host, () => {
    console.info('> Server listening on ' + host + ':' + port);
});
