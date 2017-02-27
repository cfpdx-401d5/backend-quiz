const bodyParser = require('body-parser').json();
const express = require('express');

const Image = require('../models/images');

const Router = express.Router;
const imageRouter = Router();

imageRouter

    .get('/', bodyParser, (req, res, next) => {
        Image.find()
            .then(images => res.send(images._id, images.title, images.category))
            .catch(next);
    })
    .post('/', bodyParser, (req, res, next) => {
        new Image(req.body).save()
            .then(image => {
                res.send(image);
            })
            .catch(next);
    });

module.exports = imageRouter;