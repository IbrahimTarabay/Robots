import React from 'react';

const SearchBox = ({searchChange}) =>{
 return(
  <div className='pa2'>
    <input
      className='pa3 ba b--green bg-lightest-blue'
      type='search'
      placeholder='search robots'
      onChange={searchChange}//The onchange event occurs when the value of an element(<input>) has been changed
     />
    </div>
 	);
}

export default SearchBox;