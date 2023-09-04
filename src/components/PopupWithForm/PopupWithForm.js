import { Link } from 'react-router-dom';
import LogoIcon from '../Svg/LogoIcon';

const PopupWithForm = (props) => {
  return (
    <main className={`popup`} aria-label='Модальное окно'>
      <section className='popup__wrapper'>
        <LogoIcon />
        <h1 className='popup__title'>{props.title}</h1>
        <form
          className='popup__form'
          name={`${props.name}Form`}
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button type='submit' className='popup__save opacity08'>
            {props.buttonText}
          </button>
        </form>
        <div className='popup__or'>
          <span className='popup__question'>
            {props.name === 'login' ? 'Еще не ' : 'Уже '} зарегистрированы?
          </span>
          <Link
            to={props.name === 'login' ? '/signup' : '/signin'}
            className='popup__link opacity07'
          >
            {props.name === 'login' ? 'Регистрация' : 'Войти'}
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PopupWithForm;
