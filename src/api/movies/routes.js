const routes = (handler) => [
  {
    method: 'GET',
    path: '/',
    handler: handler.getMoviesHandler,
  },
  {
    method: 'GET',
    path: '/{id}',
    handler: handler.getMovieHandler,
  }
]

module.exports = routes;
