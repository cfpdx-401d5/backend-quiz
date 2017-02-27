module.exports = function getErrorHandler() {
    return function errorHandler(err, req, res, next) => {
        let code = 500, error = 'internal service error';

        if (err.name === 'Validation error' || err.name === 'Cast error') {
            code = 400;
            error = err.errors;
        }
        else if (err.code) {
            code = err.code;
            error = err.error;
            console.log('this is not a mongoose validation error', code, error);
        }
        else {
            console.log('unexpected error', err);
        }

        res.status(code).send({ error });
    };
};