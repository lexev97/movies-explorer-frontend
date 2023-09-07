import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import ProfileIcon from '../Svg/ProfileIcon';
import { useState } from 'react';
import Burger from './Burger/Burger';

const Navigation = () => {
  const [burgerIsPressed, setBurgerIsPressed] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerIsPressed(!burgerIsPressed);
  };

  const closeBurgerMenu = () => {
    setBurgerIsPressed(false);
  };

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className='navi'>
      <ul
        className={`navi__links ${burgerIsPressed ? 'navi__links_shown' : ''}`}
      >
        <li>
          <NavLink
            className='navi__films opacity08'
            to='/'
            onClick={closeBurgerMenu}
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            className='navi__films opacity08'
            to='/movies'
            onClick={closeBurgerMenu}
          >
            Фильмы
          </NavLink>
        </li>
        <li>
          <NavLink
            className='navi__films opacity08'
            to='/saved-movies'
            onClick={closeBurgerMenu}
          >
            Сохранённые фильмы
          </NavLink>
        </li>
        <li>
          <button
            type='button'
            className='navi__user opacity08'
            onClick={() => {
              closeBurgerMenu();
              navigate('/profile');
            }}
          >
            <span className='navi__btn-txt'>Аккаунт</span>
            <ProfileIcon
              iconInner={
                location.pathname !== '/' || burgerIsPressed
                  ? 'black'
                  : '#F3C1F8'
              }
              iconOuter={
                location.pathname !== '/' || burgerIsPressed
                  ? '#F9F9F9'
                  : 'black'
              }
            />
          </button>
        </li>
      </ul>
      <Burger onClick={toggleBurgerMenu} burgerIsPressed={burgerIsPressed} />
    </nav>
  );
};

export default Navigation;
