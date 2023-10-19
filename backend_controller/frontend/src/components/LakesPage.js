import React, { Component } from 'react';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import LakesPanel from './LakesPanel/LakesPanel';
import Footer from './InfoNavPanel/Footer';

export default class LakesPage extends Component {
    constructor(props) {
        super(props);
    }

    // Lakes Panel props naming convention:
    // LOR = Left Or Right | for where the lake picture is placed on the page

    render() {
        // lists to store data for lake panel components
        const lakeNames = [
            "Lake Berryessa", "Blue Mesa Reservoir", "Flaming Gorge Reservoir",
            "Hell Hole Reservoir", "New Bullards Bar Reservoir", "New Melones Lake",
            "Pardee Reservoir", "Pyramid Lake", "Stampede Reservoir"
        ];

        // specific list to help the weather api call on locations
        const cityLocations = [
            "Redbud Park (historical)", "Gunnison", "Green River", "Tahoma", 
            "Challenge-Brownsville", "City of Angels", "Valley Springs", "Spanish Springs", "Verdi"
        ];

        const surfaceAreas = [
            "20700", "9180", "42020", "1253", "4600", "12602", "1556", "117400", "3230"
        ];

        const seaLevels = [
            "443", "7524", "6044", "4584", "1908", "1090", "570", "3795", "5953"
        ];

        const maxDepths = [
            "275", "310", "436", "350", "~ 600", "565", "300", "350", "228"
        ];

        const hotLures = [
            "Gold Digger Spin Bugs", "Chartreuse Spin Bugs", "Placeholder", "Placeholder",
            "Orange Spin Bugs", "Pink Spin Bugs", "Orange Spin Bugs", "DRAGONS", "Placeholder"
        ];

        return(
            <div>
                <InfoNavPanel />
                <div className="lake-panels-cont">
                    <div className="lakes-page-title-cont">
                        <h1 className="lakes-title">Lakes & Reservoirs</h1>
                    </div>
                    <LakesPanel
                        LOR={0} lakeName={lakeNames[0]} cityLocation={cityLocations[0]}
                        surfaceArea={surfaceAreas[0]} seaLevel={seaLevels[0]} maxDepth={maxDepths[0]}
                        hotLure={hotLures[0]}
                        LakePic={<div className="berryessa-pic"></div>}
                        LurePic={<div className="white-ladder-back-pic"></div>}
                    />
                    <LakesPanel
                        LOR={1} lakeName={lakeNames[1]} cityLocation={cityLocations[1]}
                        surfaceArea={surfaceAreas[1]} seaLevel={seaLevels[1]} maxDepth={maxDepths[1]}
                        hotLure={hotLures[1]}
                        LakePic={<div className="bluemesa-pic"></div>}
                        LurePic={<div className="white-ladder-back-pic"></div>}
                    />
                    <LakesPanel
                        LOR={0} lakeName={lakeNames[2]} cityLocation={cityLocations[2]}
                        surfaceArea={surfaceAreas[2]} seaLevel={seaLevels[2]} maxDepth={maxDepths[2]}
                        hotLure={hotLures[2]}
                        LakePic={<div className="flaming-gorge-pic"></div>}
                        LurePic={<div className="white-ladder-back-pic"></div>}
                    />
                    <LakesPanel
                        LOR={1} lakeName={lakeNames[3]} cityLocation={cityLocations[3]}
                        surfaceArea={surfaceAreas[3]} seaLevel={seaLevels[3]} maxDepth={maxDepths[3]}
                        hotLure={hotLures[3]}
                        LakePic={<div className="hell-hole-pic"></div>}
                        LurePic={<div className="white-ladder-back-pic"></div>}
                    />
                    <LakesPanel
                        LOR={0} lakeName={lakeNames[4]} cityLocation={cityLocations[4]}
                        surfaceArea={surfaceAreas[4]} seaLevel={seaLevels[4]} maxDepth={maxDepths[4]}
                        hotLure={hotLures[4]}
                        LakePic={<div className="new-bullards-bar-pic"></div>}
                        LurePic={<div className="white-ladder-back-pic"></div>}
                    />
                    <LakesPanel
                        LOR={1} lakeName={lakeNames[5]} cityLocation={cityLocations[5]}
                        surfaceArea={surfaceAreas[5]} seaLevel={seaLevels[5]} maxDepth={maxDepths[5]}
                        hotLure={hotLures[5]}
                        LakePic={<div className="new-melones-pic"></div>}
                        LurePic={<div className="white-ladder-back-pic"></div>}
                    />
                    <LakesPanel
                        LOR={0} lakeName={lakeNames[6]} cityLocation={cityLocations[6]}
                        surfaceArea={surfaceAreas[6]} seaLevel={seaLevels[6]} maxDepth={maxDepths[6]}
                        hotLure={hotLures[6]}
                        LakePic={<div className="pardee-pic"></div>}
                        LurePic={<div className="white-ladder-back-pic"></div>}
                    />
                    <LakesPanel
                        LOR={1} lakeName={lakeNames[7]} cityLocation={cityLocations[7]}
                        surfaceArea={surfaceAreas[7]} seaLevel={seaLevels[7]} maxDepth={maxDepths[7]}
                        hotLure={hotLures[7]}
                        LakePic={<div className="pyramid-pic"></div>}
                        LurePic={<div className="white-ladder-back-pic"></div>}
                    />
                    <LakesPanel
                        LOR={0} lakeName={lakeNames[8]} cityLocation={cityLocations[8]}
                        surfaceArea={surfaceAreas[8]} seaLevel={seaLevels[8]} maxDepth={maxDepths[8]}
                        hotLure={hotLures[8]}
                        LakePic={<div className="stampede-pic"></div>}
                        LurePic={<div className="white-ladder-back-pic"></div>}
                    />
                </div>
                <Footer />
            </div>
        );
    }
}