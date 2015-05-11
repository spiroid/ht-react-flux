'use strict';

import _ from 'lodash';
import Reflux from 'reflux';

import actions from '../actions/speakers.actions.js';

export default Reflux.createStore({
    listenables: [actions],

    init: function() {
        this.data = [];
        console.log('[STORE] init', this.data);
    },

    onGetSpeakersCompleted: function(data) {
        console.log('[STORE] get speakers action received', data);
        this.data = data;
        this.trigger(data);
    },

    getInitialState: function() {
        console.log('[STORE] get initial state');
        return this.data;
    }
});
