const pool = require('../../utils/MySQL');
const InvariantError = require('../../exceptions/InvariantError');

class BalanceService {
  constructor() {
    this._pool = pool.promise();
  }

  async getBalance({ id_user }) {
    await this.verifyBalance({ id_user });
    const query = {
      text: 'SELECT amount FROM balance WHERE id_user = ?',
      values: [id_user]
    }

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    return result[0];
  }

  async topUpBalance({ amount, id_user }) {
    await this.verifyBalance({ id_user });
    const query = {
      text: 'UPDATE balance SET amount = amount + ? WHERE id_user = ?',
      values: [amount, id_user]
    }

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    console.log(result);
    return result;
  }

  async withdrawBalance({ amount, id_user }) {
    await this.verifyBalance({ id_user });
    const query = {
      text: 'UPDATE balance SET amount = amount - ? WHERE id_user = ?',
      values: [amount, id_user]
    }

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    return result;
  }

  async verifyBalance({ id_user }) {
    const query = {
      text: 'SELECT id_user FROM `balance` WHERE `id_user` = ?',
      values: [id_user],
    };

    const [result, fields] = await this._pool.query(
      query.text,
      query.values
    );

    if (!result.length > 0) {
      throw new InvariantError('Balance not found: verifyBalance');
    }
  }

  async addBalance({ id_user }) {
    const query = {
      text: 'INSERT INTO balance (id_user, amount) VALUES (?, ?)',
      values: [id_user, 0]
    }

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    if (!result.insertId) {
      throw new InvariantError('Balance gagal ditambahkan: addBalance');
    }

    return result.insertId;
  }
}

module.exports = BalanceService;
