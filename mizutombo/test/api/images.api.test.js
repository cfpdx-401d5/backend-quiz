const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

process.env.MONGODB_URI = 'mongodb://localhost:27017/images-REST';
const connection = require('../../lib/connection');
const mongoose = require('mongoose');
const app = require('../../lib/app');

describe('images REST API : ', () => {

  before(() => mongoose.connection.dropDatabase());

  const request = chai.request(app);

  const paris = {
    title: 'Eiffel Tower',
    description: 'View of Paris with Eiffel Tower',
    category: 'Places',
    url: 'http://assets.fodors.com/destinations/705529/eiffel-tower-paris-france_main.jpg'
  };

  it('/GET returns empty array of images', () => {
    return request.get('/images')
      .then (req => req.body)
      .then (images => assert.deepEqual(images, []));
  });

  function saveImage(image) {
    return request.post('/images')
      .send(image)
      .then(res => res.body);
  }

  it('saves an image', () => {
    return saveImage(paris)
      .then (savedImage => {
        assert.isOk(savedImage._id);
        paris._id = savedImage._id;
        assert.deepEqual(savedImage, paris);
      });
  });

  it('gets saved image', () => {
    return request.get(`/images/${paris._id}`)
      .then (res => {
        assert.deepEqual(res.body, paris);
      });
  });

});