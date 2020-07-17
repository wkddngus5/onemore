import React, { useMemo } from 'react';
import _ from 'lodash';
import Service from '../classes/Service';

function ServiceList({ services }) {
    const serviceList = useMemo( () => _.map( services, ( service: Service ) => {
        const { id, name, uri, description, category, cover } = {
            id: _.get( service, 'id' ),
            name: _.get( service, 'name' ),
            uri: _.get( service, 'uri' ),
            description: _.get( service, 'description' ),
            category: _.get( service, 'category' ),
            cover: _.get( service, 'cover' ),
        };
        return (
            <div className="service" key={ id }>
                <img className="service-image" src={ cover }></img>
                <div className="service-info">
                    <h4>{ name }</h4>
                    <p className="description">{ description }</p>
                </div>
            </div>
        );
    } ),[ services ]);

    return (<>{ serviceList }</>);
}

export default ServiceList;
