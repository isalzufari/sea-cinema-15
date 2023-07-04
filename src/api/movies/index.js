const MoviesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'movies',
  version: '1.0.0',
  register: async (server) => {
    const moviesHandler = new MoviesHandler();
    server.route(routes(moviesHandler));
  }
}