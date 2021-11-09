import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary px-2">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">Notepad</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to='/' className="nav-link active me-4">Create Note</Link>
            </li>
            <li className="nav-item">
              {props.showLogin
                ? <Link to='/register' className="btn btn-dark">Register</Link>
                : <Link to='/' className="btn btn-dark">Login</Link>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;