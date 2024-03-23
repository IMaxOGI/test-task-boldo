import React from 'react';
import s from './Header.module.scss';
import Link from 'next/link';
import { routeLinks } from '@/shared/const/routes';
import { Icon } from '@/shared/ui/Icon';

export const Header: React.FC = () => {
  return (
    <div className={s.Header}>
      <Link href={routeLinks.home}>
        <Icon name={'arrow-right'} />
      </Link>

      <nav>
        <ul>
          <li>Product</li>
          <li>Services</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
};
