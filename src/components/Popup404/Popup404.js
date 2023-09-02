import { Link, useNavigate } from 'react-router-dom';

const Popup404 = (props) => {
  const navigate = useNavigate();

  return (
    <section className={`popup popup_opened`} aria-label='Модальное окно'>
      <div className='popup404'>
        <h2 className='popup404__title'>404</h2>
        <p className='popup404__subtitle'>Страница не найдена</p>
        <Link className='popup404__link opacity07' to={navigate(-1)}>
          Назад
        </Link>
      </div>
    </section>
  );
};

export default Popup404;
