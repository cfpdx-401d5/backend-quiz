const express = require('express');
const Router = express.Router;
const imageRouter = Router();
const Image = require('../models/image-model');
const bodyParser = require('body-parser').json();

imageRouter
    .post('/', bodyParser, (req, res, next) => {
        return new Image(req.body).save()
            .then(image => {             
                res.send(image);
            })
            .catch(next);
    })
    .get('/', (req, res, next) => {
        const query = {};
        if(req.query.type) {
            query.type = req.query.type;
        }
        Image.find(query)
            .then(images => res.send(images))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        let id = req.params.id;
        Image.findById(id)
            .then(image => {
                if(!image) {
                    res.status(404).send({error: 'Cannot find'});
                } else {
                    res.send(image);
                }
            })
            .catch(next);
    });

module.exports = imageRouter;