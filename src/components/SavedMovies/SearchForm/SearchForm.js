import { useContext, useState } from 'react';
import InputValidator from '../../../utils/InputValidator';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import AppContext from '../../../contexts/AppContext';

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState();
  const [inputError, setInputError] = useState(null);
  const [filterStatus, setFilterStatus] = useState(false);

  const appCtx = useContext(AppContext);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (InputValidator.isEmpty(searchInput)) {
      setInputError('Нужно ввести ключевое слово');
      return;
    }

    appCtx.clearRenderedCards();
    const searchRegExp = new RegExp(`${searchInput}`, 'gi');
    appCtx.getSearchResultsMsg(null);
    const foundMovies = appCtx.savedMovies.filter(
      (item) =>
        (searchRegExp.test(item.nameRU) || searchRegExp.test(item.nameEN)) &&
        (filterStatus ? item.duration <= 40 : item.duration > 0)
    );
    if (foundMovies.length === 0) {
      appCtx.getSearchResultsMsg('Ничего не найдено');
    }
    appCtx.getFoundSavedMovies(foundMovies);
  };

  const handleOnChangeInput = (e) => {
    setSearchInput(e.target.value);
    if (!InputValidator.isEmpty(e.target.value)) {
      setInputError(null);
    }
  };
  const handleOnChangeFilter = (e) => {
    if (searchInput === undefined) {
      appCtx.clearRenderedCards();
      appCtx.getSearchResultsMsg(null);
      const foundMovies = appCtx.savedMovies.filter((item) =>
        e.target.checked ? item.duration <= 40 : item.duration > 0
      );
      if (foundMovies.length === 0) {
        appCtx.getSearchResultsMsg('Ничего не найдено');
      }
      appCtx.getFoundSavedMovies(foundMovies);
      setFilterStatus(!filterStatus);
      return;
    }
    if (appCtx.savedMovies.length > 0) {
      appCtx.clearRenderedCards();
      const searchRegExp = new RegExp(`${searchInput}`, 'gi');
      appCtx.getSearchResultsMsg(null);
      const foundMovies = appCtx.savedMovies.filter(
        (item) =>
          (searchRegExp.test(item.nameRU) || searchRegExp.test(item.nameEN)) &&
          (e.target.checked ? item.duration <= 40 : item.duration > 0)
      );
      if (foundMovies.length === 0) {
        appCtx.getSearchResultsMsg('Ничего не найдено');
      }
      appCtx.getFoundSavedMovies(foundMovies);
      setFilterStatus(!filterStatus);
      return;
    }
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
