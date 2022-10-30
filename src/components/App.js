import React, { Component } from "react";

import RemoteComponent from './RemoteComponent';

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>
                    React App (Remote)
                </h1>
                <RemoteComponent />
            </div>
        );
    }
}

export default App;
