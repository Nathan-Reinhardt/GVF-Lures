import React, { Component } from 'react';

export default class LakesPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.LOR == 0 &&     // Picture on the left
                <>
                    <div className="lake-cont">
                        <div className="picture-cont-left">
                            {this.props.LakePic}
                        </div>
                        <div className="lake-info-cont">
                            <div>
                                <div className="lake-title-cont">
                                    <p className="lake-title"><strong>{this.props.lakeName}</strong></p>
                                </div>
                                <p className="lake-temp">Current Temperature: </p>
                                <div className="text-wrapper">
                                    <p className="lake-shoreline">Shoreline Length: {this.props.shoreLength}</p>
                                </div>
                                <div className="text-wrapper">
                                    <p className="lake-above-sea">Above Sea Level: {this.props.seaLevel}</p>
                                </div>
                                <div className="text-wrapper">
                                    <p className="lake-lure">Hot Lure: {this.props.hotLure}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                }
                {this.props.LOR == 1 &&     // Picture on the right
                <>
                    <div className="lake-cont">
                        <div className="lake-info-cont">
                            <div>
                                <div className="lake-title-cont">
                                    <p className="lake-title"><strong>{this.props.lakeName}</strong></p>
                                </div>
                                <p className="lake-temp">Current Temperature: </p>
                                <div className="text-wrapper">
                                    <p className="lake-shoreline">Shoreline Length: {this.props.shoreLength}</p>
                                </div>
                                <div className="text-wrapper">
                                    <p className="lake-above-sea">Above Sea Level: {this.props.seaLevel}</p>
                                </div>
                                <div className="text-wrapper">
                                    <p className="lake-lure">Hot Lure: {this.props.hotLure}</p>
                                </div>
                            </div>
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