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
        key: 'goods',
        label: '생필품',
        className: 'goods',
        href: '?category=goods',
    }, {
        key: 'ott',
        label: '인터넷 미디어',
        className: 'ott',
        href: '?category=ott',
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

    const categoryItems = useMemo(() => _.map(categoryInfoList, (categoryInfo) => {
        const {
            key, label, className, href,
        } = categoryInfo;
        const isActive = category
            ? category === key
            : key === 'all';

        return (
            <li
                key={ key }
                className={ classNames('category-item', className, { 'is-active': isActive }) }
            >
                <Link href={ href }>
                    { label }
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
