const Portfolio = () => {
  return (
    <section className='portfolio' aria-label='Ссылки на другие проекты'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__link'>
          <a
            className='link opacity07'
            href='https://lexev97.github.io/how-to-learn/index.html'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
            <span>&#8599;</span>
          </a>
        </li>
        <li className='portfolio__link'>
          <a
            className='link opacity07'
            href='https://lexev97.github.io/russian-travel/index.html'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
            <span>&#8599;</span>
          </a>
        </li>
        <li className='portfolio__link'>
          <a
            className='link  opacity07'
            href='https://place.nomoredomains.xyz'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
            <span>&#8599;</span>
          </a>
          <span className='portfolio__link-comment'>Тестовый аккаунт: <span>mail@mail.ru</span></span>
          <span className='portfolio__link-comment'>Пароль: <span>123456789</span></span>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
