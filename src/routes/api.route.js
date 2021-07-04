const express = require("express");
const auth = require("./v1/auth.route");
const movies = require("./v1/movies.route");
const tvShows = require("./v1/tvshows.route");

const router = express.Router();

router.use("/auth", auth);
router.use("/movies", movies);
router.use("/tvShows", tvShows);

module.exports = router;
