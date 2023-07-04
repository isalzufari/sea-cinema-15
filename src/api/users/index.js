const UsersHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'users',
  version: '1.0.0',
  register: async (server, { service, balancesService }) => {
    const usersHandler = new UsersHandler(service, balancesService);
    server.route(routes(usersHandler));
  }
}