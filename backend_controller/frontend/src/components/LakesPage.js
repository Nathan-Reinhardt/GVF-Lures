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
        // lists to store data for lake panel components
        const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8];   // might be needed for weather api
        const lakeNames = [
            "Lake Berryessa", "Blue Mesa Reservoir"
        ];
        const shoreLengths = [  // fake values change later
            "8000", "10000"
        ];
        const seaLevels = [     // fake values change later
            "5280", "8600"
        ];
        const hotLures = [
            "Gold Digger Spin Bugs", "Chartreuse Spin Bugs"
        ];

        return(
            <div>
                <InfoNavPanel />
                <div>
                    <div className="page-title-cont">
                        <h1 className="lakes-title">Lakes & Reservoirs</h1>
                    </div>
                    <LakesPanel
                        LOR={0} myKey={keys[0]} lakeName={lakeNames[0]} shoreLength={shoreLengths[0]}
                        seaLevel={seaLevels[0]} hotLure={hotLures[0]}
                        LakePic={<div className="berryessa-pic"></div>}
                    />
                    <LakesPanel
                        LOR={1} myKey={keys[1]} lakeName={lakeNames[1]} shoreLength={shoreLengths[1]}
                        seaLevel={seaLevels[1]} hotLure={hotLures[1]}
                        LakePic={<div className="bluemesa-pic"></div>}
                    />
                </div>
            </div>
        );
    }
}