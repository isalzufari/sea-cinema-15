import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toRupiah } from '../utils/index';

const Navigation = ({ authUser, signOut }) => {
  const location = useLocation();
  const namePlace = location.pathname.split('/');
  const slug = namePlace[1];

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm">
      <div className="container p-2">
        <Link className="navbar-brand" to='/'>
          <img src="/logo192.png" style={{ width: 50, height: 50, objectFit: 'cover' }} className='img-fluid rounded-circle' alt='sea_cinema' />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${slug === 'movies' && 'active'}`} aria-current="page" to="/movies">movies</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${slug === 'about' && 'active'}`} to="/about">about</Link>
            </li>
          </ul>

          {!authUser ? <div className="text-end">
            <Link to="login" type="button" className="btn btn-primary">sign-in</Link>
          </div> :
            <>
              <div className="flex-shrink-0 dropdown">
                <a href="#/" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <span>{authUser.name}</span>
                  <img className='rounded-circle border border-2' style={{ height: 50, width: 50, objectFit: 'cover', marginLeft: 10 }} src={authUser.photo} alt={authUser.username} />

                  <span className="position-absolute top-0 translate-middle">
                    <i className="bi bi-patch-check-fill" style={{ color: 'red' }}></i>
                    <small> <b>{authUser.age}</b></small>
                  </span>
                </a>
                <ul className="dropdown-menu text-small shadow">
                  <li><span className="dropdown-item">{toRupiah(authUser.balance)}</span></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/app/balance">balance</Link></li>
                  <li><Link className="dropdown-item" to="/app/booking">booking</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a onClick={signOut} className="dropdown-item" href="#/">sign out</a></li>
                </ul>
              </div>
              {/* <button onClick={signOut} className='btn btn-outline-primary'><i class="bi bi-box-arrow-right"></i></button> */}
            </>
          }

        </div>
      </div>
    </nav>
  )
}

export default Navigation;