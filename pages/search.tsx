import React, {
    useState, useCallback, ChangeEvent, useMemo,
} from 'react';
import _ from 'lodash';
import Head from 'next/head';
import Link from 'next/link';
import classNames from 'classnames';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../libs/apollo';
import { Service, ServiceData } from '../Doamin/Service';
import { GET_SERVICES } from '../gql/services';

function SearchPage() {
    const [ searchText, setSearchText ] = useState<string>('');
    const [ filteredServices, setFilteredServices ] = useState<Service[]>([]);

    const { data = { services: [] } } = useQuery(GET_SERVICES, {
    // fetchPolicy: 'cache-and-network',
        fetchPolicy: 'network-only',
        variables: { category: 'ALL' },
    });

    const onChangeSearchText = useCallback((event: ChangeEvent) => {
        setSearchText(_.get(event, 'target.value'));
    }, []);

    const searchServices = useCallback(() => {
        const { services } = data;
        const newFilteredServices = _.filter(services, (service: ServiceData) => {
            const { name: serviceName } = service;
            return _.includes(serviceName, searchText);
        });
        setFilteredServices(newFilteredServices);
    }, [ data, searchText ]);

    const onKeyPressSearchServiceInput = useCallback((event) => {
        if (event.key === 'Enter') {
            searchServices();
        }
    }, [ searchServices ]);

    const filteredServiceList = useMemo(() => {
        const count = filteredServices.length;

        if (count === 0) {
            return (
                <div className="no-image-notice">
                    <p className="filtered-service-count">검색 결과가 없습니다.</p>
                </div>
            );
        }
        const list = _.map(filteredServices, (service: ServiceData) => {
            const {
                id, name, cover, description,
            } = service;
            return (
                <Link href={ `/services/${id}` }>
                    <li className="filtered-service">
                        <div
                            className="service-image"
                            style={ { backgroundImage: `url(${cover})` } }
                        />
                        <div className="info">
                            <h6>{ name }</h6>
                            <p>{ description }</p>
                        </div>
                    </li>
                </Link>
            );
        });

        return (
            <div>
                <p className="filtered-service-count">
                    전체
                    <span className="emphasize">
                        { count }
                        개
                    </span>
                    의 제품이 검색되었습니다.
                </p>
                <ul>
                    { list }
                </ul>
            </div>
        );
    }, [ filteredServices ]);

    return (
        <div className={ classNames('layout', 'search-page') }>
            <Head>
                <title>OneMore</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main>
                <div className="header">
                    <button type="button" className="menu-button" aria-label="Menu" />
                    <Link href="/">
                        <button
                            type="button"
                            className="home-button"
                            aria-label="Home"
                        />
                    </Link>
                    <h1 className="title">
                        <strong>검색</strong>
                    </h1>
                    <button type="button" className="disabled" aria-label="Space" />
                    <button type="button" className="disabled" aria-label="Space" />
                </div>
                <div className="body">
                    <div className="search-service">
                        <input
                            className="search-service__input"
                            placeholder="어떤 서비스를 찾으시나요?"
                            value={ searchText }
                            onChange={ onChangeSearchText }
                            onKeyPress={ onKeyPressSearchServiceInput }
                        />
                        <button
                            type="submit"
                            className="search-button"
                            aria-label="Search"
                            onClick={ searchServices }
                        />
                    </div>
                    <div>
                        { filteredServiceList }
                    </div>
                </div>
            </main>
        </div>
    );
}

export default withApollo({ ssr: true })(SearchPage);
