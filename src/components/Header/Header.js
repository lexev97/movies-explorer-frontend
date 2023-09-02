import AuthArea from './AuthArea/AuthArea';
import Navigation from '../Navigation/Navigation';
import LogoIcon from '../Svg/LogoIcon';
import { useLocation } from 'react-router-dom';

const Header = (props) => {
  const location = useLocation();

  return (
    <header
      className={`header ${
        location.pathname !== '/' ? '' : 'header_color_pink'
      }`}
    >
      <LogoIcon />
      {!props.isLoggedIn && <AuthArea />}
      {props.isLoggedIn && <Navigation />}
    </header>
  );
};

export default Header;
