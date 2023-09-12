import MoviesCard from '../MoviesCard/MoviesCard';
import { useContext, useEffect } from 'react';
import AppContext from '../../../contexts/AppContext';
import mainApi from '../../../utils/MainApi';

const MoviesCardList = () => {
  const appCtx = useContext(AppContext);

  useEffect(() => {
    appCtx.getSearchResultsMsg();
    appCtx.getFoundSavedMovies([]);
  }, []);

  useEffect(() => {
    if (appCtx.foundSavedMovies.length > 0) {
      const cardSet = appCtx.foundSavedMovies.map((movie) => (
        <MoviesCard
          key={movie.movieId}
          movie={movie}
          onDelete={handleDeleteCardClick}
        />
      ));
      appCtx.getRenderedCards(cardSet);
      return;
    }
    const cardSet = appCtx.savedMovies.map((movie) => (
      <MoviesCard
        key={movie.movieId}
        movie={movie}
        onDelete={handleDeleteCardClick}
      />
    ));
    appCtx.getRenderedCards(cardSet);
  }, [appCtx.foundSavedMovies, appCtx.savedMovies]);

  const handleDeleteCardClick = (movieId) => {
    const movieToDelete = appCtx.savedMovies.find(
      (item) => item.movieId === movieId
    );

    mainApi
      .deleteMovie(movieToDelete._id)
      .then((res) => {
        if (res.data) {
          appCtx.removeFromSavedMovies(movieId);
          appCtx.removeFromFoundSavedMovies(movieId);
        } else {
          return Promise.reject(res);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.status}`);
      });
  };

  return (
    <section className='cardlist' aria-label='Список фильмов'>
      {appCtx.foundSavedMovies.length === 0 && appCtx.searchResultsMsg && (
        <h2>{appCtx.searchResultsMsg}</h2>
      )}
      {!appCtx.searchResultsMsg > 0 && appCtx.savedMovies.length > 0 && (
        <ul className='cardlist__grid'>{appCtx.renderedCards}</ul>
      )}
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
