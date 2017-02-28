const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

// const Contact = require('../lib/models/contact');

const app = require('../lib/app');
const request = chai.request(app);

describe('CONTACTS API ROUTE TESTS', () => {

    it('GET /contacts returns an empty array', () => {
        return request.get('/contacts')
            .then(res => res.body)
            .then(contacts => assert.deepEqual(contacts, []));
    });

    let max = {
        name: 'maxwell the lion king',
        email: 'noisyboy@codefellowspdx.com',
        company: 'Code Fellows PDX',
        notes: 'little instigator',
        category: 'school'
    };

    it('POST /contacts adds contact per Contact schema', () => {
        return request.post('/contacts')
            .send(max)
            .then(res => res.body)
            .then(savedContact => {
                assert.ok(savedContact._id);
                max._id = savedContact._id;
                assert.equal(savedContact.name, max.name);
                assert.equal(savedContact.email, max.email);
                assert.equal(savedContact.company, max.company);
                assert.equal(savedContact.notes, max.notes);
                assert.equal(savedContact.category, max.category);
            });
    });

});