const express = require("express");
const {
  getMovies,
  getMovieById,
  addMovie,
} = require("./../../controllers/movies.controller");

const router = express.Router();

router.route("/").get(getMovies).post(addMovie);
router.get("/:id", getMovieById);

module.exports = router;
