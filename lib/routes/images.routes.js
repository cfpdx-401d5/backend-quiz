const express = require('express');
const Router = express.Router;
const router = Router();
const Image = require('../models/image.model');
const bodyParser = require('body-parser').json();

router

  .post('/images', bodyParser, (req, res, next) => {
    new Image(req.body).save()
      .then (image => {
        if ( !(req.params.title) || !(req.params.category) || !(req.params.url) ) {
          res.status(400).send({ error: 'image data must include title, category, and url' });
        }
        else {
          res.send(image);
        }
      })
      .catch(next);
  })

  .get('/images', (req, res, next) => {
    Image.find()
      .then (image => res.send(image))
      .catch(next);
  })

  .get('/images/:id', (req, res, next) => {
    Image.findById(req.params.id)
      .then (image => {
        if (!image) {
          res.status(404).send({ error: `image Id ${req.params.id} not found`});
        }
        else {
          res.send(image);
        }
      })
      .catch(next);
  })

  .get('/images?category=places', (req, res, next) => {
    Image.find()
      .then (image => {
        if (`${req.params.category}` !== ( 'animals' || 'food' || 'places' )) {
          res.status(400).send({ error: 'image category must be animals or food or places' });
        }
        else {
          res.send(image);
        }
      })
      .catch(next);
  });

module.exports = router;