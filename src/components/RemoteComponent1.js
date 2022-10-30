import React from 'react';

const style = {
    padding: 20,
    outline: '1px dashed blue',
    marginBottom: '10px',
}

function RemoteComponent1 (props) {
    const { ModuleLoader } = window;

    return (
        <div style={ style }>
            <p>
                Remote (загружаемый) компонент - может принимать children
            </p>
            {props.children && (
                <div>
                    { props.children }
                </div>
            )}
            {/* В загружаемом модуле загружаем еще один загружаемый модуль */}
            { ModuleLoader && (
                <ModuleLoader
                    module={'RemoteComponent2'}
                />
            )}
            { !ModuleLoader && (
                'Не удалось загрузить remote модуль - Отсутствует ModuleLoader'
            )}
        </div>
    );
}

export default RemoteComponent1;
