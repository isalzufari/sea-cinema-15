const routes = (handler) => [
  {
    method: 'GET',
    path: '/',
    handler: handler.getUserHandler,
    options: {
      auth: 'seacinema_jwt'
    },
  },
  {
    method: 'POST',
    path: '/',
    handler: handler.postUserHandler,
  }
]

module.exports = routes;
