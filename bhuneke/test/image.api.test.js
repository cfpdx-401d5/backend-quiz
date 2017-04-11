const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

process.env.MONGODB_URI = 'mongodb://localhost:27017/quiz-test';
const mongoose = require('mongoose');
const app = require('../lib/app');

mongoose.Promise = Promise;

describe('image api', () => {

    before(() => mongoose.connection.dropDatabase());
    const request = chai.request(app);

    function saveImage(resource) {
        return request.post('/images')
            .send(resource)
            .then(res => res.body);
    }

    it('GET empty array', () => {
        return request.get('/images')
            .then(req => req.body)
            .then(res => {
                assert.deepEqual(res, []);
            });
    });

    let imageOne = {
        title: 'titleOne',
        description: 'testTwo',
        category: 'animals',
        url: 'www.image.com'
    };
    let imageTwo = {
        title: 'titleTwo',
        description: 'testTwo',
        category: 'food',
        url: 'www.food.com'
    };

    it('GET all images', () => {
        return Promise.all([
            saveImage(imageOne),
            saveImage(imageTwo)
        ])
        .then(savedImages => {
            imageOne = savedImages[0];
            imageTwo = savedImages[1];
        })
        .then(() => request.get('/images'))
        .then(res => {
            const images = res.body;
            assert.deepEqual(images, [imageOne, imageTwo]);
        });
    });
});