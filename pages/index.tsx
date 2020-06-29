import React, { useState, useMemo, useEffect } from 'react';
import _ from 'lodash';
import { withApollo } from '../libs/apollo';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { ALL_SERVICES } from '../gql/services';
import Layout from '../layout/Layout';
import CategoryNavigation from '../components/CategoryNavigation';
import ServiceList from '../components/ServiceList';
import Service from '../classes/Service';

const IndexPage = () => {
    const router = useRouter();
    const category = _.get( router, 'query.category' );
    const [ services, setServices ] = useState<Service[]>([]);

    const { loading, error, data = { services: [] } } = useQuery( ALL_SERVICES, {
        fetchPolicy: 'cache-and-network',
        variables: { category: category || 'ALL' },
    } );

    useEffect( () => {
        const newServices = _.map( data.services, ( serviceData ) => new Service( serviceData ));
        setServices( newServices );
    }, [ data.services ]);

    if ( error ) return <h1>Error</h1>;
    if ( loading ) return <h1>Loading...</h1>;

    return (
        <Layout>
            <CategoryNavigation />
            <ServiceList
                services={ services } />
        </Layout>
    );
};

export default withApollo({ ssr: true })(IndexPage);
