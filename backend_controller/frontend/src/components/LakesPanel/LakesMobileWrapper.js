import React, { Component } from 'react';
import LakesInfo from './LakesInfo';

export default class LakesMobileWrapper extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return(
            <div>
                <div className="lakes-mobile-cont">
                    <div className="picture-cont">
                        {this.props.LakePic}
                    </div>
                </div>
                <div className="lakes-mobile-cont">
                    <div className="lake-info-cont">
                        <LakesInfo 
                            lakeName={this.props.lakeName} cityLocation={this.props.cityLocation}
                            state={this.props.state} surfaceArea={this.props.surfaceArea}
                            seaLevel={this.props.seaLevel} maxDepth={this.props.maxDepth}
                            hotLure={this.props.hotLure} LurePic={this.props.LurePic}
                        />
                    </div>
                </div>
            </div>
        );
    }
}