require('dotenv').config();

const Hapi = require('@hapi/hapi');

// JWT
const Jwt = require('@hapi/jwt');

const ClientError = require('./exceptions/ClientError');

// Services
const users = require('./api/users');
const UsersService = require('./services/mysql/UsersService');

const authentications = require('./api/authentications');
const AuthenticationsService = require('./services/mysql/AuthenticationsService');
const TokenManager = require('./utils/TokenManager');

const balances = require('./api/balance');
const BalancesService = require('./services/mysql/BalancesService');
const BalancesHistoryService = require('./services/mysql/BalancesHistoryService');

const movies = require('./api/movies');
const MoviesService = require('./services/mysql/MoviesService');

const bookings = require('./api/bookings');
const BookingsService = require('./services/mysql/BookingsService');
const TicketsService = require('./services/mysql/TicketsService');
const SeatsService = require('./services/mysql/SeatsService');

const init = async () => {
  const usersService = new UsersService();
  const balancesService = new BalancesService();
  const balancesHistoryService = new BalancesHistoryService();
  const authenticationsService = new AuthenticationsService();
  const moviesService = new MoviesService();
  const bookingsService = new BookingsService();
  const ticketsService = new TicketsService();
  const seatsService = new SeatsService();

  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: () => {
      return ({
        status: 'success'
      });
    }
  });

  await server.register(Jwt);

  server.auth.strategy('seacinema_jwt', 'jwt', {
    keys: process.env.ACCESS_TOKEN_KEY,
    verify: {
      aud: false,
      iss: false,
      sub: false,
      maxAgeSec: process.env.ACCESS_TOKEN_AGE,
    },
    validate: (artifacts) => ({
      isValid: true,
      credentials: {
        id: artifacts.decoded.payload.id,
      }
    }),
  });

  server.ext('onPreResponse', (request, h) => {
    const { response } = request;

    if (response instanceof ClientError) {
      const newResponse = h.response({
        status: 'fail',
        message: response.message,
      });
      newResponse.code(response.statusCode);
      return newResponse;
    }

    return response.continue || response;
  });

  await server.register([
    {
      plugin: users,
      options: {
        service: usersService,
        balancesService
      },
      routes: {
        prefix: '/users'
      },
    },
    {
      plugin: authentications,
      options: {
        authenticationsService,
        usersService,
        tokenManager: TokenManager,
      },
      routes: {
        prefix: '/authentications'
      }
    },
    {
      plugin: movies,
      options: {
        service: moviesService,
        seatsService
      },
      routes: {
        prefix: '/movies'
      }
    },
    {
      plugin: balances,
      options: {
        service: balancesService,
        balancesHistoryService,
      },
      routes: {
        prefix: '/balance'
      }
    },
    {
      plugin: bookings,
      options: {
        service: bookingsService,
        ticketsService,
        seatsService,
        balancesService,
        moviesService
      },
      routes: {
        prefix: '/booking'
      }
    }
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
}

init();