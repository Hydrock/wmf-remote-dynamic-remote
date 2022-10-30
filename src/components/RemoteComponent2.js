import React from 'react';

const style = {
    padding: 20,
    outline: '1px dashed darkblue',
    marginBottom: '10px',
}

function RemoteComponent2(props) {
    return (
        <div style={ style }>
            <p>
                Remote (загружаемый) компонент №2 - может принимать children
            </p>
            {props.children && (
                <div>
                    {props.children}
                </div>
            )}
        </div>
    );

}

export default RemoteComponent2;
