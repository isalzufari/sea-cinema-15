const pool = require('../../utils/MySQL');
const bcrypt = require('bcrypt');
const InvariantError = require('../../exceptions/InvariantError');
const AuthenticationError = require('../../exceptions/AuthenticationError');

class UsersService {
  constructor() {
    this._pool = pool.promise();
  }

  async addUser({ username, password, name, age }) {
    await this.verifyUsername({ username });

    const hashedPassword = await bcrypt.hash(password, 10);
    const query = {
      text: 'INSERT INTO users (username, password, name, age) VALUES (?, ?, ?, ?)',
      values: [username, hashedPassword, name, age]
    };

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    if (!result.insertId) {
      throw new InvariantError('User gagal ditambahkan: addUser');
    }

    return result.insertId;
  }

  async verifyUsername({ username }) {
    const query = {
      text: 'SELECT username FROM `users` WHERE `username` = ?',
      values: [username],
    };

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    if (result.length > 0) {
      throw new AuthenticationError('Kredensial yang Anda berikan salah: verifyUsername');
    }
  }

  async verifyUserCredential({ username, password }) {
    const query = {
      text: 'SELECT id, password FROM `users` WHERE username = ?',
      values: [username],
    };

    const [result, fields] = await this._pool.query(
      query.text,
      query.values,
    );

    if (!result.length > 0) {
      throw new AuthenticationError('Kredensial yang Anda berikan salah atau sudahh di deleted: verifyUserCredential');
    }

    const { id, password: hashedPassword } = result[0];
    const match = await bcrypt.compare(password, hashedPassword);

    if (!match) {
      throw new AuthenticationError('Kredensial yang anda berikan salah tidak match: verifyUserCredential');
    }

    return id;
  }
}

module.exports = UsersService;
