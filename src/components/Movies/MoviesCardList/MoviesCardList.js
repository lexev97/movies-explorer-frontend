import MoviesCard from '../MoviesCard/MoviesCard';
import { DUMMY_DATA } from '../../../constants/constants';

const MoviesCardList = () => {
  return (
    <section className='cardlist' aria-label='Список фильмов'>
      <ul className='cardlist__grid'>
        {DUMMY_DATA.map((movie) => (
          <MoviesCard key={movie._id} movie={movie} />
        ))}
      </ul>
      <button type='button' className='cardlist__more opacity08'>Ещё</button>
    </section>
  );
};

export default MoviesCardList;
