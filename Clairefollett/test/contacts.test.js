const chai = require('chai');
const chaiHttp = require('chai-Http');
const mongoose = require('mongoose');

const app = require('../lib/app');

const assert = chai.assert;

chai.use(chaiHttp);

process.env.DB_URL = 'mongodb://localhost:27017/backend-quiz-test';
require('../lib/connection');

describe('contacts routes', () => {

    const request = chai.request(app);

    let contactOne = {
        name: 'Claire Follett',
        email: 'chlaw101@gmail.com',
        company: 'Code Fellows',
        notes: 'loves dogs',
        category: 'school'
    }

    before(() => mongoose.connection.dropDatabase());

    it('posts a new contact', () => {
        return request.post('/contacts')
            .send(contactOne)
            .then(res => {
                contactOne = res.body;
                assert.equal(res.body.name, 'Claire Follett')
                assert.equal(res.body.email, 'chlaw101@gmail.com')
                assert.equal(res.body.company, 'Code Fellows')
                assert.equal(res.body.notes, 'loves dogs')
                assert.equal(res.body.category, 'school')
                assert.equal(res.body._id, contactOne._id)
            })
    })

    it('gets the contact by id that we just posted', () => {
        return request.get(`/contacts/${contactOne._id}`)
            .then(res => {
                assert.equal(res.body.name, 'Claire Follett')
                assert.equal(res.body.email, 'chlaw101@gmail.com')
                assert.equal(res.body.company, 'Code Fellows')
                assert.equal(res.body.notes, 'loves dogs')
                assert.equal(res.body.category, 'school')
                assert.equal(res.body._id, contactOne._id)        
            })
    })

    it('gets the contact by the requested query', () => {
        return request.get(`/contacts?category=school`)
            .then(res => {
                assert.isDefined(res.body[0]._id)
                assert.equal(res.body[0]._id, contactOne._id)
                assert.equal(res.body[0].category, contactOne.category)
            })
    })
})