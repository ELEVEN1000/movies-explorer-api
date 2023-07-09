const jwt = require('jsonwebtoken');
const JWT = require('../utils/constants');

const { NODE_ENV, JWT_SECRET = 'some-secret-key' } = process.env;
const UnauthorizedError = require('../errors/UnauthorizedError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const bearer = 'Bearer ';
  if (!authorization || !authorization.startsWith(bearer)) {
    next(new UnauthorizedError('Необходима авторизация'));
    return;
  }
  const token = authorization.replace(bearer, '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : JWT);
  } catch (err) {
    next(new UnauthorizedError('Необходима авторизация'));
    return;
  }

  req.user = payload;
  next();
};