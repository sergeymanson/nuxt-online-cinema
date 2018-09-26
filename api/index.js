"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const router = express.Router();
const films = require('./films.json');
const serials = require('./serials.json');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const SETTINGS = {
    page: 1,
    perPage: 18
};

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  req.getParams = querystring.parse(url.parse(req.url).query);
  next();
});

const getDataFromArray = (arr, page, perPage) => {
  const result = {
      data: [],
      pagination: {
          page: page,
          perPage: perPage,
          lastPage: 1
      }
  };
  let from = page*perPage-perPage;
  let to = page*perPage;
  result.data = arr.slice(from, to);
  result.pagination.lastPage = Math.ceil(arr.length/perPage);
  return result;
};

router.get('/api/films', async (req, res) => {
  Object.assign(SETTINGS, req.getParams || {});
  const result = getDataFromArray(films, Number(SETTINGS.page), Number(SETTINGS.perPage));
  return res.json(result);
});

router.get('/api/serials', async (req, res) => {
    Object.assign(SETTINGS, req.getParams || {});
    const result = getDataFromArray(serials, Number(SETTINGS.page), Number(SETTINGS.perPage));
    return res.json(result);
});

module.exports = {
  path: '/',
  handler: router
};
