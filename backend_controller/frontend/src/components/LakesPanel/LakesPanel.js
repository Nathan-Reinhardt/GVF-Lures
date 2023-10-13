import React, { Component } from 'react';
import LakesInfo from './LakesInfo';

export default class LakesPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.LOR == 0 &&     // Picture on the left
                <>
                    <div className="left-lake-cont">
                        <div className="picture-cont-left">
                            {this.props.LakePic}
                        </div>
                        <div className="lake-info-cont">
                            <LakesInfo 
                                lakeName={this.props.lakeName} surfaceArea={this.props.surfaceArea}
                                seaLevel={this.props.seaLevel} maxDepth={this.props.maxDepth}
                                hotLure={this.props.hotLure}
                            />
                        </div>
                    </div>
                </>
                }
                {this.props.LOR == 1 &&     // Picture on the right
                <>
                    <div className="right-lake-cont">
                        <div className="lake-info-cont">
                            <LakesInfo 
                                lakeName={this.props.lakeName} surfaceArea={this.props.surfaceArea}
                                seaLevel={this.props.seaLevel} maxDepth={this.props.maxDepth}
                                hotLure={this.props.hotLure}
                            />
                        </div>
                        <div className="picture-cont-right">
                            {this.props.LakePic}
                        </div>
                    </div>
                </>
                }
            </div>
        );
    }
}