module.exports = function(Model) {
    return (data) => new Model(data)
        .validate()
        .then(
            () => {
                throw new Error('Validation should not have succeeded.');
            },
            () => { /* error was expected, nothing to do */ }
        );
};