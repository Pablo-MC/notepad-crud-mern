import { useRef } from 'react';
import login from './../../assets/login.svg';

const Login = (props) => {

  props.onShowLogin(true);

  const email = useRef();
  const password = useRef();

  const submitHandler = (e) => {
    e.preventDefault();


    console.log(email.current.value, ' : ', password.current.value);



  }

  return (
    <div className="m-auto" style={{ width: '18rem' }}>
      <img src={login} className="card-img-top mt-5" alt='login' />
      <div className="card-body text-center">
        <p className="card-text">Create and save your favorite notes!</p>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <input
              type="email"
              ref={email}
              className="form-control"
              placeholder='Email address'
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              ref={password}
              className="form-control"
              placeholder='Password'
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;