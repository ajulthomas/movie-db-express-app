const fs = require("fs");

let movie_db_password = "";

try {
  movie_db_password = String(
    fs.readFileSync(
      "src/config/environment/movie_db.dev.confidential.txt",
      "utf8"
    )
  );
  console.log(movie_db_password);
} catch (err) {
  console.error(err);
}

module.exports = movie_db_password;
