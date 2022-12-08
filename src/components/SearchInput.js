import React, { useRef} from 'react'
import { useDispatch} from 'react-redux';
import { fetchSearchCocktails } from '../redux/features/cocktailSlice';
 
const SearchInput = () => {
  const searchValue = useRef();
  const dispatch = useDispatch();

  const handleChange = () =>{
      const searchText = searchValue.current.value;
      dispatch(fetchSearchCocktails({searchText}));     
  }

  const handleSubmit = (e) =>{
      e.preventDefault();
  }
  
  return ( 
    <div className="search">
      <i className="bi bi-search" />
      <form onSubmit={handleSubmit}>
        <input type="text" name="cocktail" placeholder='Search youe cocktail'  ref={searchValue} onChange={handleChange} />
      </form>
    </div>
  )
}

export default SearchInput
