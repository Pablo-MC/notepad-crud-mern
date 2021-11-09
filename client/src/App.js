import { Fragment, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Layout/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {

  const [showLogin, setShowLogin] = useState(true);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {

  // }, []);


  const showLoginHandler = (show) => {
    setShowLogin(show);
  }


  return (
    <Fragment>

      <Navbar showLogin={showLogin} />

      <Routes>
        <Route path='/' element={<Login onShowLogin={showLoginHandler} />} />
        <Route path='/register' element={<Register onShowLogin={showLoginHandler} />} />

        {/* <Route path='/notes' element={<Notes />} /> */}
        {/* <Route path='/create-note' element={<CreateNote />} /> */}

      </Routes>
    </Fragment>
  );
}

export default App;
