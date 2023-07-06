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

        <h1 class="h4 mb-3 fw-normal">register</h1>

        <div class="form-floating mb-3">
          <input value={name} onChange={onNameChange} type="text" class="form-control" id="floatingInput" placeholder="full name" />
          <label for="floatingInput">nama</label>
        </div>

        <div class="form-floating mb-3">
          <input value={age} onChange={onAgeChange} type="number" class="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">age</label>
        </div>

        <div class="form-floating mb-3">
          <input value={username} onChange={onUsernameChange} type="email" class="form-control" id="floatingInput" placeholder="username" />
          <label for="floatingInput">username</label>
        </div>

        <div class="form-floating mb-3">
          <input value={password} onChange={onPasswordChange} type="password" class="form-control" id="floatingPassword" placeholder="password" />
          <label for="floatingPassword">password</label>
        </div>

        <button onClick={() => onRegister({ username, password, name, age })} class="w-100 btn btn btn-primary" type="button">daftar</button>
        <p className='mt-3'>have an account? <Link to="/login">login</Link></p>
      </form>
    </div>
  )
}

export default Register