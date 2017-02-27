const bodyParser = require('body-parser').json();
const express = require('express');

const Image = require('../models/image');

const Router = express.Router;
const imageRouter = Router();

imageRouter
    .post('/', bodyParser, (req, res, next) => {
        new Image(req.body).save()
        .then(image => {res.send(image);})
        .catch(next);
    })

    .get('/', (req, res, next) => {
        Image.find()
        .then(images => res.send(images))
        .catch(next);
    })
    ;
module.exports = imageRouter;
