'use strict';

import superagent from 'superagent';
import superapi from 'superapi';

// api configuration
var api = superapi.default({
    baseUrl: 'http://localhost:8081',
    services: {
        speakers: {
            path: '/echo/speakers',
        },
    },
    options: {
        accept: 'json'
    }
});
api.agent = superagent;

export default api;

