import { Fragment, useContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Popup404 from '../Popup404/Popup404';
import mainApi from '../../utils/MainApi';
import AppContext from '../../contexts/AppContext';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';

function App() {
  const appCtx = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    if (!appCtx.isLoggedIn) {
      tokenCheck();
    }
  }, []);

  useEffect(() => {
    if (appCtx.isLoggedIn) {
      mainApi
        .getUserinfo()
        .then((res) => {
          if (res.data._id) {
            appCtx.getUserInfo(res.data);
          } else {
            return Promise.reject(res);
          }
        })
        .catch((err) => {
          if (err.status === 401) {
            console.log(
              'Для получения данных пользователя необходима авторизация'
            );
          } else
            console.log('При загрузке данных пользователя произошла ошибка.');
        });

      mainApi
        .getSavedMovies()
        .then((res) => {
          if (res.data) {
            appCtx.getSavedMovies(res.data);
          } else {
            return Promise.reject(res);
          }
        })
        .catch((err) => {
          if (err.status === 401) {
            console.log(
              'Для получения сохраненных фильмов необходима авторизация'
            );
          } else console.log('При загрузке данных произошла ошибка.');
        });
    }
  }, [appCtx.isLoggedIn]);

  const tokenCheck = () => {
    mainApi
      .getUserinfo()
      .then((res) => {
        if (res.data._id) {
          localStorage.setItem('isLoggedIn', 'true');
          appCtx.login();
        } else {
          return Promise.reject(res);
        }
      })
      .catch((err) => {
        if (err === 400) {
          console.log('Токен не передан или передан не в том формате');
        } else if (err === 401) {
          console.log('Переданный токен некорректен ');
        } else {
          console.log(err);
        }
      });
  };

  const headerIsVisible =
    location.pathname === '/' ||
    location.pathname === '/movies' ||
    location.pathname === '/saved-movies' ||
    location.pathname === '/profile';

  const footerIsVisible =
    location.pathname === '/' ||
    location.pathname === '/movies' ||
    location.pathname === '/saved-movies';

  return (
    <Fragment>
      {headerIsVisible && <Header />}
      <Routes>
        <Route
          exact
          path='/movies'
          element={<ProtectedRouteElement element={Movies} />}
        />
        <Route
          exact
          path='/saved-movies'
          element={<ProtectedRouteElement element={SavedMovies} />}
        />
        <Route
          exact
          path='/profile'
          element={<ProtectedRouteElement element={Profile} />}
        />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route exact path='*' element={<Popup404 />} />
        <Route path='/' element={<Main />} />
      </Routes>
      {footerIsVisible && <Footer />}
    </Fragment>
  );
}

export default App;
