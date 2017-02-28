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
                if(!image) {
                    res.status(400).send({error: 'Invalid Image Submission'});
                }
                else {
                    res.send(image);
                }
            })
            .catch(next);
    })
    .get('/:id', bodyParser, (req, res, next) => {
        const id = req.params.id;
        Image.findOne({ _id: id })
            .then(image => {
                if(!image){
                    res.status(404).send({ error: 'Image ID does not exists'});
                }
                else {
                    res.send(image);
                }
            })
            .catch(next);
    });
    //TODO: Create findy by category GET... .get('images?category')

module.exports = imageRouter;