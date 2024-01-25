import React, { Component } from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import HomeApp from "./_HomeApp";

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
    };
};

const rootDiv = document.getElementById("root");
const rootInstance = createRoot(rootDiv);
rootInstance.render(<App />);