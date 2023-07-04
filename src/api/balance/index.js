const BalancesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'balances',
  version: '1.0.0',
  register: async (server, { service }) => {
    const balancesHandler = new BalancesHandler(service);
    server.route(routes(balancesHandler));
  }
}