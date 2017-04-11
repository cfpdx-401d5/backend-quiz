const assert = require('chai').assert;
const Image = require('../../lib/models/images-schema');
const testInvalid = require('./test-invalid')(Image);

describe('image model', () => {
    it('requires a title', () => {
        return testInvalid({ description: 'a beautiful sunset', category: 'places', url: '/directory/file.jpg' });
    });

    it('requires a category', () => {
        return testInvalid({ title: 'Sunset on the Zambezi', description: 'a beautiful sunset', url: '/directory/file.jpg' });
    });

    it('requires a enumerated category', () => {
        return testInvalid({ title: 'Sunset on the Zambezi', description: 'a beautiful sunset', category: 'childhood', url: '/directory/file.jpg' });
    });

    it('requirs a url', () => {
        return testInvalid({ title: 'Sunset on the Zambezi', description: 'a beautiful sunset', category: 'places' });
    });
});