import MoviesCard from '../MoviesCard/MoviesCard';
import { DUMMY_DATA_SAVED } from '../../../constants/constants';

const MoviesCardList = () => {
  return (
    <section className='cardlist' aria-label='Список фильмов'>
      <ul className='cardlist__grid'>
        {DUMMY_DATA_SAVED.map((movie) => (
          <MoviesCard key={movie._id} movie={movie} />
        ))}
      </ul>
      <button
        type='button'
        className='cardlist__more opacity08 cardlist__more_hiden'
      >
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;
