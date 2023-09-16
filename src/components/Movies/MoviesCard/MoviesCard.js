import { useContext } from 'react';
import { moviesApiDomine } from '../../../constants/constants';
import { getHourTimeFormat } from '../../../utils/utils';
import AppContext from '../../../contexts/AppContext';

const MoviesCard = (props) => {
  const appCtx = useContext(AppContext);

  const handleSaveButton = () => {
    props.onSave(props.movie);
  };

  const handleDeleteButton = () => {
    props.onDelete(props.movie.id);
  };

  return (
    <li className='card'>
      {!appCtx.savedMovies.some((item) => item.movieId === props.movie.id) ? (
        <button
          type='button'
          onClick={handleSaveButton}
          className='card__save opacity08'
        >
          Сохранить
        </button>
      ) : (
        <div className='card__saved' onClick={handleDeleteButton}></div>
      )}
      <a href={props.movie.trailerLink} target='blank'>
        <img
          src={moviesApiDomine + props.movie.image.url}
          className='card__image'
          alt={props.movie.nameRU}
        ></img>
      </a>
      <div className='card__description'>
        <h2 className='card__name'>{props.movie.nameRU}</h2>
        <span className='card__duration'>
          {getHourTimeFormat(props.movie.duration)}
        </span>
      </div>
    </li>
  );
};

export default MoviesCard;
