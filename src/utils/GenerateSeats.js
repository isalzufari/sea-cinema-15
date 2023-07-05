const pool = require('../utils/MySQL');

const _pool = pool.promise();

for (let i = 0; i < 10; i++) {
  addSeats(i);
}

async function addSeats(i) {
  const query = {
    text: 'INSERT INTO seats (id_movie, seat_code, isBooked) VALUES (?, ?, ?)',
    values: [1, `seat-${i}`, 0]
  }

  await _pool.query(
    query.text,
    query.values,
  );
}
