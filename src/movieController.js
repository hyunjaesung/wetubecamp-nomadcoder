import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = async (req, res) => {
  const movies = await getMovies();
  res.render("movie", { movies: movies, pageTitle: "Movies!" });
};

const getId = url => {
  const splitedUrl = url.split("/");
  return splitedUrl[1];
};

export const movieDetail = async (req, res) => {
  const url = req.originalUrl;

  if (!url.includes("favicon")) {
    const id = getId(url);
    const movie = await getMovieById(id);
    if (!movie) {
      res.status(404).render("404");
      return;
    }
    res.render("detail", { movie, pageTitle: movie.title });
  }
};

export const filterMovie = async (req, res) => {
  const query = req.query;

  if (query.year) {
    const moviesByMinimumYear = await getMovieByMinimumYear(
      parseInt(query.year)
    );
    res.render("movie", {
      movies: moviesByMinimumYear,
      pageTitle: `Searching by year : ${query.year}`
    });
  } else if (query.rating) {
    const moviesByMinimumRating = await getMovieByMinimumRating(
      parseFloat(query.rating)
    );
    res.render("movie", {
      movies: moviesByMinimumRating,
      pageTitle: `Searching by rating : ${query.rating}`
    });
  } else {
    res.status(404).render("404");
  }
};
