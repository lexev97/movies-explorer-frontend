import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const SavedMovies = () => {
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList />
    </main>
  );
};

export default SavedMovies;