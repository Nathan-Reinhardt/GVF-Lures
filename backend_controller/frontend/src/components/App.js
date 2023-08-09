import React, { Component } from "react";
import { render } from "react-dom";
import HomeApp from "./HomeApp";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HomeApp />
            </div>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);