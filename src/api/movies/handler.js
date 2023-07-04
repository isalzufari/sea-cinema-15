const axios = require('axios');

class MoviesHandler {
  constructor(service) {
    this._service = service;

    this.getMoviesHandler = this.getMoviesHandler.bind(this);
  }

  async getMoviesHandler(request, h) {
    const { data } = await axios.get('https://seleksi-sea-2023.vercel.app/api/movies');

    const response = h.response({
      status: 'success',
      data: data,
    });
    response.code(201);
    return response;
  }
}

module.exports = MoviesHandler;
