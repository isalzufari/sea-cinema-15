const routes = (handler) => [
  {
    method: 'POST',
    path: '/',
    handler: handler.postUserHandler,
  }
]

module.exports = routes;
