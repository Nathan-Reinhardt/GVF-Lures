import React, { Component } from 'react';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import LakesPanel from './LakesPanel/LakesPanel';

export default class LakesPage extends Component {
    constructor(props) {
        super(props);
    }

    // Lakes Panel props naming convention:
    // LOR = Left Or Right

    render() {
        const lakeNameList = ["Lake Berryessa", "Blue Mesa Reservoir"];
        const ShorelineLength = ["8000", "10000"];
        const AboveSeaLevel = ["5280", "8600"];
        const HotLure = [
            "Gold Digger Spin Bugs",
            "Chartreuse Spin Bugs"
        ]

        return(
            <div>
                <InfoNavPanel />
                <div>
                    <div className="page-title-cont">
                        <h1 className="lakes-title">Lakes & Reservoirs</h1>
                    </div>
                    <LakesPanel LOR={0} />
                    <LakesPanel LOR={1} />
                </div>
            </div>
        );
    }
}