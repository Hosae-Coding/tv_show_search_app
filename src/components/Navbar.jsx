import { Link } from 'react-router-dom';
import '../components/navbar.css';

const Navbar = () => {
   return (
      <div className="navbar">
         <div className="container">
            <nav className="navbar__nav">
               <h3 className="navbar__brand">
                  <Link to="/">
                     <i className="fas fa-video"></i> TV Show Search
                  </Link>
               </h3>
               <ul className="nav__links">
                  <li className="links__link">
                     <Link to="/">HOME</Link>
                  </li>
                  <li className="links__link">
                     <Link to="/about">ABOUT</Link>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   );
};

export default Navbar;
