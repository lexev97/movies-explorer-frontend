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
          name='descriptionInput'
          minLength='2'
          maxLength='50'
          placeholder='Алексей'
          required
        />
      </label>
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
          id='description-input'
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

export default Register;
