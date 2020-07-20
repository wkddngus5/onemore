import React, { useMemo } from 'react';
import Link from 'next/link';
import _ from 'lodash';
import { Service } from '../Doamin/Service';

function ServiceList({ services }) {
    const serviceList = useMemo( () => _.map( services, ( service: Service ) => {
        const { id, name, uri, description, category, cover } = service.getter([
            'id',
            'name',
            'uri',
            'description',
            'category',
            'cover',
        ]);
        return (
            <Link key={ id } href={ `/services/${ id }` }>
                <div className="service">
                    <div className="service-image" style={ { backgroundImage: `url(${ cover })`}  } />
                    <div className="service-info">
                        <h4>{ name }</h4>
                        <p className="description">{ description }</p>
                    </div>
                </div>
            </Link>
        );
    } ),[ services ]);

    return (<>{ serviceList }</>);
}

export default ServiceList;
