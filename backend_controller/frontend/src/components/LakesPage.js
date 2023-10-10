import React, { Component } from 'react';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import LakesPanel from './LakesPanel/LakesPanel';
import Footer from './InfoNavPanel/Footer';

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
            "Lake Berryessa", "Blue Mesa Reservoir", "Flaming Gorge Reservoir",
            "Hell Hole Reservoir", "New Bullards Bar Reservoir", "New Melones Lake",
            "Pardee Reservoir", "Pyramid Lake", "Stampede Reservoir"
        ];
        const shoreLengths = [
            "165", "96", "350", "00", "56", "99", "00", "00", "25"
        ];
        const seaLevels = [
            "443", "7524", "6044", "4584", "1908", "1090", "570", "3795", "5953"
        ];
        const maxDepth = [
            "00", "00", "00", "00", "00", "00", "00", "356", "120"
        ]
        const hotLures = [
            "Gold Digger Spin Bugs", "Chartreuse Spin Bugs", "Placeholder", "Placeholder",
            "Orange Spin Bugs", "Pink Spin Bugs", "Orange Spin Bugs", "Dragons", "Placeholder"
        ];

        return(
            <div>
                <InfoNavPanel />
                <div className="lake-panels-cont">
                    <div className="page-title-cont">
                        <h1 className="lakes-title">Lakes & Reservoirs</h1>
                    </div>
                    <LakesPanel
                        LOR={0} myKey={keys[0]} lakeName={lakeNames[0]} shoreLength={shoreLengths[0]}
                        seaLevel={seaLevels[0]} maxDepth={maxDepth[0]} hotLure={hotLures[0]}
                        LakePic={<div className="berryessa-pic"></div>}
                    />
                    <LakesPanel
                        LOR={1} myKey={keys[1]} lakeName={lakeNames[1]} shoreLength={shoreLengths[1]}
                        seaLevel={seaLevels[1]} maxDepth={maxDepth[1]} hotLure={hotLures[1]}
                        LakePic={<div className="bluemesa-pic"></div>}
                    />
                    <LakesPanel
                        LOR={0} myKey={keys[2]} lakeName={lakeNames[2]} shoreLength={shoreLengths[2]}
                        seaLevel={seaLevels[2]} maxDepth={maxDepth[2]} hotLure={hotLures[2]}
                        LakePic={<div className="flaming-gorge-pic"></div>}
                    />
                    <LakesPanel
                        LOR={1} myKey={keys[3]} lakeName={lakeNames[3]} shoreLength={shoreLengths[3]}
                        seaLevel={seaLevels[3]} maxDepth={maxDepth[3]} hotLure={hotLures[3]}
                        LakePic={<div className="hell-hole-pic"></div>}
                    />
                    <LakesPanel
                        LOR={0} myKey={keys[4]} lakeName={lakeNames[4]} shoreLength={shoreLengths[4]}
                        seaLevel={seaLevels[4]} maxDepth={maxDepth[4]} hotLure={hotLures[4]}
                        LakePic={<div className="new-bullards-bar-pic"></div>}
                    />
                    <LakesPanel
                        LOR={1} myKey={keys[5]} lakeName={lakeNames[5]} shoreLength={shoreLengths[5]}
                        seaLevel={seaLevels[5]} maxDepth={maxDepth[5]} hotLure={hotLures[5]}
                        LakePic={<div className="new-melones-pic"></div>}
                    />
                    <LakesPanel
                        LOR={0} myKey={keys[6]} lakeName={lakeNames[6]} shoreLength={shoreLengths[6]}
                        seaLevel={seaLevels[6]} maxDepth={maxDepth[6]} hotLure={hotLures[6]}
                        LakePic={<div className="pardee-pic"></div>}
                    />
                    <LakesPanel
                        LOR={1} myKey={keys[7]} lakeName={lakeNames[7]} shoreLength={shoreLengths[7]}
                        seaLevel={seaLevels[7]} maxDepth={maxDepth[7]} hotLure={hotLures[7]}
                        LakePic={<div className="pyramid-pic"></div>}
                    />
                    <LakesPanel
                        LOR={0} myKey={keys[8]} lakeName={lakeNames[8]} shoreLength={shoreLengths[8]}
                        seaLevel={seaLevels[8]} maxDepth={maxDepth[8]} hotLure={hotLures[8]}
                        LakePic={<div className="stampede-pic"></div>}
                    />
                </div>
                <Footer />
            </div>
        );
    }
}