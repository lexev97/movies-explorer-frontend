import { Fragment, useState } from 'react';

const Profile = (props) => {
  const [isReadOnly, setIsReadOnly] = useState(true);

  const switchToEdit = () => {
    setIsReadOnly(!isReadOnly);
  };

  return (
    <section className='profile' aria-label='Профиль пользователя'>
      <h2 className='profile__heading'>Привет, Виталий!</h2>
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
            readOnly={isReadOnly}
          />
        </label>
        <label htmlFor='profile-email' className='profile__input-area'>
          <span className='profile__label'>E-mail</span>
          <input
            type='email'
            id='profile-email'
            className='profile__input'
            defaultValue='pochta@yandex.ru'
            readOnly={isReadOnly}
          />
        </label>
        {isReadOnly ? (
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
  );
};

export default Profile;
