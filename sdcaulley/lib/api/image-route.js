const router = require('express').Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/images-schema');

function hadInformation(req, res, next) {
    const image = req.body;

    if (!image.title || !image.category || !image.url) {
        return next({
            code: 400,
            error: 'title, category and url must be supplied'
        });
    }
    next();
}

router
    .post('/', bodyParser, hadInformation, (req, res, next) => {
        const data = req.body;
        delete req.body;

        new Image(data).save()
            .then(image => res.send(image))
            .catch(next);
    })
    .post('/:id', bodyParser, hadInformation, (req, res, next) => {

        //TODO: fix to work
        const data = req.body;
        delete req.body;
        console.log('data: ', data);
        Image.findById(req.params.id)
            .then(image => {
                image._id = data._id;
                return image.save();
            })
            .then(image => res.send(image))
            .catch(next);
    })
    .get('/', (req, res, next) => {
        Image.find()
            .then(images => res.send(images))
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        Image.findById(req.params.id)
            .then(image => res.send(image))
            .catch(next);
    });

module.exports = router;