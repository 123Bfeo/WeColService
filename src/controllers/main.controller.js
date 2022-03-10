const fs = require('fs');
const path = require('path');
const products = JSON.parse(
  fs.readFileSync(path.resolve('src/models/products.JSON'))
);

const mainController = {
  index: (req, res) => {
    res.render('index', { products: products });
  },
  aboutUs: (req, res) => {
    res.render('aboutUs');
  },
  contact: (req, res) => {
    res.render('contact');
  },
  privacyPolitics: (req, res) => {
    res.render('privacyPolitics');
  },
  agreePolitics: (req, res) => {
    res.render('agreePolitics');
  },
  register: (req, res) => {
    res.render('./users/register');
  },
  login: (req, res) => {
    res.render('./users/login');
  },
};

module.exports = mainController;
