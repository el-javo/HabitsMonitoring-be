const errorWrapper = (fn) => (req, res, next) => fn(req, res, next).catch(next);
module.exports = errorWrapper;
