const routes = (handler) => [
  {
    method: 'GET',
    path: '/',
    handler: handler.getBookingHandler,
    options: {
      auth: 'seacinema_jwt'
    },
  },
  {
    method: 'POST',
    path: '/',
    handler: handler.postBookingHandler,
    options: {
      auth: 'seacinema_jwt'
    },
  },
  {
    method: 'DELETE',
    path: '/',
    handler: handler.deleteBookingHandler,
    options: {
      auth: 'seacinema_jwt'
    },
  }
];

module.exports = routes;
