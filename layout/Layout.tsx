import React from 'react';
import Head from 'next/head';
import Header from './Header';

function Layout({ children }) {
    return (
        <div className="layout">
            <Head>
                <title>OneMore</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main>
                <Header />
                { children }
            </main>
        </div>
    );
}

export default Layout;
