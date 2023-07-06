const pool = require('../../utils/MySQL');
const InvariantError = require('../../exceptions/InvariantError');

class MoviesService {
  constructor() {
    this._pool = pool.promise();
  }

  async getMovies() {
    const query = {
      text: 'SELECT * FROM movies',
    }

    const [result, fields] = await this._pool.query(
      query.text,
    );

    return result;
  }

  async getMovie({ id }) {
    const query = {
      text: 'SELECT * FROM movies WHERE id = ?',
      values: [id]
    }

    const [result, fields] = await this._pool.query(
      query.text,
      query.values
    );

    return result;
  }
}

module.exports = MoviesService;
