'use strict';

// Lib imports
import React from 'react';

class SpeakerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {speakers: []};
        /*
        this.state = {speakers: [
            {
                name: 'Maxime Gaudin',
            },
            {
                name: 'Jean Helou',
            }
        ]};
        */
    }

    componentWillMount() {
        // When the component is mounted, it calls an get action
        console.log('[COMPONENT] get speaker list action !');
    }

    render() {
        console.log('[COMPONENT] speakers list rendering !');
        var list = this.state.speakers.map(function(speaker, n) {
          return (
              <li className="mui-menu-item" key={n}>{ speaker.name }</li>
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
            </div>
        );
    }
}

export default SpeakerList;
