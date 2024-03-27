import React from 'react';
import s from './Footer.module.scss';
import Link from 'next/link';
import { routeLinks } from '@/shared/const/routes';
import { Icon } from '@/shared/ui/Icon';

export const Footer: React.FC = () => {
  return (
    <div className={s.Footer}>
      <div className={s['Footer__left-section']}>
        <Link
          href={routeLinks.home}
          className={s['Footer__left-section-logo']}
        >
          <Icon name={'logo'} /> Boldo
        </Link>
        <p className={s['Footer__left-section-description']}>
          Social media validation business model canvas graphical user interface launch party creative facebook iPad
          twitter.
        </p>
        <p className={s['Footer__left-section-description']}>All rights reserved.</p>
      </div>
      <div className={s['Footer__right-section']}>
        <nav className={s['Footer__right-section-navigation']}>
          <ul className={s['Footer__right-section-navigation-list']}>
            <li>Landings</li>
            <li>
              <Link href={routeLinks.home}>Home</Link>
            </li>
            <li>
              <Link href={routeLinks.products}>Products</Link>
            </li>
            <li>
              <Link href={routeLinks.services}>Services</Link>
            </li>
          </ul>
          <ul className={s['Footer__right-section-navigation-list']}>
            <li>Company</li>
            <li>
              <Link href={routeLinks.home}>Home</Link>
            </li>
            <li>
              <Link href={routeLinks.careers}>Careers</Link>
              <span className={s['Footer__right-section-navigation-list-badge']}>Hiring!</span>
            </li>
            <li>
              <Link href={routeLinks.services}>Services</Link>
            </li>
          </ul>
          <ul className={s['Footer__right-section-navigation-list']}>
            <li>Resources</li>
            <li>
              <Link href={routeLinks.blog}>Blog</Link>
            </li>
            <li>
              <Link href={routeLinks.products}>Products</Link>
            </li>
            <li>
              <Link href={routeLinks.services}>Services</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
