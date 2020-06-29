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
        className: 'foods',
        href: '?category=foods',
    }, {
        key: 'clothes',
        label: '의류',
        className: 'clothes',
        href: '?category=clothes',
    }, {
        key: 'convenience',
        label: '생활편의',
        className: 'convenience',
        href: '?category=convenience',
    },
];

function CategoryNavigation() {
    const router = useRouter();
    const { query: { category } } = router;
 
    const categoryItems = useMemo( () => _.map( categoryInfoList, ( categoryInfo ) => {
        const { key, label, className, href } = categoryInfo;
        const isActive = category
            ? category === key
            : key === 'all';

        return (
            <li
                key={ key }
                className={ classNames( 'category-item', className, { 'is-active': isActive } )}>
                <Link href={ href }>
                    <a>{ label }</a>
                </Link>

            </li>
        );
    }), [ category ]); 

    return (
        <ul className="category-navigation">
            { categoryItems }
        </ul>
    );
}

export default CategoryNavigation;
