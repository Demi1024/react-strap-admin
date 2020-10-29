import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import Main from 'pages/main';

const RouterPage = ()=>{
    return(
        <Router>
            <Switch>
                <Route path='/' component={Main}></Route>
            </Switch>
        </Router>
    )
}
export default RouterPage;