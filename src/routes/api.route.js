const express = require("express");
const auth = require("./v1/auth.route");
const movies = require("./v1/movies.route");
const tvShows = require("./v1/tvshows.route");

const router = express.Router();

// all version 1 api routes
router.use("/v1/auth", auth);
router.use("/v1/movies", movies);
router.use("/v1/tvShows", tvShows);

// any version 2 api routes could go below

module.exports = router;
