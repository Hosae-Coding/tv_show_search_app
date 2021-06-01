import { useEffect, useContext } from 'react';
import './singlepage.css';

import ShowContext from '../context/show/showsContext';

const Singlepage = ({ match }) => {
   const { getSingleShow, singleShow, loading } = useContext(ShowContext);

   useEffect(() => {
      getSingleShow(match.params.id);
   }, []);

   return (
      <>
         {loading ? (
            <h2>loading ...</h2>
         ) : (
            <div className="singleshow">
               <img
                  src={
                     singleShow.image
                        ? singleShow.image.medium
                        : 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
                  }
                  alt={singleShow.name}
               />
               <div className="singleshow__info">
                  <h1>{singleShow.name}</h1>
                  {singleShow.gernes &&
                     singleShow.gernes.map((gerne) => (
                        <span key={gerne} className="singshow__genre"></span>
                     ))}
                  <p>
                     <strong>Status:</strong>
                     {singleShow.status && singleShow.status}
                  </p>
                  <p>
                     <strong>Rating:</strong>
                     {singleShow.rating
                        ? singleShow.rating.average
                        : 'No rating'}
                  </p>
                  <p>
                     <strong>Offical site:</strong>
                     {singleShow.officialSite ? (
                        <a
                           href={singleShow.officialSite}
                           target="_blank rel="
                           noreferrer
                        >
                           {' '}
                           {singleShow.officialSite}
                        </a>
                     ) : (
                        'No official site'
                     )}
                  </p>
               </div>
            </div>
         )}
      </>
   );
};

export default Singlepage;
