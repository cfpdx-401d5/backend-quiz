const chai = require('chai');
const chaiHttp = require('chai-Http');
const mongoose = require('mongoose');

const app = require('../../lib/app');

const assert = chai.assert;

chai.use(chaiHttp);

process.env.DB_URI = 'mongodb://localhost:27017/backend-quiz-images-REST';
require('../../lib/connection');

describe('images API', () => {

    const request = chai.request(app);

    let testingImage = {
        title: 'bacon',
        description: 'this isn\'t required',
        category: 'food',
        url: 'http://www.bacon.com/'
    };

    let postedImage = [];

    before(() => mongoose.connection.dropDatabase());

    it('POSTs an image', () => {
        return request
            .post('/images')
            .send(testingImage)
            .then(res => {
                postedImage = res.body;
                assert.isDefined(res.body._id);
                assert.equal(res.body.title, 'bacon');
                assert.equal(res.body.category, testingImage.category);
                assert.equal(res.body.url, testingImage.url);
            });
    });

    it('GETs the POSTed image', () => {
        return request
            .get('/images')
            .then(res => {
                const gotImage = res.body;
                assert.deepEqual(gotImage[0], postedImage);
            });
    });

    it('GETs the image by id', () => {
        return request
            .get(`/images/${postedImage._id}`)
            .then(res => {
                assert.deepEqual(res.body, postedImage);
            });
    });

});