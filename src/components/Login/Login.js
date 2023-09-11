import { useContext, useState } from 'react';
import mainApi from '../../utils/MainApi';
import InputValidator from '../../utils/InputValidator';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import AppContext from '../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [emailInput, setEmailInput] = useState('');
  const [emailInputError, setEmailInputError] = useState();
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordInputError, setPasswordInputError] = useState();
  const [serverErrorMsg, setServerErrorMsg] = useState();

  const appCtx = useContext(AppContext);
  const navigate = useNavigate();

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
    setServerErrorMsg('Проверяем данные...');
    const userData = {
      email: emailInput,
      password: passwordInput,
    };

    mainApi
      .loginUser(userData)
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
        setServerErrorMsg('При авторизации пользователя произошла ошибка.');
      });
  };

  return (
    <PopupWithForm
      name='login'
      title='Рады видеть!'
      buttonText='Войти'
      buttonIsDisabled={emailInputError === null && passwordInputError === null}
      serverErrorMsg={serverErrorMsg}
      onSubmit={handleSubmitButton}
    >
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

export default Login;
