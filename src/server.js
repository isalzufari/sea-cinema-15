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

const init = async () => {
  const usersService = new UsersService();
  const authenticationsService = new AuthenticationsService();

  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register([
    {
      plugin: users,
      options: {
        service: usersService
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
    }
  ])

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
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: () => {
      return ({
        status: 'success'
      });
    }
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
}

init();