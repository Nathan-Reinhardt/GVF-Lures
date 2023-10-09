import React, { Component } from 'react';

export default class LakesPanel extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.LOR);
    }

    render() {
        return(
            <div>
                {this.props.LOR == 0 &&
                <>
                    <div className="lake-cont">
                        <div className="picture-cont-left">
                            <div className="berryessa-pic"></div>
                        </div>
                        <div className="lake-info-cont">
                            <div>
                                <div className="lake-title-cont">
                                    <p className="lake-title"><strong>Lake Berryessa</strong></p>
                                </div>
                                <p className="lake-temp">Current Temperature: </p>
                                <div className="text-wrapper">
                                    <p className="lake-shoreline">Shoreline Length: </p>
                                </div>
                                <div className="text-wrapper">
                                    <p className="lake-above-sea">Above Sea Level: </p>
                                </div>
                                <div className="text-wrapper">
                                    <p className="lake-lure">Hot Lure: Gold Digger Spin Bugs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                }
                {this.props.LOR == 1 &&
                <>
                    <div className="lake-cont">
                        <div className="lake-info-cont">
                            <div>
                                <div className="lake-title-cont">
                                    <p className="lake-title"><strong>Blue Mesa Reservoir</strong></p>
                                </div>
                                <p className="lake-temp">Current Temperature: </p>
                                <div className="text-wrapper">
                                    <p className="lake-shoreline">Shoreline Length: </p>
                                </div>
                                <div className="text-wrapper">
                                    <p className="lake-above-sea">Above Sea Level: </p>
                                </div>
                                <div className="text-wrapper">
                                    <p className="lake-lure">Hot Lure: Chartreuse Spin Bugs</p>
                                </div>
                            </div>
                        </div>
                        <div className="picture-cont-right">
                            <div className="bluemesa-pic"></div>
                        </div>
                    </div>
                </>
                }
            </div>
        );
    }
}