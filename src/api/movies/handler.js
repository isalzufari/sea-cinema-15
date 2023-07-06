const axios = require('axios');

class MoviesHandler {
  constructor(service, seatsService) {
    this._service = service;
    this._seatsService = seatsService;

    this.getMoviesHandler = this.getMoviesHandler.bind(this);
    this.getMovieHandler = this.getMovieHandler.bind(this);
  }

  async getMoviesHandler(request, h) {
    // const { data } = await axios.get('https://seleksi-sea-2023.vercel.app/api/movies');
    const movies = await this._service.getMovies();

    const response = h.response({
      status: 'success',
      data: movies,
    });
    response.code(201);
    return response;
  }

  async getMovieHandler(request, h) {
    const { id } = request.params;

    const movie = await this._service.getMovie({ id });
    const seats = await this._seatsService.getMovieSeats({ id_movie: id })

    const mappedMovie = movie.map((mov) => ({
      ...mov,
      seats
    }))

    const response = h.response({
      status: 'success',
      data: mappedMovie[0]
    });
    response.code(201);
    return response;
  }
}

module.exports = MoviesHandler;
