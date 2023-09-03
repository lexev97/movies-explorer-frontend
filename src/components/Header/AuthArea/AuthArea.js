import { Link, useNavigate } from 'react-router-dom';

const AuthArea = (props) => {
  const navigate = useNavigate();

  return (
    <ul className='auth-area'>
      <li>
        <Link className='auth-area__reg opacity08' to='/signup'>
          Регистрация
        </Link>
      </li>
      <li>
        <button
          type='button'
          className='auth-area__log opacity08'
          onClick={() => {
            navigate('/signin');
          }}
        >
          Войти
        </button>
      </li>
    </ul>
  );
};

export default AuthArea;
