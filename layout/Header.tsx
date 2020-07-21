import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

function Header() {
    return (
        <div className="header">
            <button className="menu-button" />
            <Link href="/">
                <h1 className="title">
                    One<strong>More</strong>
                </h1>
            </Link>
            <Link href="/search">
                <button className="search-button" />
            </Link>
        </div>
    )
}

export default Header;
