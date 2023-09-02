import PopupWithForm from '../PopupWithForm/PopupWithForm';

const Register = (props) => {
  return (
    <PopupWithForm
      name='register'
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <label className='popup__input-area'>
        <span className='popup__label'>Имя</span>
        <input
          className='popup__input'
          type='text'
          id='description-input'
          name='descriptionInput'
          minLength='2'
          maxLength='50'
          required
        />
      </label>
      <label className='popup__input-area'>
        <span className='popup__label'>E-mail</span>
        <input
          className='popup__input'
          type='email'
          id='email-input'
          required
        />
      </label>
      <label className='popup__input-area'>
        <span className='popup__label'>Пароль</span>
        <input
          className='popup__input'
          type='password'
          id='description-input'
          name='descriptionInput'
          minLength='6'
          maxLength='50'
          required
        />
      </label>
    </PopupWithForm>
  );
};

export default Register;
