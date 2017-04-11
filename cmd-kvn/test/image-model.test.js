const Image = require('../lib/models/image');

let testImage = {
    title: 'eggs',
    description: 'this isn\'t required',
    category: 'food',
    url: 'http://www.myimage.com'
};

describe('Image model', () => {

    it('validation passes with all required fields', () => {
        return new Image(testImage)
            .validate();
    });

});