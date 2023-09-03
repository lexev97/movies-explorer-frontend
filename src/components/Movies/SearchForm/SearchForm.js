import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <div className='search'>
      <form className='search__request'>
        <label className='search__input-area'>
          <span className='search__icon'></span>
          <input
            type='text'            
            className='search__input'
            placeholder='Фильм'
            required
          />
        </label>
        <button type='submit' className='search__submit opacity08'>
          Найти
        </button>
        <span className="search__border"></span>
        <FilterCheckbox />
      </form>
    </div>
  );
};

export default SearchForm;
