const bodyParser = require('body-parser').json();
const Contact = require('../models/contacts');
const contactRouter = require('express').Router();

contactRouter
    .post('/', bodyParser, (req, res, next) => {
        new Contact(req.body).save()
            .then(contact => { res.send(contact); })
            .catch(next);
    })
    
    .get('/', (req, res, next) => {
        Contact.find()
            .then(contacts => res.send(contacts))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Contact.findById(req.params.id)
            .then(contact => {
                if (!contact) {
                    res.status(404).send({ error: `Id ${req.params.id} Not Found` });
                } else {
                    res.send(contact);
                }
            })
            .catch(next);
    })

    .get('/', (req, res, next) => {
        const category = req.query.category;
        Contact.find(category)
            .then(contact => {
                if (category === 'school' || category === 'work' || category === 'personal') {
                    res.send(contact)
                } else {
                    res.status(404).send({ error: `${req.query.category} Not Found` });
                }
            })
    })

module.exports = contactRouter;