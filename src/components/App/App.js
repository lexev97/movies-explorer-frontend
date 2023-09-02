import { Fragment, useState } from 'react';
import { useNavigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Popup404 from '../Popup404/Popup404';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const login = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/');
  };

  const logout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <Fragment>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile logout={logout} />} />
        <Route path='/signin' element={<Login login={login} />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/*' element={<Popup404 />} />
      </Routes>
      {location.pathname !== '/profile' && <Footer />}
    </Fragment>
  );
}

export default App;
