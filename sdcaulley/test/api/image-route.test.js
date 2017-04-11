const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const app = require('../../lib/app');
const request = chai.request(app);

describe('images api', () => {
    let imageOne = { title: 'Sunset on the Zambezi', description: 'a beautiful sunset', category: 'places', url: '/directory/file.jpg' };

    let imageTwo = {
        title: 'cute kitten at table',
        description: 'adorable kitten doing lunch',
        category: 'animals',
        url: 'http://image.png'
    };

    const badRequest = (url, data, error) => {
        request
            .post(url)
            .send(data)
            .then(
                () => { throw new Error('status should not be ok.'); },
                res => {
                    assert.equal(res.status, 400);
                    assert.equal(res.response.body.error, error);
                }
            );
    };

    describe('post routes', () => {
        it('/post save a new image', () => {
            return request.post('/images')
                .send(imageTwo)
                .then(res => {
                    imageTwo._id = res.body._id;
                    imageTwo.__v = 0;
                    assert.deepEqual(res.body, imageTwo);
                });
        });

        it('returns 400 when all data is not supplied', () => {
            badRequest('/images', { description: 'a beautiful sunset', category: 'places', url: '/directory/file.jpg' }, 'title, category and url must be supplied');
        });

        //     it('/post/images/:id changes id of image', () => {
        //     not working need to come back
        //         console.log('imageTwo: ', imageTwo._id);
        //         request.post(`/images/${imageTwo._id}`)
        //             .send({ _id: '123abc' })
        //             .then(res => {
        //                 assert.equal(res.body._id, '123abc');
        //             });
        // });
    });

    describe('get routes', () => {
        it('get all', () => {
            request.get('/images')
                .then(res => {
                    assert.isArray(res.body);
                });
        });
    });

    it('get image by id', () => {
        request.get(`/images/${imageTwo._id}`)
            .then(res => {
                assert.equal(res.body._id, imageTwo._id);
            });
    });
});