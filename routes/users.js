const router = require('express').Router();
const {
  getCurrentUser,
  updateUserInfo,
} = require('../controllers/users');
// const {
//   validateCurrentUser,
//   validateUpdateUser,
// } = require('../middlewares/validation');

const userRouter = Router();

router.get('/me', validateCurrentUser, getCurrentUser);

router.patch('/me', validateUpdateUser, updateUserInfo);

module.exports = userRouter;