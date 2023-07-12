import React, { useState, useEffect } from 'react'
import api from '../../utils/api'
import { Link } from 'react-router-dom';

const Booking = ({ authUser, setauthUser }) => {
  const [booking, setBooking] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoad, setLoad] = useState(false);

  useEffect(() => {
    const getBooking = async () => {
      setLoad(true);
      const booking = await api.getBooking();
      console.log(booking);
      setBooking(booking);
      setRefresh(false)
      setLoad(false)
    }
    getBooking();
    console.log(booking);
  }, [refresh]);

  const onDeleteBookingHandler = async (booked) => {
    const { id: id_booked, total_cost, tickets } = booked;
    const id_seat = tickets.map(ticket => ticket.id);

    const deleteBooking = await api.deleteBooking({ id_booked, total_cost, id_seat });
    console.log(deleteBooking);
    const refreshBalance = await api.getBalance();
    const refreshUser = { ...authUser, balance: refreshBalance }
    setauthUser(refreshUser);

    if (deleteBooking === 'success') {
      alert('booking deleted successfully!');
      setRefresh(true);
    }
  }

  if (isLoad) {
    return <div className='text-center'>
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  }

  return (
    <>
      <div className="card p-3">
        <h5>Booking</h5>
        {booking.length === 0 ?
          <h6 className='text-center p-3'>you haven't booked</h6>
          :
          <>
            {booking?.map((book, key) => (
              <div key={key} className="card p-3 mb-3">
                <div className="d-flex justify-content-between">
                  <Link className='h6 text-decoration-none' to={`/movies/${book.id_movie}`}>{book.movie[0].title}</Link>
                  <i class="bi bi-x-circle" onClick={() => onDeleteBookingHandler(book)} style={{ color: 'red', cursor: 'pointer' }}></i>
                </div>
                <hr />
                <h6>Tickets</h6>
                <div className="row">
                  {book?.tickets?.map((ticket, key) => (
                    <div key={key} className='col-6'>
                      <div className="card mb-3">
                        <div className="card-body">
                          <small class="badge text-bg-danger">Seat: {ticket.seat_code}</small>
                          <br />
                          <small>Name: {ticket.name}</small>
                          <br />
                          <small >Age: {ticket.age}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        }
      </div >
    </>
  )
}

export default Booking