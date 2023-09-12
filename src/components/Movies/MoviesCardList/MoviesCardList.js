import MoviesCard from '../MoviesCard/MoviesCard';
import { useContext, useEffect, useState } from 'react';
import { useResize } from '../../../hooks/useResize';
import Preloader from '../Preloader/Preloader';
import AppContext from '../../../contexts/AppContext';
import mainApi from '../../../utils/MainApi';
import { L_CARDS, L_ROW_CARDS, M_CARDS, M_ROW_CARDS, S_CARDS, moviesApiDomine } from '../../../constants/constants';

const MoviesCardList = () => {
  const appCtx = useContext(AppContext);
  const [isDeleting, setIsDeleting] = useState(null);

  const { isScreenS, isScreenM, isScreenL } = useResize();

  useEffect(() => {
    appCtx.clearRenderedCards();
  }, []);

  useEffect(() => {
    let cardSet = [];
    let restToRow;

    if (isScreenL) {
      if (appCtx.renderedCards.length > 0) {
        if (
          appCtx.renderedCards.length % L_ROW_CARDS === 0 ||
          appCtx.renderedCards.length < L_CARDS
        )
          return;
        restToRow = L_ROW_CARDS - (appCtx.renderedCards.length % L_ROW_CARDS);

        const additionalCardSet = appCtx.foundMovies
          .slice(
            appCtx.renderedCards.length,
            appCtx.renderedCards.length + restToRow
          )
          .map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
              onSave={handleSaveCardClick}
              onDelete={handleDeleteCardClick}
            />
          ));
        appCtx.updateRenderedCards(additionalCardSet);
        return;
      }
      cardSet = appCtx.foundMovies
        .slice(appCtx.renderedCards.length, L_CARDS)
        .map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            onSave={handleSaveCardClick}
            onDelete={handleDeleteCardClick}
          />
        ));
    } else if (isScreenM) {
      if (appCtx.renderedCards.length > 0) {
        if (
          appCtx.renderedCards.length % M_ROW_CARDS === 0 ||
          appCtx.renderedCards.length < M_CARDS
        )
          return;
        restToRow = M_ROW_CARDS - (appCtx.renderedCards.length % M_ROW_CARDS);

        const additionalCardSet = appCtx.foundMovies
          .slice(
            appCtx.renderedCards.length,
            appCtx.renderedCards.length + restToRow
          )
          .map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
              onSave={handleSaveCardClick}
              onDelete={handleDeleteCardClick}
            />
          ));
        appCtx.updateRenderedCards(additionalCardSet);
        return;
      }
      cardSet = appCtx.foundMovies
        .slice(0, M_CARDS)
        .map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            onSave={handleSaveCardClick}
            onDelete={handleDeleteCardClick}
          />
        ));
    } else if (isScreenS) {
      if (appCtx.renderedCards.length > 0) {
        return;
      }
      cardSet = appCtx.foundMovies
        .slice(0, S_CARDS)
        .map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            onSave={handleSaveCardClick}
            onDelete={handleDeleteCardClick}
          />
        ));
    }

    appCtx.getRenderedCards(cardSet);
  }, [appCtx.foundMovies, isScreenS, isScreenM, isScreenL]);

  useEffect(() => {
    if (isDeleting) {
      const movieToDelete = appCtx.savedMovies.find(
        (item) => item.movieId === isDeleting
      );

      mainApi
        .deleteMovie(movieToDelete._id)
        .then((res) => {
          if (res.data) {
            appCtx.removeFromSavedMovies(isDeleting);
            setIsDeleting(null);
          } else {
            return Promise.reject(res);
          }
        })
        .catch((err) => {
          console.log(`Ошибка: ${err.status}`);
        });
    }
  }, [isDeleting]);

  const handleSaveCardClick = (movie) => {
    mainApi
      .addMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: moviesApiDomine + movie.image.url,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: moviesApiDomine + movie.image.formats.thumbnail.url,
        movieId: movie.id,
      })
      .then((res) => {
        if (res.data) {
          appCtx.addToSavedMovies(res.data);
        } else {
          return Promise.reject(res);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.status}`);
      });
  };

  const handleDeleteCardClick = (movieId) => {
    setIsDeleting(movieId);
  };

  const handleMoreClick = () => {
    let additionalCardSet = [];
    if (isScreenL) {
      additionalCardSet = appCtx.foundMovies
        .slice(appCtx.renderedCards.length, appCtx.renderedCards.length + L_ROW_CARDS)
        .map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            onSave={handleSaveCardClick}
          />
        ));
    } else if (isScreenM) {
      additionalCardSet = appCtx.foundMovies
        .slice(appCtx.renderedCards.length, appCtx.renderedCards.length + M_ROW_CARDS)
        .map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            onSave={handleSaveCardClick}
          />
        ));
    } else if (isScreenS) {
      additionalCardSet = appCtx.foundMovies
        .slice(appCtx.renderedCards.length, appCtx.renderedCards.length + M_ROW_CARDS)
        .map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            onSave={handleSaveCardClick}
          />
        ));
    }

    const lastSearch = JSON.parse(localStorage.getItem('lastSearch'));
    lastSearch.renderedCards = [...appCtx.renderedCards, ...additionalCardSet];
    localStorage.setItem('lastSearch', JSON.stringify(lastSearch));
    appCtx.updateRenderedCards(additionalCardSet);
  };

  return (
    <section className='cardlist' aria-label='Список фильмов'>
      {appCtx.isLoading && <Preloader />}
      {appCtx.movies.length > 0 &&
        appCtx.foundMovies.length === 0 &&
        appCtx.searchResultsMsg && <h2>{appCtx.searchResultsMsg}</h2>}
      {appCtx.movies.length === 0 && appCtx.searchResultsMsg && (
        <h2>{appCtx.searchResultsMsg}</h2>
      )}
      {appCtx.foundMovies.length > 0 && (
        <ul className='cardlist__grid'>{appCtx.renderedCards}</ul>
      )}
      <button
        type='button'
        className={`cardlist__more opacity08 ${
          appCtx.foundMovies.length === appCtx.renderedCards.length
            ? 'cardlist__more_hiden'
            : ''
        }`}
        onClick={handleMoreClick}
      >
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;
