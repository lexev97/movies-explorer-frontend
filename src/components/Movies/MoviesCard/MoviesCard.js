import { getHourTimeFormat } from '../../../utils/utils';

const MoviesCard = (props) => {
  return (
    <li className='card'>
      {props.movie.owner !== '777' ? (
        <button className='card__save opacity08'>Сохранить</button>
      ) : (
        <div className='card__saved'></div>
      )}
      <img
        src={props.movie.thumbnail}
        className='card__image'
        alt='Кадр из фильма'
      ></img>
      <div className='card__description'>
        <span className='card__name'>{props.movie.nameRU}</span>
        <span className='card__duration'>
          {getHourTimeFormat(props.movie.duration)}
        </span>
      </div>
    </li>
  );
};

export default MoviesCard;
