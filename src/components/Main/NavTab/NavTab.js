const NavTab = () => {
  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__links'>
        <li className='nav-tab__link opacity07'>
          <a className='link' href='#about-project'>
            О проекте
          </a>
        </li>
        <li className='nav-tab__link opacity07'>
          <a className='link' href='#techs'>
            Технологии
          </a>
        </li>
        <li className='nav-tab__link opacity07'>
          <a className='link' href='#student'>
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
