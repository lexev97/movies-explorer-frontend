import { getHourTimeFormat } from '../../../utils/utils';

const MoviesCard = (props) => {
  const handleDeleteButton = () => {
    props.onDelete(props.movie.movieId);
  };

  return (
    <li className='card'>
      <div
        onClick={handleDeleteButton}
        className='card__delete opacity08'
      ></div>
      <a href={props.movie.trailerLink} target='blank'>
        <img
          src={props.movie.image}
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
