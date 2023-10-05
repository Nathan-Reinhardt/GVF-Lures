import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';

export default class LakesPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <InfoNavPanel />
                <div>
                    <div className="page-title-cont">
                        <h1 className="lakes-title">Lakes & Reservoirs</h1>
                    </div>
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
                </div>
            </div>
        );
    }
}