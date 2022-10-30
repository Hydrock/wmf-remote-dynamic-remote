import React, { Component } from "react";

const style = {
    padding: 20,
    outline: '1px dashed blue',
    marginBottom: '10px',
}

class RemoteComponent extends Component {
    render() {
        return (
            <div style={ style }>
                Component from REMOTE app.
            </div>
        );
    }
}

export default RemoteComponent;
