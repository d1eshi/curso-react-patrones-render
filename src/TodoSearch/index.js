import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 37d48dc55010d4a1c9a2d5c83f033f0d8268415b
=======
>>>>>>> 37d48dc55010d4a1c9a2d5c83f033f0d8268415b
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
