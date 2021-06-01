import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import ShowsState from './context/show/ShowsState';
import AlertsState from './context/alerts/AlertsState';

ReactDOM.render(
   <ShowsState>
      <AlertsState>
         <Router>
            <Switch>
               <App />
            </Switch>
         </Router>
      </AlertsState>
   </ShowsState>,
   document.getElementById('root')
);
