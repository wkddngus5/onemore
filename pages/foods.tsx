import React, { useState } from 'react';
import { withApollo } from '../libs/apollo';
import { useQuery } from '@apollo/react-hooks';
import { ALL_CHARACTERS } from '../gql/allCharacters';
import Layout from '../layout/Layout';
import CategoryNavigation from '../components/CategoryNavigation';

const IndexPage = () => {
    const { loading, error, data } = useQuery(ALL_CHARACTERS);
    if (error) return <h1>Error</h1>;
    if (loading) return <h1>Loading...</h1>;

    return (
        <Layout>
            <CategoryNavigation />
            {/* <div>
                {data.characters.results.map((data) => (
                    <ul key={data.id}>
                        <li>{data.name}</li>
                    </ul>
                ))}
            </div> */}
        </Layout>
    );
};

export default withApollo({ ssr: true })(IndexPage);
