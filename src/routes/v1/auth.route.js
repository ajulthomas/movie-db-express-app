const express = require("express");
const router = express.Router();

router.route("/").get((req, res, next) => {
  res.json({
    message: "Login Successful",
  });
});

module.exports = router;
