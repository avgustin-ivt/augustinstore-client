import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Navigation } from 'swiper';
// internal
import slider_img_1 from '@assets/img/slider/2/slider-1.png';

// slider data 
const slider_data = [
  {
    id: 1,
    subtitle: 'Урааааааа! Каниииикулыыыыыы!',
    title: 'Летняя Коллекция 2024',
    img: slider_img_1,
  }
]

// slider setting 
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: 'fade',
  navigation: {
    nextEl: ".tp-slider-2-button-next",
    prevEl: ".tp-slider-2-button-prev",
  },
  pagination: {
    el: ".tp-slider-2-dot",
    clickable: true,
  },
}

const FashionBanner = () => {
  return (
    <>
      <section className="tp-slider-area p-relative z-index-1">
        <Swiper {...slider_setting} modules={[Pagination, Navigation, EffectFade]} className="tp-slider-active-2 swiper-container">
          {slider_data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="tp-slider-item-2 tp-slider-height-2 p-relative grey-bg-5 d-flex align-items-end">
                <div className="tp-slider-2-shape">
                  <Image src="/assets/img/banner/bgggg1.png" alt="Background Image" layout="fill" objectFit="cover" />
                </div>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-slider-content-2">
                        <span>{item.subtitle}</span>
                        <h3 className="tp-slider-title-2">{item.title}</h3>
                        <div className="tp-slider-btn-2">
                          <Link href="/shop" className="tp-btn tp-btn-border">За покупками</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-slider-thumb-2-wrapper p-relative">
                        <div className="tp-slider-thumb-2-shape">
                        </div>
                        <div className="tp-slider-thumb-2 text-end">
                          <span className="tp-slider-thumb-2-gradient"></span>
                          <Image src="/assets/img/banner/lol.png" alt="Slider Image" width={800} height={800} priority />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="tp-swiper-dot tp-slider-2-dot"></div>
        </Swiper>
      </section>
    </>
  );
};

export default FashionBanner;