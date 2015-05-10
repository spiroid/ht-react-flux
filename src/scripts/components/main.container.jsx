'use strict';

import React from 'react';
import Router from 'react-router';
var RouteHandler = Router.RouteHandler;

export default class Main extends React.Component {
    render() {
        return (
            <div className="mui-app-canvas mui-predefined-layout-1">
                <div className="mui-dark-theme mui-app-bar mui-paper mui-z-depth-0">
                    <div className="mui-paper-container mui-z-depth-bottom">
                        <button className="mui-app-bar-navigation-icon-button mui-icon-button mui-enhanced-button">
                        </button>
                        <h1 className="mui-app-bar-title">Human Talks</h1>
                    </div>
                </div>
                <div className="mui-app-content-canvas page-with-nav">
                    <div className="page-with-nav-content">
                        <RouteHandler key="app" />
                    </div>
                    <div className="page-with-nav-secondary-nav">
                        <div className="mui-menu mui-visible mui-paper mui-z-depth-0 mui-rounded">
                            <div className="mui-paper-container mui-z-depth-bottom">
                                <div className="mui-menu-item"><span>Speakers</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer full-width-section mui-dark-theme">
                    <p>
                        <span>Human Talks 2015. By </span>
                        <a href="http://www.spicymoka.org/">Spicy Moka</a>
                    </p>
                </div>
            </div>
        );
    }
}
