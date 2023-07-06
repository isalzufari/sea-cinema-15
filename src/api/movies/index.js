const MoviesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'movies',
  version: '1.0.0',
  register: async (server, { service, seatsService }) => {
    const moviesHandler = new MoviesHandler(service, seatsService);
    server.route(routes(moviesHandler));
  }
}