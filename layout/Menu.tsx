import React, { forwardRef, LegacyRef } from 'react';
import classNames from 'classnames';

function Menu( props: { isVisible: boolean }, ref: LegacyRef<HTMLDivElement> ) {
    const { isVisible } = props;
    return (
        <div
            ref={ ref }
            className={ classNames( 'menu', { 'is-visible': isVisible } )}>
            Menu
        </div>
    );
}

export default forwardRef( Menu );
