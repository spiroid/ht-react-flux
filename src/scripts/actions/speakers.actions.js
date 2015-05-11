'use strict';

import Reflux from 'reflux';
import speakersApi from '../api.js';

var api = speakersApi.api;
var actions = Reflux.createActions({
    'getSpeakers': { asyncResult: true,}
});

actions.getSpeakers.listenAndPromise(() => {
    console.log('[ACTION] Get speakers');
    return api
        .speakers()
        .then(res => {
            return res.body;
        })
});

export default actions;
