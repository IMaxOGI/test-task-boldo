import React, { useState } from 'react';
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
import { articles, testimonials } from '@/shared/const/data';
import { Accordion } from '@/shared/ui/Accordion';
import { Button } from '@/shared/ui/Button';
import { ContactUs } from '@/entities/ContactUs';
import { DoughnutChart } from '@/shared/ui/DoughnutChart';
import { SegmentDataMap } from '@/pagesLayer/home/types';
import { ActiveElement, ChartEvent, ChartOptions } from 'chart.js';

const segmentDataMap: SegmentDataMap = {
  'Agile Development': [33, 34, 12],
  'Investor Bandwidth': [28, 22, 25],
  'A/B Testing': [15, 25, 35],
};

const initialData = {
  labels: ['Agile Development', 'Investor Bandwidth', 'A/B Testing'],
  datasets: [
    {
      label: '# of Votes',
      data: [33, 34, 12],
      backgroundColor: ['rgb(12, 187, 250)', 'rgb(104, 232, 166)', 'rgb(10, 38, 64)'],
      borderColor: ['rgb(12, 187, 250)', 'rgb(104, 232, 166)', 'rgb(10, 38, 64)'],
      borderWidth: 0,
      cutout: '70%',
    },
  ],
};

export const HomePage: React.FC = () => {
  const initialVisibleCount = 3;
  const [visibleArticles, setVisibleArticles] = useState(initialVisibleCount);
  const [chartData, setChartData] = useState(initialData);

  const handleHover = (segmentName: keyof SegmentDataMap | null) => {
    if (segmentName && chartData.datasets[0].data !== segmentDataMap[segmentName]) {
      const newDataSet = {
        ...initialData.datasets[0],
        data: segmentDataMap[segmentName],
      };
      setChartData({
        ...initialData,
        datasets: [newDataSet],
      });
    } else if (!segmentName) {
      setChartData(initialData);
    }
  };

  const chartOptions: ChartOptions<'doughnut'> = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
          padding: 30,
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 14,
          },
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels && data.datasets.length) {
              const dataset = data.datasets[0];
              const backgroundColors = dataset.backgroundColor as string[];
              const dataValues = dataset.data as number[];
              const total = dataValues.reduce((sum, value) => sum + value, 0);

              return data.labels.map((label, i) => {
                const value = dataValues[i];
                const percentage = total > 0 ? ((value / total) * 100).toFixed(2) + '%' : '0%';
                return {
                  text: `${percentage} - ${label}`,
                  fillStyle: backgroundColors[i],
                };
              });
            }
            return [];
          },
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function () {},
        },
      },
    },
    onHover: (_: ChartEvent, elements: ActiveElement[]) => {
      if (elements.length) {
        const index = elements[0].index;
        const segmentName = initialData.labels[index] as keyof SegmentDataMap;
        handleHover(segmentName);
      } else {
        handleHover(null);
      }
    },
  };

  const isAllArticlesVisible = visibleArticles >= articles.length;

  const toggleArticlesVisibility = () => {
    if (isAllArticlesVisible) {
      setVisibleArticles(initialVisibleCount);
    } else {
      setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 3);
    }
  };

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
              className="img-fluid"
            />
            <div>
              <h3>Cool feature title</h3>
              <p>Learning curve network effects return on investment.</p>
            </div>
            <Link href={'#'}>
              Explore page <Icon name={'arrow'} />
            </Link>
          </div>
          <div className={s['HomePage__services-list-item']}>
            <Image
              src={images.image2}
              alt="cool feature"
              className="img-fluid"
            />
            <div>
              <h3>Cool feature title</h3>
              <p>Learning curve network effects return on investment.</p>
            </div>
            <Link href={'#'}>
              Explore page <Icon name={'arrow'} />
            </Link>
          </div>
          <div className={s['HomePage__services-list-item']}>
            <Image
              src={images.image3}
              alt="cool feature"
              className="img-fluid"
            />
            <div>
              <h3>Cool feature title</h3>
              <p>Learning curve network effects return on investment.</p>
            </div>
            <Link href={'#'}>
              Explore page <Icon name={'arrow'} />
            </Link>
          </div>
        </div>
        <div className={s['HomePage__connect-customers']}>
          <div className={s['HomePage__connect-customers-item']}>
            <Image
              src={images.image4}
              alt="connect customers"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="img-fluid"
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
            <div className={s['HomePage__connect-customers-item-img-section']}>
              <Image
                src={images.image5}
                alt="connect customers"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="img-fluid"
              />
              <div className={s['HomePage__connect-customers-item-img-section-chart']}>
                <DoughnutChart
                  data={chartData}
                  options={chartOptions}
                />
              </div>
            </div>
            <div>
              <h2>We connect our customers with the best, and help them keep up-and stay open.</h2>
              <div className={s['HomePage__connect-customers-item-second-block']}>
                <div
                  className={s['HomePage__connect-customers-item-second-block-item']}
                  onMouseEnter={() => handleHover('Agile Development')}
                  onMouseLeave={() => handleHover(null)}
                >
                  <p>
                    <Icon name={'feather'} /> We connect our customers with the best.
                  </p>
                </div>

                <div
                  className={s['HomePage__connect-customers-item-second-block-item']}
                  onMouseEnter={() => handleHover('Investor Bandwidth')}
                  onMouseLeave={() => handleHover(null)}
                >
                  <p>
                    <Icon name={'eye'} /> Advisor success customer launch party.
                  </p>
                </div>

                <div
                  className={s['HomePage__connect-customers-item-second-block-item']}
                  onMouseEnter={() => handleHover('A/B Testing')}
                  onMouseLeave={() => handleHover(null)}
                >
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
          <div className={s['HomePage__testimonials-header-arrows']}>
            <div
              className={cn(
                s['HomePage__testimonials-header-arrows-slider-arrow'],
                s['HomePage__testimonials-header-arrows-slider-arrow-left'],
              )}
              id="swiperTestimonialsArrowLeft"
              onClick={(e) => e.stopPropagation()}
            >
              <Icon name="arrow" />
            </div>
            <div
              className={cn(
                s['HomePage__testimonials-header-arrows-slider-arrow'],
                s['HomePage__testimonials-header-arrows-slider-arrow-right'],
              )}
              id="swiperTestimonialsArrowRight"
              onClick={(e) => e.stopPropagation()}
            >
              <Icon name="arrow" />
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '#swiperTestimonialsArrowRight',
            prevEl: '#swiperTestimonialsArrowLeft',
            disabledClass: s['HomePage__testimonials-header-arrows-slider-arrow-disabled'],
          }}
          className={cn(s['HomePage__testimonials-content'])}
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
              <p className={s['HomePage__testimonials-content-item-main-text']}>{testimonial.content}</p>
              <div className={s['HomePage__testimonials-content-item-footer']}>
                <Image
                  src={testimonial.img}
                  alt="avatar"
                />
                <div className={s['HomePage__testimonials-content-item-footer-text']}>
                  <p className={s['HomePage__testimonials-content-item-footer-text-name']}>{testimonial.name}</p>
                  <p className={s['HomePage__testimonials-content-item-footer-text-role']}>{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={s['HomePage__office-info']}>
        <div>
          <Image
            src={images.image6}
            alt="office"
            className={cn(s['HomePage__office-info-img'], 'img-fluid')}
          />
        </div>
        <div className={s['HomePage__office-info-content']}>
          <h2 className={s['HomePage__office-info-content-title']}>
            We connect our customers with the best, and help them keep up-and stay open.
          </h2>
          <div className={s['HomePage__office-info-content-accordions']}>
            <Accordion title="We connect our customers with the best?">
              <p>Here is the answer to the first question. It might be a detailed explanation.</p>
            </Accordion>
            <Accordion title="We connect our customers with the best?">
              <p>Here is the answer to the first question. It might be a detailed explanation.</p>
            </Accordion>
            <Accordion title="We connect our customers with the best?">
              <p>Here is the answer to the first question. It might be a detailed explanation.</p>
            </Accordion>
          </div>
        </div>
      </div>

      <div className={s['HomePage__our-blog']}>
        <p className={s['HomePage__our-blog-title-gray']}>Our Blog</p>
        <h2 className={s['HomePage__our-blog-title']}>Value proposition accelerator product management venture</h2>
        <div className={s['HomePage__our-blog-content-items']}>
          {articles.slice(0, visibleArticles).map((article) => (
            <div
              key={article.id}
              className={s['HomePage__our-blog-content-items-item']}
            >
              <Image
                src={article.img}
                alt="blog img"
                className={cn(s['HomePage__our-blog-content-items-item-img'], 'img-fluid')}
              />
              <div className={s['HomePage__our-blog-content-items-item-header']}>
                <h4 className={s['HomePage__our-blog-content-items-item-header-category']}>{article.category}</h4>
                <p className={s['HomePage__our-blog-content-items-item-header-date']}>{article.date}</p>
              </div>
              <p className={s['HomePage__our-blog-content-items-item-content']}>{article.content}</p>
              <div className={s['HomePage__our-blog-content-items-item-footer']}>
                <Image
                  src={article.avatar}
                  alt="avatar"
                />
                <p className={s['HomePage__our-blog-content-items-item-footer-name']}>{article.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={s['HomePage__our-blog-btn-wrapper']}>
          <Button
            onClick={toggleArticlesVisibility}
            variant={'outlined-blue'}
          >
            {isAllArticlesVisible ? 'Hide' : 'Load more'}
          </Button>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};
