const pool = require('../../utils/MySQL');
const InvariantError = require('../../exceptions/InvariantError');

class BookedService {
  constructor() {
    this._pool = pool.promise();
  }

  async getMovieSeats({ id_movie }) {
    const query = {
      text: 'SELECT * from seats WHERE id_movie = ?',
      values: [id_movie],
    };

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    return result;
  }

  async bookedSeat({ id_seat }) {
    const query = {
      text: 'UPDATE seats SET isBooked = 1 WHERE id = ?',
      values: [id_seat]
    }

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    if (!result.affectedRows) {
      throw new InvariantError('Booked seat failure: bookedSeat');
    }
  }

  async unBookedSeat({ id_seat }) {
    const query = {
      text: 'UPDATE seats SET isBooked = 0 WHERE id = ?',
      values: [id_seat]
    }

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    if (!result.affectedRows) {
      throw new InvariantError('Unbooked seat failure: unBookedSeat');
    }
  }
}

module.exports = BookedService;
