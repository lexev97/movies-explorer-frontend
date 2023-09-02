import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className='search' area-label='Форма для поиска фильмов'>
      <form className='search__request'>
        <label htmlFor='searchInput' className='search__input-area'>
          <span className='search__icon'></span>
          <input
            type='text'
            id='search-input'
            className='search__input'
            placeholder='Фильм'
          />
        </label>
        <button type='submit' className='search__submit opacity08'>
          Найти
        </button>
      </form>
      <FilterCheckbox />
    </section>
  );
};

export default SearchForm;
