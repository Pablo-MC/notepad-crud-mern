import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/auth/auth-slice';

const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    const storedUserLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (storedUserLoggedIn === '1') setIsLoggedIn(true);
  }, [isAuthenticated]);

  const logoutHandler = () => {
    dispatch(authActions.loguot());
    setIsLoggedIn(false);
  }

  return (
    <nav className="navbar navbar-light bg-primary px-3">
      <Link to='/' className="navbar-brand"><strong>Notepad</strong></Link>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          {isLoggedIn
            ? <Link to='/' className="btn btn-dark ms-3" onClick={logoutHandler}>Log Out</Link>
            : <Link to='/login' className="btn btn-dark">Login</Link>
          }
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;