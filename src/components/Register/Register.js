import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainApi from '../../utils/MainApi';
import InputValidator from '../../utils/InputValidator';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import AppContext from '../../contexts/AppContext';

const Register = () => {
  const [nameInput, setNameInput] = useState('');
  const [nameInputError, setNameInputError] = useState();
  const [emailInput, setEmailInput] = useState('');
  const [emailInputError, setEmailInputError] = useState();
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordInputError, setPasswordInputError] = useState();
  const [serverErrorMsg, setServerErrorMsg] = useState();

  const appCtx = useContext(AppContext);
  const navigate = useNavigate();

  const handleOnChangeNameInput = (e) => {
    setNameInput(e.target.value);

    if (InputValidator.isEmpty(e.target.value)) {
      setNameInputError('Это поле обязательно к заполнению.');
      return;
    }
    if (InputValidator.isToShort(e.target.value, 2)) {
      setNameInputError('Введите минимум 2 символа.');
      return;
    }
    if (InputValidator.isToLong(e.target.value, 60)) {
      setNameInputError('Максимум 60 символов.');
      return;
    }
    if (InputValidator.isName(e.target.value)) {
      setNameInputError(
        'Имя должно содержать только латиницу, кириллицу, пробел или дефис.'
      );
      return;
    }
    setNameInputError(null);
  };
  const handleOnChangeEmailInput = (e) => {
    setEmailInput(e.target.value);

    if (InputValidator.isEmpty(e.target.value)) {
      setEmailInputError('Это поле обязательно к заполнению.');
      return;
    }
    if (!InputValidator.isEmail(e.target.value)) {
      setEmailInputError(
        'Е-mail заполнен некорректно. Пример: email@example.com.'
      );
      return;
    }
    setEmailInputError(null);
  };
  const handleOnChangePasswordInput = (e) => {
    setPasswordInput(e.target.value);
    if (InputValidator.isEmpty(e.target.value)) {
      setPasswordInputError('Это поле обязательно к заполнению.');
      return;
    }
    if (InputValidator.isToShort(e.target.value, 8)) {
      setPasswordInputError('Введите минимум 8 символов.');
      return;
    }
    setPasswordInputError(null);
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    setServerErrorMsg('Создаем пользователя...');
    const userData = {
      name: nameInput,
      email: emailInput,
      password: passwordInput,
    };

    mainApi
      .createUser(userData)
      .then((res) => {
        if (res.data) {
          return mainApi.loginUser({
            email: emailInput,
            password: passwordInput,
          });
        } else {
          return Promise.reject(res);
        }
      })
      .then((res) => {
        if (res.message === 'Авторизация прошла успешно!') {
          setServerErrorMsg();
          appCtx.login();
          navigate('/movies', { replace: true });
        } else {
          return Promise.reject(res);
        }
      })
      .catch((err) => {
        setServerErrorMsg('При регистрации пользователя произошла ошибка.');
      });
  };

  return (
    <PopupWithForm
      name='register'
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      buttonIsDisabled={
        nameInputError === null &&
        emailInputError === null &&
        passwordInputError === null
      }
      serverErrorMsg={serverErrorMsg}
      onSubmit={handleSubmitButton}
    >
      <label className='popup__input-area'>
        <span className='popup__label'>Имя</span>
        <input
          className={`popup__input ${
            nameInputError ? 'popup__input_error' : ''
          }`}
          type='text'
          name='descriptionInput'
          placeholder='Алексей'
          required
          value={nameInput}
          onChange={handleOnChangeNameInput}
          noValidate
        />
        {nameInputError && (
          <span className='popup__error'>{nameInputError}</span>
        )}
      </label>
      <label className='popup__input-area'>
        <span className='popup__label'>E-mail</span>
        <input
          className={`popup__input ${
            emailInputError ? 'popup__input_error' : ''
          }`}
          type='email'
          id='email-input'
          placeholder='email@example.com'
          value={emailInput}
          onChange={handleOnChangeEmailInput}
          noValidate
        />
        {emailInputError && (
          <span className='popup__error'>{emailInputError}</span>
        )}
      </label>
      <label className='popup__input-area'>
        <span className='popup__label'>Пароль</span>
        <input
          className={`popup__input ${
            passwordInputError ? 'popup__input_error' : ''
          }`}
          type='password'
          id='description-input'
          name='descriptionInput'
          placeholder='Пароль минимум из 8 знаков'
          value={passwordInput}
          onChange={handleOnChangePasswordInput}
          noValidate
        />
        {passwordInputError && (
          <span className='popup__error'>{passwordInputError}</span>
        )}
      </label>
    </PopupWithForm>
  );
};

export default Register;
