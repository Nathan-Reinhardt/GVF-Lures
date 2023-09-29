import React, { Component } from 'react';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import Footer from './InfoNavPanel/Footer';
import IMAGES from './_images';     // NOTE: IMAGES Import is never used, but it is actually
                                    // being used by webpack to make it readable to the browser
export default class SplashPage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div>
                <InfoNavPanel />
                <div className="splash-container">
                    <div className="home-content-cont">
                        <div className="SLIDE-HOME"></div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
};