const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

const app = require('../lib/app');

const assert = chai.assert;

chai.use(chaiHttp);

process.env.DB_URI = 'mongodb://localhost:27017/images-REST';
require('../lib/connection');

describe('images REST API', () => {
    before(() => mongoose.connection.dropDatabase());
    const request = chai.request(app);

    let testImage0 = {
    title: 'cute frolicking chipmunks',
    category: 'animal',
    url: 'http://www.cutestchipmunks.com/frolick.jpg'
    };

    function saveImage(image) {
        return request.post('/images')
            .send(image)
            .then(res => res.body);
    }

    it('returns a list of images', () => {
        saveImage(testImage0)
            .then(savedImage => {
                console.log('TEST IMAGE', testImage0);
                testImage0 = savedImage[0]
            })
            .then(() => {
                return request
                    .get('/images');
            })
            .then(res => {
                const images = res.body;
                assert.deepEqual(images, [testImage0]);
            });
    });

    it('retrieves an image by id', () => {
        let testImageId = '';

        saveImage(testImage0)
            .then(savedImage => {
                console.log('TEST IMAGE', testImage0);
                testImage0 = savedImage[0];
                testImageId = testImage0._id;
            })
            .then(() => {
                return request
                    .get(`/images/${testImageId}`);
            })
            .then(res => {
                const image = res.body;
                assert.equal(image.title = 'cute frolicking chipmunks');
                assert.equal(image.category = 'animal');
                assert.equal(image.url, 'http://www.cutestchipmunks.com/frolick.jpg');
            });
    });
});