import React from 'react';
import s from './HomePage.module.scss';
import Image from 'next/image';
import { images } from '@/shared/const/images';
import Link from 'next/link';
import { Icon } from '@/shared/ui/Icon';
import { LinkButton } from '@/shared/ui/LinkButton';
export const HomePage: React.FC = () => {
  return (
    <div className={s.HomePage}>
      <p className={s['HomePage__our-services-text']}>Our Services</p>
      <h1 className={s['HomePage__services-title']}>Handshake infographic mass market crowdfunding iteration.</h1>
      <div className={s['HomePage__services-list']}>
        <div className={s['HomePage__services-list-item']}>
          <Image
            src={images.image1}
            alt="cool feature"
          />
          <div>
            <h3>Cool feature title</h3>
            <p>Learning curve network effects return on investment.</p>
          </div>
          <Link href={'#'}>
            Explore page <Icon name={'arrow-right'} />
          </Link>
        </div>
        <div className={s['HomePage__services-list-item']}>
          <Image
            src={images.image2}
            alt="cool feature"
          />
          <div>
            <h3>Cool feature title</h3>
            <p>Learning curve network effects return on investment.</p>
          </div>
          <Link href={'#'}>
            Explore page <Icon name={'arrow-right'} />
          </Link>
        </div>
        <div className={s['HomePage__services-list-item']}>
          <Image
            src={images.image3}
            alt="cool feature"
          />
          <div>
            <h3>Cool feature title</h3>
            <p>Learning curve network effects return on investment.</p>
          </div>
          <Link href={'#'}>
            Explore page <Icon name={'arrow-right'} />
          </Link>
        </div>
      </div>
      <div className={s['HomePage__connect-customers']}>
        <div className={s['HomePage__connect-customers-item']}>
          <Image
            src={images.image4}
            alt="connect customers"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div>
            <h2>We connect our customers with the best, and help them keep up-and stay open.</h2>
            <ul className={s['HomePage__connect-customers-item-content']}>
              <li>
                <span>
                  <Icon name={'check'} />
                </span>
                We connect our customers with the best.
              </li>
              <li>
                <span>
                  <Icon name={'check'} />
                </span>
                Advisor success customer launch party.
              </li>
              <li>
                <span>
                  <Icon name={'check'} />
                </span>
                Business-to-consumer long tail.
              </li>
            </ul>
            <LinkButton
              href={'#'}
              variant={'filled-blue'}
              className={s['HomePage__connect-customers-item-button']}
            >
              Start now
            </LinkButton>
          </div>
        </div>

        <div className={s['HomePage__connect-customers-item']}>
          <Image
            src={images.image5}
            alt="connect customers"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div>
            <h2>We connect our customers with the best, and help them keep up-and stay open.</h2>
            <div className={s['HomePage__connect-customers-item-second-block']}>
              <div className={s['HomePage__connect-customers-item-second-block-item']}>
                <p>
                  <Icon name={'feather'} /> We connect our customers with the best.
                </p>
              </div>

              <div className={s['HomePage__connect-customers-item-second-block-item']}>
                <p>
                  <Icon name={'eye'} /> Advisor success customer launch party.
                </p>
              </div>

              <div className={s['HomePage__connect-customers-item-second-block-item']}>
                <p>
                  <Icon name={'sun'} /> Business-to-consumer long tail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s['HomePage__testimonials']}></div>
    </div>
  );
};
