import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../hooks/useInput';
import { loginAction } from '../utils/action.js';

const Login = ({ setauthUser }) => {
  const [username, onUsernameChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const navigate = useNavigate();

  const onLogin = async ({ username, password }) => {
    const authUser = await loginAction({ username, password });
    setauthUser(authUser);
    navigate('/');
  };

  return (
    <div style={{ maxWidth: 330, padding: 15 }} className='m-auto w-100'>
      <form className='text-center'>
        {/* <img class="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}

        <h1 className="h4 mb-3 fw-normal">login</h1>

        <div className="form-floating mb-3">
          <input value={username} onChange={onUsernameChange} type="email" className="form-control" id="username" placeholder="name@example.com" />
          <label htmlFor="floatingInput">username</label>
        </div>

        <div className="form-floating mb-3">
          <input value={password} onChange={onPasswordChange} type="password" className="form-control" id="password" placeholder="password" />
          <label htmlFor="floatingPassword">password</label>
        </div>

        <button onClick={() => onLogin({ username, password })} className="w-100 btn btn btn-primary" type="button">masuk</button>
        <p className='mt-3'>dont have an account? <Link to="/register">register</Link></p>
      </form>
    </div>
  )
}

export default Login