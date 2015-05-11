'use strict';

import Reflux from 'reflux';

var actions = Reflux.createActions({
    'getSpeakers': { asyncResult: true,}
});

actions.getSpeakers.listen(() => {
    console.log('[ACTION] Get speakers');
    actions.getSpeakers.completed([
        {
            name: 'Maxime Gaudin',
        },
        {
            name: 'Jean Helou',
        },
        {
            name: 'Nicolas Demengel',
        },
        {
            name: 'Cédric Vanet'
        }
    ]);
});

export default actions;
