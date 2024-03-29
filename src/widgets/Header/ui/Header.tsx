'use client';

import React, { useEffect, useState } from 'react';
import s from './Header.module.scss';
import Link from 'next/link';
import { routeLinks } from '@/shared/const/routes';
import { Icon } from '@/shared/ui/Icon';
import { Button } from '@/shared/ui/Button';
import Image from 'next/image';
import Ellipse from '../../../shared/assets/images/ellipse.svg';
import { images } from '@/shared/const/images';
import { Autoplay } from 'swiper/modules';
import { logos } from '@/shared/const/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';

export const Header: React.FC = () => {
  const [isSwiperReady, setIsSwiperReady] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  useEffect(() => {
    if (logos.length > 0) {
      setIsSwiperReady(true);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className={s.Header}>
      <Ellipse
        width={1300}
        height={1300}
        className={s.Header__ellipse}
      />
      <div className={s['Header__wrapper']}>
        <div className={s['Header__up-section']}>
          <Link
            href={routeLinks.home}
            className={s['Header__up-section-logo']}
          >
            <Icon name={'logo'} /> Boldo
          </Link>

          <nav className={s['Header__up-section-navigation']}>
            <ul className={s['Header__up-section-navigation-list']}>
              <li className={s['Header__up-section-navigation-list-item']}>
                <Link href={routeLinks.products}>Product</Link>
              </li>
              <li className={s['Header__up-section-navigation-list-item']}>
                <Link href={routeLinks.services}>Services</Link>
              </li>
              <li className={s['Header__up-section-navigation-list-item']}>
                <Link href={routeLinks.about}>About</Link>
              </li>
            </ul>
            <Button
              className={s['Header__up-section-navigation-list-item-button']}
              variant={'filled-white'}
            >
              Log in
            </Button>
          </nav>

          <div className={cn(s['Header__up-section-navigation-mobile'], isMenuOpen ? s['is-open'] : '')}>
            {isMenuOpen && (
              <div
                onClick={toggleMenu}
                className={s['Header__up-section-navigation-mobile-cross']}
              >
                <Icon name={'cross'} />
              </div>
            )}

            <ul className={s['Header__up-section-navigation-mobile-list']}>
              <li className={s['Header__up-section-navigation-mobile-list-item']}>
                <Link href={routeLinks.products}>
                  Product <Icon name={'chevron'} />
                </Link>
              </li>
              <li className={s['Header__up-section-navigation-mobile-list-item']}>
                <Link href={routeLinks.services}>
                  Services <Icon name={'chevron'} />
                </Link>
              </li>
              <li className={s['Header__up-section-navigation-mobile-list-item']}>
                <Link href={routeLinks.about}>
                  About <Icon name={'chevron'} />
                </Link>
              </li>
            </ul>
            <Button
              className={s['Header__up-section-navigation-mobile-list-item-button']}
              variant={'filled-white'}
            >
              Log in
            </Button>
          </div>
          <button
            className={s['Header__up-section-menu-toggle']}
            onClick={toggleMenu}
          >
            <Icon name={'menu'} />
          </button>
        </div>
        <div className={s['Header__down-section']}>
          <div>
            <h1>Save time by building fast with Boldo Template </h1>
            <p>
              Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator
              success deployment non-disclosure.
            </p>
            <div className={s['Header__down-section-buttons']}>
              <Button
                className={s['Header__down-section-buttons-button']}
                variant={'filled-green'}
              >
                Buy template
              </Button>
              <Button
                className={s['Header__down-section-buttons-button']}
                variant={'outlined-white'}
              >
                Explore
              </Button>
            </div>
          </div>
          <Image
            src={images.heroGraphics}
            alt="hero graphics"
            className="img-fluid"
          />
        </div>
      </div>
      {isSwiperReady && (
        <Swiper
          className={s['Header__swiper']}
          modules={[Autoplay]}
          spaceBetween={80}
          slidesPerView={'auto'}
          centeredSlides={true}
          effect={'fade'}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            760: {
              spaceBetween: 80,
            },
            0: {
              spaceBetween: 30,
            },
          }}
          loop={true}
          speed={2500}
          allowTouchMove={false}
          onInit={() => setIsSwiperReady(true)}
        >
          {logos.map((logo) => (
            <SwiperSlide
              key={logo.id}
              className={s['Header__swiper-slide']}
            >
              {logo.img}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
