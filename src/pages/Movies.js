import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import api from '../utils/api';
import { toRupiah } from '../utils';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoad, setLoad] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoad(true);
      const movies = await api.getMovies();
      setMovies(movies);
      setLoad(false);
    }
    getMovies();
  }, []);

  if (isLoad) {
    return <div className='text-center'>
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  }

  return (
    <>
      {!movies?.length > 0 ?
        <>
          <p className='text-center h5 mt-5'>movies not available</p>
        </>
        :
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5" >
          {movies.map((movie, key) => (
            <div key={key} className='col mb-3'>
              <Link to={`/movies/${movie.id}`} className='text-decoration-none text-dark'>
                <div className="card position-relative">
                  {movie.age_rating !== "" &&
                    <span style={{ left: 90 + '%' }} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
                      Age: {movie.age_rating}
                    </span>
                  }
                  <img src={movie.poster_url} className="card-img" alt={movie.title} style={{ objectFit: 'cover', height: 180 }} />
                  <div className="card-body">
                    <h5 className="h6 card-title text-truncate"><b>{movie.title}</b></h5>
                    <p className="card-text text-truncate">{movie.description}</p>
                    <span className='float-end'>
                      <span className='badge text-bg-danger'>{toRupiah(movie.ticket_price)}</span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div >
      }
    </>
  )
}

export default Movies