import React, { useState, useMemo, useEffect } from 'react';
import _ from 'lodash';
import { withApollo } from '../libs/apollo';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { GET_SERVICES } from '../gql/services';
import Layout from '../layout/Layout';
import CategoryNavigation from '../components/CategoryNavigation';
import ServiceList from '../components/ServiceList';
import { Service } from '../Doamin/Service';

const IndexPage = () => {
    const router = useRouter();
    const category = _.get( router, 'query.category' );
    const [ services, setServices ] = useState<Service[]>([]);

    const { loading, error, data = { services: [] } } = useQuery( GET_SERVICES, {
        // fetchPolicy: 'cache-and-network',
        fetchPolicy: 'network-only',
        variables: { category: category || 'ALL' },
    } );

    useEffect( () => {
        const newServices = _.map( data.services, ( serviceData ) => new Service( serviceData ));
        setServices( newServices );
    }, [ data.services ]);

    if ( error ) {
        return (
            <div>
                <h1>Error</h1>
            </div>
        );
    }
    if ( loading ) {
        return (
            <div>
                <h1>Loading...</h1>;
            </div>
        );
    }

    return (
        <Layout>
            <CategoryNavigation />
            <ServiceList
                services={ services } />
        </Layout>
    );
};

export default withApollo({ ssr: true })( IndexPage );
