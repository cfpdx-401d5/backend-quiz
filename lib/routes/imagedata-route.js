const router = require('express').Router();
const bodyParser = require('body-parser').json();
const Imagedata = require('../models/imagedata-schema');

router
    .post('/', bodyParser, (req, res, next) => {
        new Imagedata(req.body).save()
            .then(imagedata => res.send(imagedata))
            .catch(next);
    });
module.exports = router;