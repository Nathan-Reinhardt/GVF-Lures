import React, { Component } from 'react';

export default class LakesInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="lake-title-cont">
                    <p className="lake-title"><strong>{this.props.lakeName}</strong></p>
                </div>
                <p className="lake-temp">Current Temperature: </p>
                <div className="text-wrapper">
                    <p className="lake-shoreline">Surface Area: {this.props.surfaceArea} acres</p>
                </div>
                <div className="text-wrapper">
                    <p className="lake-above-sea">Above Sea Level: {this.props.seaLevel} feet</p>
                </div>
                <div className="text-wrapper">
                    <p className="max-depth">Max Depth: {this.props.maxDepth} feet</p>
                </div>
                <div className="text-wrapper">
                    <p className="lake-lure"><strong>Hot Lure: {this.props.hotLure}</strong></p>
                </div>
                <div className="lakes-lure-cont">
                    {this.props.LurePic}
                </div>
            </div>
        );
    }
}