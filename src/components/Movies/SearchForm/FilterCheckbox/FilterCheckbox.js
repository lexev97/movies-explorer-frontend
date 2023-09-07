const FilterCheckbox = () => {
  return (
    <div className='filter'>
      <label htmlFor='filter-checkbox' className='filter__checkbox'>
        <input
          type='checkbox'
          id='filter-checkbox'
          className='filter__checkbox-input'
        />
        <span className='filter__checkbox-custom opacity08'></span>
      </label>
      <span className='filter__name'>Короткометражки</span>
    </div>
  );
};

export default FilterCheckbox;
