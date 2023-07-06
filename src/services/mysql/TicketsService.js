const pool = require('../../utils/MySQL');
const InvariantError = require('../../exceptions/InvariantError');

class TicketsService {
  constructor() {
    this._pool = pool.promise();
  }

  async getTicket({ id_booked }) {
    const query = {
      text: `SELECT * FROM tickets
      INNER JOIN seats ON seats.id = tickets.id_seat
      WHERE tickets.id_booked = ?`,
      values: [id_booked]
    };

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    return result;
  }

  async addTicket({ id_booked, id_seat, name, age }) {
    const query = {
      text: 'INSERT INTO tickets (id_booked, id_seat, name, age) VALUES (?, ?, ?, ?)',
      values: [id_booked, id_seat, name, age]
    };

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    if (!result.insertId) {
      throw new InvariantError('Ticket gagal ditambahkan: addTicket');
    }

    return result.insertId;
  }

  async deleteTicket({ id_booked, id_seat }) {
    const query = {
      text: 'DELETE FROM tickets WHERE id_booked = ? AND id_seat = ?',
      values: [id_booked, id_seat]
    };

    const [result, fields] = await this._pool.query(
      query.text,
      query.values
    );

    console.log(result);
  }
}

module.exports = TicketsService;
