import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../hooks/useInput'
import { registerAction } from '../utils/action';

const Register = () => {
  const navigate = useNavigate();
  const [username, onUsernameChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [name, onNameChange] = useInput('');
  const [age, onAgeChange] = useInput('');

  const onRegister = async ({ username, password, name, age }) => {
    const registerUser = await registerAction({ username, password, name, age });
    const { data, status } = registerUser;
    if (status === "success") {
      return navigate('/login')
    }
  }

  return (
    <div style={{ maxWidth: 330, padding: 15 }} className='m-auto w-100'>
      <form className='text-center'>
        {/* <img class="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}

        <h1 className="h4 mb-3 fw-normal">register</h1>

        <div className="form-floating mb-3">
          <input value={name} onChange={onNameChange} type="text" className="form-control" id="name" placeholder="full name" />
          <label htmlFor="floatingInput">nama</label>
        </div>

        <div className="form-floating mb-3">
          <input value={age} onChange={onAgeChange} type="number" className="form-control" id="age" placeholder="name@example.com" />
          <label htmlFor="floatingInput">age</label>
        </div>

        <div className="form-floating mb-3">
          <input value={username} onChange={onUsernameChange} type="email" className="form-control" id="username" placeholder="username" />
          <label htmlFor="floatingInput">username</label>
        </div>

        <div className="form-floating mb-3">
          <input value={password} onChange={onPasswordChange} type="password" className="form-control" id="passwprd" placeholder="password" />
          <label htmlFor="floatingPassword">password</label>
        </div>

        <button onClick={() => onRegister({ username, password, name, age })} className="w-100 btn btn btn-primary" type="button">daftar</button>
        <p className='mt-3'>have an account? <Link to="/login">login</Link></p>
      </form>
    </div>
  )
}

export default Register