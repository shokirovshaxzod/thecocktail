import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../Redux/Thunk';
function SearchForm() {
  const [search, setSearch] = React.useState('a');
  const searchValue = React.useRef('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  React.useEffect(() => {
    dispatch(fetchSearch(search));
  }, [search]);

  function searchCocktail(e) {
    // setSearch(searchValue.current.value);
    setSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" name="name" id="name" ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  );
}
export default SearchForm;
