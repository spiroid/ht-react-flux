'use strict';

import React from 'react';
import Router from 'react-router';

import Main from './components/main.container.jsx';
import SpeakerList from './components/speakerList.component.jsx';

var Route        = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
    <Route handler={ Main }>
         <DefaultRoute name="home" handler={ SpeakerList } />
    </Route>
);


Router.run(routes, function(Handler, state) {
    React.render(<Handler params={ state.params } />, document.getElementById('app'));
});
