const movieDB = require("./../models/movie-db.connect");

const fetchMovies = async () => {
  try {
    const movies = await movieDB.query(
      "SELECT movie_id, movie_name, certification, imdb_rating, release_date, poster_path, synopsis FROM movies"
    );
    return movies;
  } catch (error) {
    console.error(error);
  }
};

const insertMovie = async (values) => {
  console.log(values);
  const query = {
    text: `INSERT INTO movies (movie_name, certification, imdb_rating, release_date, poster_path, synopsis, updated_by, last_updated) 
                        VALUES ($1,$2,$3,$4,$5,$6,$7,$8 )`,
    values: values,
  };
  const response = await movieDB.query(query);
  return response;
};
const updateMovie = (id, ...args) => {};
const deleteMovie = (id) => {};

module.exports = {
  fetchMovies,
  insertMovie,
  updateMovie,
  deleteMovie,
};
