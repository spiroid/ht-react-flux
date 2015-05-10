'use strict';

import _ from 'lodash';
import Reflux from 'reflux';

export default Reflux.createStore({
    init: function() {
        this.data = [
            {
                name: 'Maxime Gaudin',
            },
            {
                name: 'Jean Helou',
            },
            {
                name: 'Nicolas Demengel',
            }
        ];
        console.log('[STORE] init', this.data);
    },

    getInitialState: function() {
        console.log('[STORE] get initial state');
        return this.data;
    }
});
