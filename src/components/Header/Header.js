import AuthArea from './AuthArea/AuthArea';
// import Navigation from '../Navigation/Navigation';
import LogoIcon from '../Svg/LogoIcon';

const Header = () => {
  return (
    <header className='header header_color_pink'>
        <LogoIcon />
        <AuthArea />
        {/* <Navigation/> */}
    </header>
  );
};

export default Header;
