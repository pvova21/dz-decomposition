/** input form for searcher */

import React from 'react';

export default function SearchForm() {
  return (
    <>
      <form>
        <input type='text' className='input-text'/>
        <input type='button' value='Найти' />
      </form>
    </>
  );
}
