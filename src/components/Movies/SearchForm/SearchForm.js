import { useContext, useEffect, useState } from 'react';
import InputValidator from '../../../utils/InputValidator';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import moviesApi from '../../../utils/MoviesApi';
import AppContext from '../../../contexts/AppContext';

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState();
  const [inputError, setInputError] = useState(null);
  const [filterStatus, setFilterStatus] = useState(false);

  const appCtx = useContext(AppContext);

  useEffect(() => {
    const lastSearch = JSON.parse(localStorage.getItem('lastSearch'));
    if (lastSearch) {
      appCtx.onIsLoading();
      setFilterStatus(lastSearch.filterStatus);
      setSearchInput(lastSearch.searchRequest);
      moviesApi
        .getMovies()
        .then((res) => {
          if (res[0].id) {
            appCtx.getSearchResultsMsg(null);
            appCtx.getMovies(res);
            const foundMovies = lastSearch.searchResult;
            if (foundMovies.length === 0) {
              appCtx.getSearchResultsMsg('Ничего не найдено');
            }
            appCtx.getFoundMovies(foundMovies);
            appCtx.offIsLoading();
          } else {
            return Promise.reject(res);
          }
        })
        .catch((err) => {
          appCtx.offIsLoading();
          appCtx.getSearchResultsMsg(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          );
        });

      return;
    }
    return;
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (InputValidator.isEmpty(searchInput)) {
      setInputError('Нужно ввести ключевое слово');
      return;
    }

    appCtx.clearRenderedCards();
    appCtx.getSearchResultsMsg(null);
    const searchRegExp = new RegExp(`${searchInput}`, 'gi');
    appCtx.onIsLoading();

    moviesApi
      .getMovies()
      .then((res) => {
        if (res[0].id) {
          appCtx.getMovies(res);
          const foundMovies = res.filter(
            (item) =>
              (searchRegExp.test(item.nameRU) ||
                searchRegExp.test(item.nameEN)) &&
              (filterStatus ? item.duration <= 40 : item.duration > 0)
          );
          if (foundMovies.length === 0) {
            appCtx.getSearchResultsMsg('Ничего не найдено');
          }
          appCtx.getFoundMovies(foundMovies);

          localStorage.setItem(
            'lastSearch',
            JSON.stringify({
              searchRequest: searchInput,
              filterStatus: e.target[2].checked,
              searchResult: foundMovies,
            })
          );
          appCtx.offIsLoading();
        } else {
          return Promise.reject(res);
        }
      })
      .catch((err) => {
        appCtx.offIsLoading();
        appCtx.getSearchResultsMsg(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        );
      });
  };

  const handleOnChangeInput = (e) => {
    setSearchInput(e.target.value);
    if (!InputValidator.isEmpty(e.target.value)) {
      setInputError(null);
    }
  };
  const handleOnChangeFilter = (e) => {
    if (appCtx.movies.length > 0) {
      appCtx.clearRenderedCards();
      const searchRegExp = new RegExp(`${searchInput}`, 'gi');
      appCtx.getSearchResultsMsg(null);
      const foundMovies = appCtx.movies.filter(
        (item) =>
          (searchRegExp.test(item.nameRU) || searchRegExp.test(item.nameEN)) &&
          (e.target.checked ? item.duration <= 40 : item.duration > 0)
      );
      if (foundMovies.length === 0) {
        appCtx.getSearchResultsMsg('Ничего не найдено');
      }
      appCtx.getFoundMovies(foundMovies);
    }
    setFilterStatus(!filterStatus);
  };

  return (
    <section className='search'>
      <form className='search__request' onSubmit={handleSearchSubmit}>
        <label className='search__input-area'>
          <span className='search__icon'></span>
          <input
            type='text'
            className='search__input'
            placeholder='Фильм'
            value={searchInput || ''}
            onChange={handleOnChangeInput}
          />
          {inputError && <span className='search__error'>{inputError}</span>}
        </label>
        <button type='submit' className='search__submit opacity08'>
          Найти
        </button>
        <span className='search__border'></span>
        <FilterCheckbox
          checked={filterStatus}
          onChange={handleOnChangeFilter}
        />
      </form>
    </section>
  );
};

export default SearchForm;
