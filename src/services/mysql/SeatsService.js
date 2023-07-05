const pool = require('../../utils/MySQL');

class BookedService {
  constructor() {
    this._pool = pool.promise();
  }

  async bookedSeat({ id }) {
    const query = {
      text: 'UPDATE seats SET isBooked = 1 WHERE id = ?',
      values: [id]
    }

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    console.log(result);
    return result;
  }

  async unBookedSeat({ id }) {
    const query = {
      text: 'UPDATE seats SET isBooked = 0 WHERE id = ?',
      values: [id]
    }

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    console.log(result);
    return result;
  }
}

module.exports = BookedService;
