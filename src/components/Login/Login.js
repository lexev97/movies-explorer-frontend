import PopupWithForm from '../PopupWithForm/PopupWithForm';

const Login = (props) => {
  return (
    <PopupWithForm
      name='login'
      title='Рады видеть!'
      buttonText='Войти'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={props.login}
    >
      <label className='popup__input-area'>
        <span className='popup__label'>E-mail</span>
        <input
          className='popup__input'
          type='email'
          id='email-input'
          placeholder='email@example.com'
          required
        />
      </label>
      <label className='popup__input-area'>
        <span className='popup__label'>Пароль</span>
        <input
          className='popup__input'
          type='password'
          name='descriptionInput'
          placeholder='Пароль минимум из 6 знаков'
          minLength='6'
          maxLength='50'
          required
        />
      </label>
    </PopupWithForm>
  );
};

export default Login;
