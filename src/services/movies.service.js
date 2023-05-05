const movieDB = require("./../models/movie-db.connect");
const format = require("pg-format");

const fetchMovies = async () => {
  try {
    const movies = await movieDB.query(
      "SELECT movie_id, movie_name, certification, imdb_rating, release_date, poster_path, synopsis FROM movies"
    );
    movieDB.end(() => console.log("Pool has ended"));
    return movies.rows;
  } catch (error) {
    console.error("error while querying:", error);
  }
};

const insertMovie = async (movies) => {
  try {
    console.log(values);
    const query = format(
      `INSERT INTO movies 
      (movie_name, certification, imdb_rating, release_date, poster_path, synopsis, updated_by, last_updated) 
      VALUES %L RETURNING movie_id, movie_name`,
      movies
    );
    const result = await movieDB.query(query);
    movieDB.end(() => console.log("Pool has ended"));
    return result;
  } catch (error) {
    console.error("error while querying:", error);
  }
};

const updateMovie = (id, ...args) => {};
const deleteMovie = (id) => {};

module.exports = {
  fetchMovies,
  insertMovie,
  updateMovie,
  deleteMovie,
};
