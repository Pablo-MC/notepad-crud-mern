import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/auth/auth-actions';

import swal from 'sweetalert';
import registerImg from './../../assets/register.svg';

const Register = () => {

  const username = useRef();
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registered = useSelector(state => state.auth.registered);
  const error = useSelector(state => state.notification.error);

  useEffect(() => {
    if (registered) {
      navigate({ pathname: '/login' });

      swal({
        text: 'Successful registration! 😀',
        icon: "success",
        timer: 2500,
        buttons: false,
      });
    }
  }, [registered, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(register({
      username: username.current.value,
      email: email.current.value,
      password: password.current.value
    }));
  }

  return (
    <div className="auth">
      <img src={registerImg} className="card-img-top" alt='register' />
      <div className="card-body text-center">
        <form onSubmit={submitHandler}>
          <div className="py-3">
            <input
              type="text"
              ref={username}
              className="form-control"
              placeholder='Name'
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              ref={email}
              className={`form-control ${error && 'is-invalid'}`}
              placeholder='Email address'
              required
            />
            {error && <div className="invalid-feedback">{error}</div>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              ref={password}
              className="form-control"
              placeholder='Password'
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;