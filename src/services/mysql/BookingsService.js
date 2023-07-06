const pool = require('../../utils/MySQL');
const InvariantError = require('../../exceptions/InvariantError');

class BookedService {
  constructor() {
    this._pool = pool.promise();
  }

  async getBooked({ id_user }) {
    const query = {
      text: `SELECT * FROM booked WHERE id_user = ?`,
      values: [id_user]
    };

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    return result;
  }

  async addBooked({ id_user, id_movie, total_cost }) {
    const query = {
      text: 'INSERT INTO booked (id_user, id_movie, total_cost, payment_status) VALUES (?, ?, ?, ?)',
      values: [id_user, id_movie, total_cost, 1]
    };

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    if (!result.insertId) {
      throw new InvariantError('Booking failure: addBooked');
    }

    return result.insertId;
  }

  async deleteBooked({ id_booked, id_user }) {
    const query = {
      text: 'DELETE FROM booked WHERE id = ? AND id_user = ?',
      values: [id_booked, id_user]
    };

    const [result, fields] = await this._pool.query(
      query.text,
      query.values
    );

    console.log(result);
  }
}

module.exports = BookedService;
