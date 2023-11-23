import React, { Component } from 'react';
import InfoNavPanel from './InfoNavPanel/InfoNavPanel';
import LakesPanel from './LakesPanel/LakesPanel';
import Footer from './InfoNavPanel/Footer';
import { LakesMedia } from '../utils/_lakeimages';

export default class LakesPage extends Component {
    constructor(props) {
        super(props);
    }

    // Lakes Panel props naming convention:

    // LOR = Left Or Right | for where the lake picture is placed on the page
    // lakeName = Name of the lake
    // state = Name of the state
    // cityLocation = Name of the city used for the weather api calls
    // surfaceArea = Measurement in acres of the surface area of water on the lake
    // seaLevel = Measurement in feet of the distance from sea level
    // maxDepth = Measurement in feet of the max depth in the lake
    // hotLure = Name of the hot lure of the lake
    // LakePic = Div element for the picture of the lake
    // LurePic = Div element for the picture of the hot lure of the lake

    render() {
        // lists to store data for lake panel components
        const lakeNames = [
            "Lake Berryessa", "Blue Mesa Reservoir", "Flaming Gorge Reservoir",
            "Hell Hole Reservoir", "New Bullards Bar Reservoir", "New Melones Lake",
            "Pardee Reservoir", "Pyramid Lake", "Stampede Reservoir"
        ];

        const states = [
            "California", "Colorado", "Wyoming/Utah", "California", "California",
            "California", "California", "Nevada", "California", 
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
            "275", "310", "436", "350", "635", "565", "300", "350", "228"
        ];

        // might replace these pictures in the future
        const hotLures = [
            "PINKANATOR", "APPLETINI", "PINA COLADA", "HOLLY'S RUBY SLIPPER",
            "CANTALOUPE", "PINKANATOR", "MAI TAI", "DRAGONS", "CHERRY FIZZ"
        ];

        console.log(LakesMedia);

        return(
            <div>
                <InfoNavPanel />
                <div className="lake-panels-cont">
                    <div className="lakes-page-title-cont">
                        <h1 className="lakes-title">Lakes & Reservoirs</h1>
                    </div>
                    <LakesPanel
                        LOR={0} lakeName={lakeNames[0]} state={states[0]} cityLocation={cityLocations[0]}
                        surfaceArea={surfaceAreas[0]} seaLevel={seaLevels[0]} maxDepth={maxDepths[0]}
                        hotLure={hotLures[0]} LakePic={<img className="berryessa-pic" src={LakesMedia[0].url} />}
                        LurePic={<img className="pinkanator-pic" src={LakesMedia[9].url} />}
                    />
                    <LakesPanel
                        LOR={1} lakeName={lakeNames[1]} state={states[1]} cityLocation={cityLocations[1]}
                        surfaceArea={surfaceAreas[1]} seaLevel={seaLevels[1]} maxDepth={maxDepths[1]}
                        hotLure={hotLures[1]} LakePic={<img className="bluemesa-pic" src={LakesMedia[1].url} />}
                        LurePic={<img className="appletini-pic" src={LakesMedia[10].url} />}
                    />
                    <LakesPanel
                        LOR={0} lakeName={lakeNames[2]} state={states[2]} cityLocation={cityLocations[2]}
                        surfaceArea={surfaceAreas[2]} seaLevel={seaLevels[2]} maxDepth={maxDepths[2]}
                        hotLure={hotLures[2]} LakePic={<img className="flaming-gorge-pic" src={LakesMedia[2].url} />}
                        LurePic={<img className="pina-colada-pic" src={LakesMedia[11].url} />}
                    />
                    <LakesPanel
                        LOR={1} lakeName={lakeNames[3]} state={states[3]} cityLocation={cityLocations[3]}
                        surfaceArea={surfaceAreas[3]} seaLevel={seaLevels[3]} maxDepth={maxDepths[3]}
                        hotLure={hotLures[3]} LakePic={<img className="hell-hole-pic" src={LakesMedia[3].url} />}
                        LurePic={<img className="hollys-ruby-slipper-pic" src={LakesMedia[12].url} />}
                    />
                    <LakesPanel
                        LOR={0} lakeName={lakeNames[4]} state={states[4]} cityLocation={cityLocations[4]}
                        surfaceArea={surfaceAreas[4]} seaLevel={seaLevels[4]} maxDepth={maxDepths[4]}
                        hotLure={hotLures[4]} LakePic={<img className="new-bullards-bar-pic" src={LakesMedia[4].url} />}
                        LurePic={<img className="cantaloupe-pic" src={LakesMedia[13].url} />}
                    />
                    <LakesPanel
                        LOR={1} lakeName={lakeNames[5]} state={states[5]} cityLocation={cityLocations[5]}
                        surfaceArea={surfaceAreas[5]} seaLevel={seaLevels[5]} maxDepth={maxDepths[5]}
                        hotLure={hotLures[5]} LakePic={<img className="new-melones-pic" src={LakesMedia[5].url} />}
                        LurePic={<img className="pinkanator-pic" src={LakesMedia[9].url} />}
                    />
                    <LakesPanel
                        LOR={0} lakeName={lakeNames[6]} state={states[6]} cityLocation={cityLocations[6]}
                        surfaceArea={surfaceAreas[6]} seaLevel={seaLevels[6]} maxDepth={maxDepths[6]}
                        hotLure={hotLures[6]} LakePic={<img className="pardee-pic" src={LakesMedia[6].url} />}
                        LurePic={<img className="mai-tai-pic" src={LakesMedia[14].url} />}
                    />
                    <LakesPanel
                        LOR={1} lakeName={lakeNames[7]} state={states[7]} cityLocation={cityLocations[7]}
                        surfaceArea={surfaceAreas[7]} seaLevel={seaLevels[7]} maxDepth={maxDepths[7]}
                        hotLure={hotLures[7]} LakePic={<img className="pyramid-pic" src={LakesMedia[7].url} />}
                        LurePic={<img className="white-ladder-back-pic" src={LakesMedia[15].url} />}
                    />
                    <LakesPanel
                        LOR={0} lakeName={lakeNames[8]} state={states[8]} cityLocation={cityLocations[8]}
                        surfaceArea={surfaceAreas[8]} seaLevel={seaLevels[8]} maxDepth={maxDepths[8]}
                        hotLure={hotLures[8]} LakePic={<img className="stampede-pic" src={LakesMedia[8].url} />}
                        LurePic={<img className="cherry-fizz-pic" src={LakesMedia[16].url} />}
                    />
                </div>
                <Footer />
            </div>
        );
    }
}