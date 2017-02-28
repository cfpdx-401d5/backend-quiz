const Image = require('../lib/models/images');
const assert = require('chai').assert;
const testInvalid = require('./test-invalid')(Image);

let testImage = {
    title: 'cute frolicking chipmunks',
    category: 'animal',
    url: 'http://www.cutestchipmunks.com/frolick.jpg'
};

let badTestImage = {
    title: 'gross omelette',
    category: 'food'
};

let badTestImage2 = {
    category: 'places',
    url: 'http://italy.com/venice.png'
};

let badTestImage3 = {
    title: 'friends in need',
    url: 'http://www.friendship.net/friend-need.jpeg'
};

let badTestImage4 = {
    title: 'friends in need',
    category: 'humans',
    url: 'http://www.friendship.net/friend-need.jpeg'
};

describe('image model: ', () => {

    it('requires a url', () => {
        return testInvalid(badTestImage);
    });

    it('requires a title', () => {
        return testInvalid(badTestImage2);
    });

    it('requires a category', () => {
        return testInvalid(badTestImage3);
    });

    it('requires \'animals\', \'food\' or \'places\' in category', () => {
        return testInvalid(badTestImage4);
    });

    it('validation passes with all required values', () => {
        return new Image(testImage)
            .validate();
    });
});