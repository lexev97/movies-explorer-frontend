import { Link, useNavigate } from 'react-router-dom';

const Popup404 = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main className={`popup`} aria-label='Модальное окно'>
      <section className='popup404'>
        <h1 className='popup404__title'>404</h1>
        <p className='popup404__subtitle'>Страница не найдена</p>
        <Link className='popup404__link opacity07' onClick={goBack}>
          Назад
        </Link>
      </section>
    </main>
  );
};

export default Popup404;
