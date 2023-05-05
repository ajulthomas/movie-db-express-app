const movieService = require("./../services/movies.service");

const getMovies = (req, res) => {
  // console.log(req);
  // validate the request params
  movieService.fetchMovies().then((movies) => {
    console.log(movies);
    res.json(movies);
  });
};

const getMovieById = (req, res) => {
  console.log(req);
};

const addMovies = (req, res) => {
  try {
    const reqBody = req.body;
    console.log(reqBody);
    // validate the request
    if (reqBody.userId && reqBody.movies && reqBody.movies.length > 0) {
      const movies = reqBody.movies;
      let value = [];
      movies.forEach((movie) => {
        let data = [
          movie_name,
          certification,
          imdb_rating,
          release_date,
          poster_path,
          synopsis,
          updated_by,
          last_updated,
        ];
      });
      res.json({
        status: "success",
      });
    } else {
      throw new Error("BAD REQUEST");
    }
    //extract values from request and pass on to service
  } catch (error) {
    console.error("Error while processing request : ", error);
  }
};

module.exports = {
  getMovies,
  getMovieById,
  addMovies,
};
