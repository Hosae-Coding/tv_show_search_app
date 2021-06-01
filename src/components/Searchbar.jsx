import React, { useState, useContext } from 'react';
import alertsContext from '../context/alerts/alertsContext';
import ShowsContext from '../context/show/showsContext';
import Alert from './Alert';
import './searchbar.css';

const Searchbar = () => {
   const [searchTerm, setSearchTerm] = useState('');
   const { searchShows } = useContext(ShowsContext);

   const { alert, setAlert } = useContext(alertsContext);

   const onSearchHandler = (e) => {
      e.preventDefault();
      if (searchTerm === '') {
         setAlert('Please enter someting', 'danger');
      } else {
         searchShows(searchTerm);
      }
   };
   return (
      <div className="searchbar">
         {alert ? <Alert message={alert.message} type={alert.type} /> : null}

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
