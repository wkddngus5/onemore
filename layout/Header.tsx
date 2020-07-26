import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Menu from './Menu';

function Header() {
    const [ isMenuVisible, setIsMenuVisible ] = useState<boolean>( false );
    const menuRef = useRef( undefined );
    const menuButtonRef = useRef( null );

    useEffect( () => {
        document.addEventListener( 'click', ( event: MouseEvent ) => {
            const { target } = event;
            if ( !menuRef?.current?.contains( target ) && !menuButtonRef?.current?.contains( target ) ) {
                setIsMenuVisible( false );
            }
        } );
    }, []);
    
    const onClickMenuButton = useCallback( ( event: React.MouseEvent<HTMLButtonElement> ) => {
        event.stopPropagation();
        setIsMenuVisible( true );
    }, []);

    return (
        <>
            <div className={ `dim ${ isMenuVisible ? 'is-visible' : '' }`} />
            <Menu 
                ref={ menuRef }
                isVisible={ isMenuVisible } />
            <div className="header">
                <button
                    ref={ menuButtonRef }
                    className="menu-button"
                    onClick={ onClickMenuButton } />
                <Link href="/">
                    <h1 className="title">
                        One<strong>More</strong>
                    </h1>
                </Link>
                <Link href="/search">
                    <button className="search-button" />
                </Link>
            </div>
        </>
    );
}

export default Header;
