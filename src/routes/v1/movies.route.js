const express = require("express");
const {
  getMovies,
  getMovieById,
  addMovies,
} = require("./../../controllers/movies.controller");

const router = express.Router();

router
  .route("/")
  // get list of all movies
  .get(getMovies)
  // adds new movies to the list
  .post(addMovies);

// get movie details from id
router.get("/:id", getMovieById);

module.exports = router;
