import { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/auth/auth-actions';

import loginImg from './../../assets/login.svg';


const Login = () => {

  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const error = useSelector(state => state.notification.error);
  const success = useSelector(state => state.notification.success);


  useEffect(() => {
    if (isAuthenticated) {
      navigate({ pathname: '/notes' });
    }
  }, [isAuthenticated, navigate])


  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(login({
      email: email.current.value,
      password: password.current.value,
    }));
  }

  return (
    <div className="auth">
      <img src={loginImg} className="card-img-top" alt='login' />
      <div className="card-body text-center">
        <form onSubmit={submitHandler}>
          <div className="py-3">
            <input
              type="email"
              ref={email}
              className={`form-control ${error === 'Invalid email' && 'is-invalid'}`}
              placeholder='Email address'
              required
            />
            {error === 'Invalid email' && <div className="invalid-feedback">The user not exist</div>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              ref={password}
              className={`form-control ${error === 'Invalid password' && 'is-invalid'}`}
              placeholder='Password'
              required
            />
            {error === 'Invalid password' && <div className="invalid-feedback">Invalid password</div>}
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <div className="d-flex justify-content-center align-items-baseline mt-4">
          <Link to='/register' className="text-info text-decoration-none">Create account!</Link>
        </div>
      </div>
      {success &&
        <div class="alert alert-primary d-flex align-items-center mt-2" role="alert">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          <div>{success}</div>
        </div>
      }
    </div>
  );
}

export default Login;