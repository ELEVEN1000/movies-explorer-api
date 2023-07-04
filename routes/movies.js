const router = require('express').Router();
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');
// const {
//   validateCreateMovie,
//   validateIdMovie,
// } = require('../middlewares/validation');

const movieRouter = Router();

router.get('/', getMovies);

router.post('/', validateCreateMovie, createMovie);

router.delete('/:movieId', validateIdMovie, deleteMovie);

module.exports = movieRouter;
