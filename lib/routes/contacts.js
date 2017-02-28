const router = require('express').Router();
// const bodyParser = require('body-parser').json();
const Contact = require('../models/contact');

router

    .get('/', (req, res, next) => {
        Contact.find().lean()
            .then(contacts => res.send(contacts))
            .catch(next);
    });

    // TODO: GET to /contacts/:id:

    // TODO: GET to /contacts?category=work:

    // TODO: POST to /contacts:

module.exports = router;