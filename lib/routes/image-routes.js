const express = require('express');
const Router = express.Router;
const imageRouter = Router();
const Image = require('../models/image-model');
const bodyParser = require('body-parser').json();

imageRouter
    .post('/', bodyParser, (req, res, next) => {
        return new Image(req.body).save()
            .then(image => {
                // if(!image) {
                //     res.status(400).send({error: 'Validation failed.'})
                // } else {               
                    res.send(image)
                // }
            })
            .catch(next);
    })

module.exports = imageRouter;