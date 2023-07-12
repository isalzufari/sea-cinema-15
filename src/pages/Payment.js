import React, { useState } from 'react'
import { toRupiah } from '../utils';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Payment = ({ booking, setBooking, authUser, setauthUser, showToast }) => {
  const navigate = useNavigate();
  console.log(booking);
  const [load, setload] = useState(true);

  const bookingHandler = async () => {

    const { balance } = authUser;
    const { total_cost } = booking;

    if (total_cost > balance) {
      showToast('balance not enough!');
      return;
    }
    setload(false);
    const booked = await api.postBooking({ booking });
    const { amount: refreshBalance } = await api.getBalance();
    const refreshUser = { ...authUser, balance: refreshBalance }
    setauthUser(refreshUser);

    if (booked === 'success') {
      setBooking({
        id_movie: 0,
        total_cost: 0,
        tickets: []
      });
      const confirm = global.confirm('Order successfully!')
      if (confirm) {
        navigate('/app/booking');
      }
    }
    setload(true);
  }

  return (
    <>
      <h2>Payment</h2>
      <div className="row">
        <div className="col-8">
          {booking.tickets.length === 0 ?
            <h6 className='text-center mt-5'>you haven't booked</h6>
            :
            <>
              <div className='card p-3'>
                <h6>{booking?.name_movie}</h6>
                {booking?.tickets?.map((book, key) => (
                  <div key={key} className="card mb-1 p-3">
                    <div className="d-flex justify-content-between">
                      <h5>{book.name}</h5>
                      {/* <i class="bi bi-x-circle" onClick={() => removeSeat({ id: book.id_seat })} style={{ color: 'red', cursor: 'pointer' }}></i> */}
                    </div>
                    <small>Seat: {book.id_seat}</small>
                    <p>Age: {book.age}</p>
                  </div>
                ))}
              </div>
            </>
          }
        </div>
        <div className="col-4">
          <div className="shadow p-3 rounded">
            <div className="d-flex justify-content-between">
              <h5>total price</h5>
              <p>{toRupiah(booking.total_cost)}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h5>balance</h5>
              <p>{toRupiah(authUser.balance)}</p>
            </div>
            <div className="d-grid gap-2">
              <button disabled={booking.tickets.length === 0} onClick={() => bookingHandler()} className='btn btn-primary'>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden={load}></span>
                {' '}Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment