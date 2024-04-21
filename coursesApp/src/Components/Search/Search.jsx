import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <div className='searchContainer relative'>
      <SearchIcon className='absolute left-0 top-1/2 transform -translate-y-1/2 ml-2' style={{ color: '#3851fe' }} />
      <input
        type='text'
        placeholder='Пребарувај'
        className={`pl-10 rounded-full py-1 text-lg`}
        style={{ border: "2px solid #3851fe" }}
      />
    </div>
  );
}

export default Search;
