'use strict';

import _ from 'lodash';
import Reflux from 'reflux';

import actions from '../actions/speakers.actions.js';

export default Reflux.createStore({
    listenables: [actions],

    init: function() {
        this.data = [];
        this.error = '';
        console.log('[STORE] init');
    },

    onGetSpeakersCompleted: function(data) {
        console.log('[STORE] get speakers action received', data);
        this.data = data;
        this.error = '';
        this.triggerAll();
    },

    onGetSpeakersFailed: function(error) {
        console.log('[STORE] get speakers action fail received', error);
        this.data = [];
        this.error = error.message;
        this.triggerAll();
    },

    getInitialState: function() {
        console.log('[STORE] get initial state');
        return {
            speakers: this.data,
            error: this.error
        };
    },

    triggerAll: function() {
        this.trigger({
            speakers: this.data,
            error: this.error
        });
    }
});
