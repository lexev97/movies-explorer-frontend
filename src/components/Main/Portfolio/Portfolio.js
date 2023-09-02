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
          </a>
          <span>&#8599;</span>
        </li>
        <li className='portfolio__link'>
          <a
            className='link opacity07'
            href='https://lexev97.github.io/russian-travel/index.html'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
          </a>
          <span>&#8599;</span>
        </li>
        <li className='portfolio__link'>
          <a
            className='link  opacity07'
            href='https://mesto-auth.netlify.app'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
          </a>
          <span>&#8599;</span>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
