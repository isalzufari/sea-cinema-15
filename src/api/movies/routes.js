const routes = (handler) => [
  {
    method: 'GET',
    path: '/',
    handler: handler.getMoviesHandler,
  }
]

module.exports = routes;
