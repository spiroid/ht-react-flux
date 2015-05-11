'use strict';

// Lib imports
import React from 'react';
import Reflux from 'reflux';
import reactMixin from 'react-mixin';
import mui from 'material-ui';

import speakersStore from '../stores/speakers.store.js';
import speakersActions from '../actions/speakers.actions.js';

var Snackbar = mui.Snackbar;

class SpeakerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           speakers: [],
           error: ''
        };
    }

    componentWillMount() {
        // When the component is mounted, it calls an get action
        console.log('[COMPONENT] trigger speakers list action !');
        speakersActions.getSpeakers();
    }

    render() {
        console.log('[COMPONENT] speakers list rendering !');

        var snackbar;
        if(this.state.error) {
            snackbar = <Snackbar openOnMount={true} message={this.state.error} action="undo" />
        }

        var list = this.state.speakers.map(function(speaker, n) {
            return (
                <li className="mui-menu-item speaker-item valign-wrapper" key={n}>
                    <img className="circle responsive-img valign" src={speaker.pictureURL} />
                    <div className="speaker-info">
                        <h4 className="speaker-name">{ speaker.firstName } {speaker.lastName}</h4>
                        <p>{speaker.title} - <span>{speaker.date}</span></p>
                    </div>
                </li>
            );
        });

        return (
            <div className="component-doc">
                <h2 className="mui-font-style-headline">Speakers</h2>
                <div className="code-example mui-paper mui-z-depth-1 mui-rounded">
                    <div className="mui-paper-container mui-z-depth-bottom">
                        <ul className="mui-menu">
                            {list}
                        </ul>
                    </div>
                </div>
                { snackbar }
            </div>
        );
    }
}
reactMixin.onClass(SpeakerList, Reflux.connect(speakersStore));

export default SpeakerList;
