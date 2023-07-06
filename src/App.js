import { useState, useEffect } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { logoutAction } from './utils/action';
import api from './utils/api';

// Styles
import './styles/App.css';

// Component
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Page
import Movies from './pages/Movies';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';

// App Page
import Main from './pages/App/Main';
import Balance from './pages/App/Balance';
import Booking from './pages/App/Booking';
import Profile from './pages/App/Profile';

const AppLayout = () => (
  <>
    <div className="container mt-5">
      <Outlet />
    </div>
  </>
)

const LoggedInRoute = ({ authUser, children }) => {
  if (authUser) {
    return <Navigate to="/app" replace />
  }
  return children ? children : <Outlet />;
}

const ProtectedRoute = ({ authUser, children }) => {
  if (!authUser) {
    return <Navigate to="/login" replace />
  }
  return children ? children : <Outlet />;
}

function App() {
  const [authUser, setauthUser] = useState(false);

  useEffect(() => {
    const asyncPreloadProcess = async () => {
      const authUser = await api.getOwnProfile();
      if (authUser.status !== 'success') {
        if (authUser.error === "Unauthorized" && authUser.message === "Token maximum age exceeded") {
          if (window.confirm('Sesi kamu udah habis. Perpanjang sesi?')) {
            await api.refreshToken();
            const userRefresh = await api.getOwnProfile();
            setauthUser(userRefresh.data)
          } else {
            return onSignOut();
          };
        }
      } else {
        setauthUser(authUser.data);
      }
    }
    asyncPreloadProcess();
  }, []);

  const onSignOut = () => {
    setauthUser(null);
    logoutAction();
  }

  return (
    <>
      <header>
        <Navigation authUser={authUser} signOut={onSignOut} />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Movies />} />
            <Route path='movies' element={<Movies />} />
            <Route path='about' element={<About />} />

            <Route element={<LoggedInRoute authUser={authUser} />}>
              <Route path='login' element={<Login setauthUser={setauthUser} />} />
              <Route path='register' element={<Register />} />
            </Route>
          </Route>

          <Route path='/app' element={<AppLayout />}>
            <Route element={<ProtectedRoute authUser={authUser} />}>
              <Route index element={<Main />} />
              <Route path='balance' element={<Balance />} />
              <Route path='booking' element={<Booking />} />
              <Route path='profile' element={<Profile />} />
            </Route>
          </Route>

          <Route path='*' element={
            <h1 className='h3 text-center m-5'>Page not found</h1>
          } />
        </Routes>
      </main >
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
