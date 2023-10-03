import React, { Component } from 'react';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';

export default class GalleryPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <InfoNavPanel />
                <div className="gallery-container">
                    <h1 className="gallery-text">Gallery Page</h1>
                </div>
            </div>
        );
    }
}