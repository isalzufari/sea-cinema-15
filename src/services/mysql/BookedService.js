const pool = require('../../utils/MySQL');
const InvariantError = require('../../exceptions/InvariantError');

class BookedService {
  constructor() {
    this._pool = pool.promise();
  }

  async addBooked({ id_user, id_movie, total_cost }) {
    const query = {
      text: 'INSERT INTO booked (id_user, id_movie, total_cost) VALUES (?, ?, ?)',
      values: [id_user, id_movie, total_cost]
    };

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    if (!result.insertId) {
      throw new InvariantError('Booked gagal ditambahkan: addBooked');
    }

    return result.insertId;
  }

  async deleteBooked({ id_booked }) {
    const query = {
      text: 'DELETE FROM booked WHERE id = ?',
      values: [id_booked]
    };

    const [result, fields] = await this._pool.query(
      query.text,
      query.values
    );

    console.log(result);
  }
}

module.exports = BookedService;
