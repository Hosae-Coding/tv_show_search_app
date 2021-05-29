import React, { useState } from 'react';
import Alert from './Alert';
import './searchbar.css';

const Searchbar = () => {
   const [searchTerm, setSearchTerm] = useState('');
   const onSearchHandler = (e) => {
      e.preventDefault();

      console.log('search');
   };
   return (
      <div className="searchbar">
         <Alert message="Please Write Something" type="danger" />
         <form className="searchbar__form">
            <input
               type="text"
               placeholder="Search Tv show"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-block" onClick={onSearchHandler}>
               Search
            </button>
         </form>
      </div>
   );
};

export default Searchbar;
