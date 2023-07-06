const BookingsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'bookings',
  version: '1.0.0',
  register: async (server, {
    service,
    ticketsService,
    seatsService,
    balancesService,
    moviesService
  }) => {
    const bookingsHandler = new BookingsHandler(
      service,
      ticketsService,
      seatsService,
      balancesService,
      moviesService
    );
    server.route(routes(bookingsHandler));
  }
}