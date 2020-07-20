import _ from 'lodash';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { GET_SERVICE } from '../../gql/services';
import Layout from '../../layout/Layout';
import { withApollo } from '../../libs/apollo';
import { useState, useEffect, useMemo } from 'react';
import { Service } from '../../Doamin/Service';
import { Item } from '../../Doamin/Item';
import { CURRENCY, CYCLE } from '../../Doamin/const';

const KRWFormatter = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' });
const USDFormatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' })
function ServiceDetailPage() {
    const router = useRouter();
    const { query: { id: serviceId } } = router;

    const [ service, setService ] = useState<Service>();
    const { loading, error, data } = useQuery( GET_SERVICE, {
        // fetchPolicy: 'cache-and-network',
        fetchPolicy: 'network-only',
        variables: { id: serviceId },
    });
    useEffect( () => {
        const { service: serviceData } = data || {};
        if ( !serviceData ) {
            return;
        }
        setService( new Service( serviceData ));
    }, [ data ]);

    const { name, uri, cover, description, items } = useMemo( () => service?.getter([ 'name', 'uri', 'cover', 'description', 'items' ]) || {}, [ service ]);

    if ( !serviceId ) {
        return ( <span>Loading...</span> );
    }
    return (
        <Layout>
            <div className="service-detail">
                <div
                    className="cover-image"
                    style={ { backgroundImage: `url(${ cover })`}} />
                <h4 className="menu">Menu</h4>
                <ul>
                    {
                        _.map( items, ( item: Item ) => renderItem({ item }))
                    }
                </ul>
            </div>
            
        </Layout>
    );
}

function renderItem({ item }: { item: Item }) {
    const { name, receipt, billing, price, currency } = item.getter([ 'name', 'receipt', 'billing', 'price', 'currency' ]);
    const currencyFormatter = currency === CURRENCY.WON ? KRWFormatter : USDFormatter;
    return (
        <li className="item" key={ name }>
            <h5>
                { name }
            </h5>
            <div className="subscribe">
                <p className="receipt">
                    상품 수령: 매
                    { renderCycleText({ cycle: receipt }) }
                </p>
                <p className="price">
                    { `${ currencyFormatter.format( price )  }/${ renderCycleText({ cycle: billing }) }` }
                </p>
            </div>
        </li>
    );
}

function renderCycleText({ cycle }) {
    if ( cycle === CYCLE.DAILY ) {
        return '일';
    }
    if ( cycle === CYCLE.WEEKLY ) {
        return '주';
    }
    if ( cycle === CYCLE.TWO_WEEKS ) {
        return '2주';
    }
    if ( cycle === CYCLE.MONTHLY ) {
        return '월';
    }
    if ( cycle === CYCLE.HALF_A_YEAR ) {
        return '6개월';
    }
    if ( cycle === CYCLE.YEAR ) {
        return '연';
    }
}

export default withApollo({ ssr: true })( ServiceDetailPage );
