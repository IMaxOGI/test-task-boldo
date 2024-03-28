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

export const Header: React.FC = () => {
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  useEffect(() => {
    if (logos.length > 0) {
      setIsSwiperReady(true);
    }
  }, []);

  return (
    <div className={s.Header}>
      <Ellipse
        width={1300}
        height={1300}
        className={s.Header__ellipse}
      />
      <div className={s['Header__up-section']}>
        <Link
          href={routeLinks.home}
          className={s['Header__up-section-logo']}
        >
          <Icon name={'logo'} /> Boldo
        </Link>

        <nav className={s['Header__up-section-navigation']}>
          <ul className={s['Header__up-section-navigation-list']}>
            <li className={s['Header__up-section-navigation-list-item']}>Product</li>
            <li className={s['Header__up-section-navigation-list-item']}>Services</li>
            <li className={s['Header__up-section-navigation-list-item']}>About</li>
          </ul>
          <Button
            className={s['Header__up-section-navigation-list-item-button']}
            variant={'filled-white'}
          >
            Log in
          </Button>
        </nav>
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
