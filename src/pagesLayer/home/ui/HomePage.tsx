import React from 'react';
import s from './HomePage.module.scss';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import { images } from '@/shared/const/images';
import Link from 'next/link';
import { Icon } from '@/shared/ui/Icon';
import { LinkButton } from '@/shared/ui/LinkButton';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { testimonials } from '@/shared/const/data';
export const HomePage: React.FC = () => {
  return (
    <div className={s.HomePage}>
      <div className={s.HomePage__wrapper}>
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
      </div>
      <div className={s['HomePage__testimonials']}>
        <div className={s['HomePage__testimonials-header']}>
          <h2 className={s['HomePage__testimonials-header-title']}>
            An enterprise template to ramp up your company website
          </h2>
          <div
            className={cn(s['slider-arrow'], s['slider-arrow-left'])}
            id="swiper-testimonials-arrow-left"
            onClick={(e) => e.stopPropagation()}
          >
            <Icon name="arrow-right" />
          </div>
          <div
            className={cn(s['slider-arrow'], s['slider-arrow-right'])}
            id="swiper-testimonials-arrow-right"
            onClick={(e) => e.stopPropagation()}
          >
            <Icon name="arrow-right" />
          </div>
        </div>
        <div className={s['HomePage__testimonials-content']}>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '#swiper-testimonials-arrow-right',
              prevEl: '#swiper-testimonials-arrow-left',
            }}
            className={cn(s['HomePage__slider'])}
            initialSlide={0}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              1200: {
                slidesPerView: 3,
              },
              760: {
                slidesPerView: 1.5,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            freeMode={true}
            grabCursor={true}
            resistance={true}
            resistanceRatio={0}
            touchStartForcePreventDefault={true}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className={s['HomePage__testimonials-content-item']}
              >
                <h4>{testimonial.content}</h4>
                <div>
                  <Image
                    src={images.avatar}
                    alt="avatar"
                  />
                  <div>
                    <p>{testimonial.name}</p>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
