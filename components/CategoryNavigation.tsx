import React, { useMemo } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

const categoryInfoList = [
    {
        key: 'all',
        label: '전체',
        className: 'all',
        href: '/',
    }, {
        key: 'foods',
        label: '음식',
        className: 'all',
        href: '/foods',
    }, {
        key: 'clothes',
        label: '의류',
        className: 'all',
        href: '/clothes',
    }, {
        key: 'convenience',
        label: '생활편의',
        className: 'all',
        href: '/convenience',
    },
];

function CategoryNavigation() {
    const router = useRouter();
 
    const categoryItems = useMemo( () => _.map( categoryInfoList, ( categoryInfo ) => {
        const { key, label, className, href } = categoryInfo;
        const isActive = router.pathname === href;
        return (
            <li
                key={ key }
                className={ classNames( 'category-item', className, { 'active': isActive } )}>
                <Link href={ href }>
                    { label }
                </Link>

            </li>
        );
    }), []); 

    return (
        <ul className="category-navigation">
            { categoryItems }
        </ul>
    );
}

export default CategoryNavigation;
