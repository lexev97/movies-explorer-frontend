import { getHourTimeFormat } from '../../../utils/utils';

const MoviesCard = (props) => {
  return (
    <li className='card'>
      {props.movie.owner !== '777' ? (
        <button type='button' className='card__save opacity08'>Сохранить</button>
      ) : (
        <div className='card__saved'></div>
      )}
      <img
        src={props.movie.thumbnail}
        className='card__image'
        alt={props.movie.nameRU}
      ></img>
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
