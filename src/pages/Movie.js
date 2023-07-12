import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { convertDate, toRupiah } from '../utils';

import api from '../utils/api';

const Movie = ({ booking, setBooking, showToast, bootstrap }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const split = location.pathname.split('/');
  const id = split[2];

  const [name, onName] = useState('');
  const [age, onAge] = useState('');

  const [movie, setMovie] = useState({});
  const [movieSeat, setMovieSeat] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [seat, setSeat] = useState({});

  useEffect(() => {
    const getMovieById = async (id) => {
      const data = await api.getMovieById({ id });
      setMovie(data);
      setMovieSeat(data.seats);
      setIsLoad(false);
    }

    getMovieById(id);
  }, []);

  if (isLoad) {
    return <div className='text-center'>
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  }

  const openModal = (data) => {
    setSeat(data)
    const bootstrapLiveExample = document.getElementById('bookedSeat')
    const modal = bootstrap.Modal.getInstance(bootstrapLiveExample)
    modal.show()
  }

  const addSeat = ({ id, seat_code, price, name, age }) => {
    if (!name || !age) {
      // alert('please fill name and age!')
      showToast('please fill name and age!')
      if (!name) {
        document.getElementById('inputName').focus();
      }
      document.getElementById('inputAge').focus();
      return;
    }

    if (age < movie.age_rating) {
      // alert('your age not old enough')
      showToast('Your age not old enough!')
      return;
    }

    const updatedMovieSeat = movieSeat.map(x => (x.id === id ? { ...x, isBooked: 1 } : x));
    setMovieSeat(updatedMovieSeat);
    setBooking({
      ...booking,
      id_movie: movie.id,
      name_movie: movie.title,
      total_cost: booking.total_cost + price,
      tickets: [
        ...booking.tickets,
        {
          id_seat: id,
          seat_code,
          name,
          age
        }
      ]
    });
    const bootstrapLiveExample = document.getElementById('bookedSeat')
    const modal = bootstrap.Modal.getInstance(bootstrapLiveExample)
    modal.hide()
    onName('');
    onAge('');
  }

  const removeSeat = ({ id }) => {
    const updatedMovieSeat = movieSeat.map(x => (x.id === id ? { ...x, isBooked: 0 } : x));
    setMovieSeat(updatedMovieSeat);
    setBooking({
      ...booking,
      total_cost: booking.total_cost - movie.ticket_price,
      tickets: [
        ...booking.tickets.filter((ticket) => ticket.id_seat !== id)
      ]
    })
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to='/movies' className='text-decoration-none'>Movies</Link></li>
          <li className="breadcrumb-item active" aria-current="page"><Link to={`/movies/${movie.id}`} className='text-decoration-none'>{movie?.title}</Link></li>
        </ol>
      </nav>

      <div className='row'>
        <div className="col-12 col-md-6 position-relative">
          <img src={movie.poster_url} className="img-fluid rounded" alt={movie.title} style={{ height: '-webkit-fill-available', width: '-webkit-fill-available', objectFit: 'cover' }}></img>
          <span style={{ left: 95 + '%', fontSize: 15 }} class="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
            {movie.age_rating}
            <span class="visually-hidden">unread messages</span>
          </span>
        </div>

        <div className='col-12 col-md-6'>
          <h4><b>{movie.title}</b></h4>
          <h6><span class="badge text-bg-danger">{toRupiah(movie?.ticket_price)}</span></h6>
          <small className='text-muted'>
            Release: {' '}{convertDate(movie?.release_date)}
          </small>
          <p className='mt-3'>{movie.description}</p>
          <h6>Seats</h6>
          <div className="container text-center mb-3">
            {movieSeat?.length === 0 ?
              <h6>seat not available!</h6>
              :
              <div className="row row-cols-10 g-1">
                {movieSeat?.map((seat, key) => (
                  <div key={key} class="col" style={{ flex: '0 0' }}>
                    <button onClick={() => openModal({ id: seat.id, seat_code: seat.seat_code })} disabled={seat.isBooked} style={{ color: seat.isBooked ? 'white' : 'black' }} class={`p-3 border ${seat.isBooked ? 'bg-secondary' : 'bg-light'}`}>{seat.seat_code}</button>
                  </div>
                ))}
              </div>
            }
          </div>
          <h6>Booked</h6>
          {booking?.tickets?.map((book, key) => (
            <div key={key} className="card mb-1">
              <div className="card-body">
                <div class="d-flex justify-content-between">
                  <h5>{book.name}</h5>
                  <i class="bi bi-x-circle" onClick={() => removeSeat({ id: book.id_seat })} style={{ color: 'red', cursor: 'pointer' }}></i>
                </div>
                <p>Age: {book.age}</p>
                <span style={{ fontSize: 10 }} className='badge text-bg-danger'>Seat: {book.seat_code}</span>
              </div>
            </div>
          ))}
          <div className="shadow p-3 mt-3 rounded">
            <div class="d-flex justify-content-between align-items-center">
              <h6>Total: {toRupiah(booking?.total_cost)}</h6>
              <button disabled={!booking?.total_cost} onClick={() => navigate('/payment')} className='btn btn-primary'>Order</button>
            </div>
          </div>
        </div>
      </div >

      {/* Modal */}

      <div class="modal fade" id="bookedSeat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input value={name} onChange={(e) => onName(e.target.value)} type="text" class="form-control" id="inputName" placeholder="name@example.com" />
                <label for="floatingInput">name</label>
              </div>

              <div class="form-floating mb-3">
                <input value={age} onChange={(e) => onAge(e.target.value)} type="number" class="form-control" id="inputAge" placeholder="name@example.com" />
                <label for="floatingInput">age</label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={() => addSeat({ id: seat.id, seat_code: seat.seat_code, price: movie.ticket_price, name, age })} type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Movie