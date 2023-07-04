const routes = (handler) => [
  {
    method: 'GET',
    path: '/',
    handler: handler.getBalanceHandler,
  },
  {
    method: 'POST',
    path: '/topup',
    handler: handler.topUpBalanceHandler,
    options: {
      auth: 'seacinema_jwt'
    },
  },
  {
    method: 'POST',
    path: '/withdraw',
    handler: handler.withDrawBalanceHandler,
    options: {
      auth: 'seacinema_jwt'
    },
  }
];

module.exports = routes;
