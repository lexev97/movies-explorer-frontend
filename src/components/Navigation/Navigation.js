import ProfileIcon from '../Svg/ProfileIcon';

const Navigation = () => {
  return (
    <nav className='navi'>
      <ul className='navi__wrapper'>
        <li className='navi__films opacity07'>
          <a className='link' href='#'>
            Фильмы
          </a>
        </li>
        <li className='navi__saved opacity07'>
          <a className='link' href='#'>
            Сохранённые фильмы
          </a>
        </li>
        <li className='navi__user opacity08'>
          <a className='link' href='#'>
            Аккаунт
          </a>
          <ProfileIcon
            iconInner='black'
            iconOuter='#F9F9F9'
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
