const fs = require("fs");

let movie_db_string = "";

try {
  movie_db_string = String(
    fs.readFileSync(
      "src/config/environment/movie_db.dev.confidential.txt",
      "utf8"
    )
  );
  console.log(movie_db_string);
} catch (err) {
  console.error(err);
}

module.exports = movie_db_string;
