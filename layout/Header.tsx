import React from 'react';
import Link from 'next/link';

function Header() {
    return (
        <div className="header">
            <button className="menu-button" />
            <Link href="/">
                <h1 className="title">
                    One<strong>More</strong>
                </h1>
            </Link>
            <button className="search-button" />
        </div>
    )
}

export default Header;
