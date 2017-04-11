const chai = require('chai');
const app = require('../lib/app');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;

const request = chai.request(app);

let monkey = { title: 'little monkey', category: 'animals', url: 'http://littlemonkey.png', description: 'little monkey on a swing' };

let donkey = { title: 'burro', category: 'animals', url: 'http://littledonkey.png', description: 'might be a burro' };

let france = { title: 'cabrarets', category: 'places', url: 'http://cabrarets.png', description: 'ancient village' };

describe('build an image list api', (done) => {
    it('post an image', () => {
        return request.post('/imagedata')
            .send(monkey)
            .then(res => {
                assert.ok(monkey._id = res.body._id);
            });
    });
});