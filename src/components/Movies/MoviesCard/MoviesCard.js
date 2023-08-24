const MoviesCard = (props) => {
  return (
    <li className='card'>
      <img src={props.movie.thumbnail} alt='Картинка'></img>
    </li>
  );
};

export default MoviesCard;
