const pool = require('../../utils/MySQL');
const InvariantError = require('../../exceptions/InvariantError');

class BalanceService {
  constructor() {
    this._pool = pool.promise();
  }

  async getBalanceHistory({ id_balance }) {
    const query = {
      text: 'SELECT amount, status, createdAt FROM balance_history WHERE id_balance = ? ORDER BY id DESC',
      values: [id_balance]
    }

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    return result;
  }

  async addBalanceHistory({ id_balance, amount, status }) {
    const query = {
      text: 'INSERT INTO balance_history (id_balance, amount, status, createdAt) VALUES (?, ?, ?, now())',
      values: [id_balance, amount, status]
    }

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    if (!result.insertId) {
      throw new InvariantError('History Balance gagal ditambahkan: addBalanceHistory');
    }

    return result.insertId;
  }
}

module.exports = BalanceService;
