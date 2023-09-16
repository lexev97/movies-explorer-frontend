import { Fragment, useContext, useState } from 'react';
import InputValidator from '../../utils/InputValidator';
import AppContext from '../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import mainApi from '../../utils/MainApi';

const Profile = () => {
  const appCtx = useContext(AppContext);

  const [inputDisabled, setInputDisabled] = useState(true);
  const [nameInput, setNameInput] = useState(appCtx.userInfo.name);
  const [nameInputError, setNameInputError] = useState();
  const [emailInput, setEmailInput] = useState(appCtx.userInfo.email);
  const [emailInputError, setEmailInputError] = useState();
  const [serverErrorMsg, setServerErrorMsg] = useState();
  const [isEdit, setIsEdit] = useState(false)

  const navigate = useNavigate();

  const switchToEdit = () => {
    setInputDisabled(false);
    setIsEdit(true);
  };

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
    if (!emailInputError) setEmailInputError(null);
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
    if (nameInputError) setNameInputError(null);
  };

  const handleChangeProfileSubmit = (e) => {
    e.preventDefault();
    setServerErrorMsg('Сохраняем...');
    setInputDisabled(true);
    const newProfileInfo = {
      name: nameInput,
      email: emailInput,
    };

    mainApi
      .updateUserInfo(newProfileInfo)
      .then((res) => {
        if (res.data) {
          appCtx.getUserInfo(res.data);
          setServerErrorMsg('Профиль успешно отредактирован!');
          setTimeout(() => {
            setServerErrorMsg();
          }, 3000);
          setIsEdit(false);
        } else {
          return Promise.reject(res);
        }
      })
      .catch((err) => {
        setInputDisabled(false);
        setServerErrorMsg('Что-то пошло не так...');
      });
  };
  const handleLogout = () => {
    mainApi
      .logoutUser()
      .then((res) => {
        if (res.message === 'Сеанс завершен') {
          appCtx.logout();
          navigate('/', { replace: true });
        } else {
          return Promise.reject(res);
        }
      })
      .catch((err) => {
        setServerErrorMsg('Что-то пошло не так...');
      });
  };

  const buttonDisabled =
    (nameInput !== appCtx.userInfo.name ||
      emailInput !== appCtx.userInfo.email) &&
    nameInputError === null &&
    emailInputError === null && !inputDisabled;

  return (
    <main className='profile'>
      <section className='profile__wrapper'>
        <h1 className='profile__heading'>Привет, {appCtx.userInfo.name}!</h1>
        <form className='profile__form' onSubmit={handleChangeProfileSubmit}>
          <label htmlFor='profile-name' className='profile__input-area'>
            <span className='profile__label'>Имя</span>
            <input
              type='text'
              id='profile-name'
              className={`profile__input ${
                nameInputError ? 'profile__input_error' : ''
              }`}
              value={nameInput || ''}
              onChange={handleOnChangeNameInput}
              placeholder='Алексей'
              disabled={inputDisabled}
              noValidate
            />
          </label>
          {nameInputError && (
            <span className='profile__error'>{nameInputError}</span>
          )}
          <label htmlFor='profile-email' className='profile__input-area'>
            <span className='profile__label'>E-mail</span>
            <input
              type='email'
              id='profile-email'
              className={`profile__input ${
                emailInputError ? 'profile__input_error' : ''
              }`}
              value={emailInput || ''}
              onChange={handleOnChangeEmailInput}
              placeholder='email@example.com'
              disabled={inputDisabled}
              noValidate
            />
          </label>
          {emailInputError && (
            <span className='profile__error'>{emailInputError}</span>
          )}
          {serverErrorMsg && (
            <span className='profile__server-error'>{serverErrorMsg}</span>
          )}
          {!isEdit ? (
            <Fragment>
              <button
                type='button'
                className={`profile__edit opacity08 ${
                  serverErrorMsg ? 'profile__save_server-msg' : ''
                }`}
                onClick={switchToEdit}
              >
                Редактировать
              </button>
              <button
                type='button'
                className='profile__exit opacity08'
                onClick={handleLogout}
              >
                Выйти из аккаунта
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <button
                type='submit'
                className={`profile__save ${
                  !buttonDisabled ? '' : 'opacity08'
                } ${serverErrorMsg ? 'profile__save_server-msg' : ''}`}
                disabled={!buttonDisabled}
              >
                Сохранить
              </button>
            </Fragment>
          )}
        </form>
      </section>
    </main>
  );
};

export default Profile;
