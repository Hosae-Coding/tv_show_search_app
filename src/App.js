import { Route, Link } from 'react-router-dom';

//component
import './app.css';
import Navbar from './components/Navbar';

//pages
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Singlepage from './pages/Singlepage';

const App = () => {
   return (
      <>
         <Navbar />
         <div className="container">
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={Aboutpage} />
            <Route exact path="/singleshow/:id" component={Singlepage} />
         </div>
      </>
   );
};

export default App;
