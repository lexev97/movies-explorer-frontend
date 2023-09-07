import { Fragment, useState } from 'react';

const Profile = (props) => {
  const [inputDisabled, setInputDisabled] = useState(true);

  const switchToEdit = () => {
    setInputDisabled(!inputDisabled);
  };

  return (
    <main className='profile'>
      <section className='profile__wrapper'>
        <h1 className='profile__heading'>Привет, Виталий!</h1>
        <form className='profile__form'>
          <label htmlFor='profile-name' className='profile__input-area'>
            <span className='profile__label'>Имя</span>
            <input
              type='text'
              maxLength='50'
              minLength='2'
              id='profile-name'
              className='profile__input'
              defaultValue='Виталий'
              placeholder='Алексей'
              disabled={inputDisabled}
              required
            />
          </label>
          <label htmlFor='profile-email' className='profile__input-area'>
            <span className='profile__label'>E-mail</span>
            <input
              type='email'
              id='profile-email'
              className='profile__input'
              defaultValue='pochta@yandex.ru'
              placeholder='email@example.com'
              disabled={inputDisabled}
              required
            />
          </label>
          {inputDisabled ? (
            <Fragment>
              <button
                type='button'
                className='profile__edit opacity08'
                onClick={switchToEdit}
              >
                Редактировать
              </button>
              <button
                type='button'
                className='profile__exit opacity08'
                onClick={props.logout}
              >
                Выйти из аккаунта
              </button>
            </Fragment>
          ) : (
            <button
              type='submit'
              className='profile__save opacity08'
              onClick={switchToEdit}
            >
              Сохранить
            </button>
          )}
        </form>
      </section>
    </main>
  );
};

export default Profile;
