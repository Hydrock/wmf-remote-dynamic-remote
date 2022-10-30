import React, { Component } from "react";

import RemoteComponent1 from './RemoteComponent1';
import RemoteComponent2 from './RemoteComponent2';

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>
                    React App (Remote)
                </h1>
                <RemoteComponent1 />
                <RemoteComponent2 />
            </div>
        );
    }
}

export default App;
