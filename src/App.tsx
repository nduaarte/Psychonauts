import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'

import GlobalStyles from './Styles/GlobalStyles';
import Search from './Screens/Search';
import Favorites from './Screens/Favorites';

function App() {
  return (
    <Fragment>
      <GlobalStyles />

      <Switch>
        <Route exact path='/' component={Search} />
        <Route path='/favorites' component={Favorites} />
      </Switch>
    </Fragment>
  );
}

export default App;
