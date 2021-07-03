const express = require("express");
const auth = require("./v1/auth.route");
const movies = require("./v1/movies.route");
const tvShows = require("./v1/tvshows.route");

const router = express.Router();

router.use("/v1/auth", auth);
router.use("/v1/movies", movies);
router.use("/v1/tvShows", tvShows);

module.exports = router;
