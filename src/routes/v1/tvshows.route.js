const express = require("express");
const router = express.Router();

router.route("/").get((req, res, next) => {
  res.json({
    id: "01",
    name: "Breaking Bad",
  });
});

module.exports = router;
