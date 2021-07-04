import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'

import GlobalStyles from './Styles/GlobalStyles';
import Search from './Screens/Search';

function App() {
  return (
    <Fragment>
      <GlobalStyles />

      <Switch>
        <Route exact path='/' component={Search} />
      </Switch>
    </Fragment>
  );
}

export default App;
