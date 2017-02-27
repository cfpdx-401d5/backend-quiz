module.exports = function(Model) {
    return (data) => new Model(data)
    .validate()
    .then(
        () => {throw new Error('this validation was supposed to fail');},
        () => {}
    );
};