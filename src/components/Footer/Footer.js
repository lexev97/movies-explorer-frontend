const Footer = () => {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__bottom'>
        <p className='footer__copyrights'>&#169; 2020</p>
        <ul className='footer__links'>
          <li className='footer__link'>
            <a
              className='link opacity07'
              href='https://practicum.yandex.ru/'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__link'>
            <a
              className='link opacity07'
              href='https://github.com/lexev97'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
