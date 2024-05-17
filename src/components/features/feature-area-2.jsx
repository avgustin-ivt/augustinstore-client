import React from 'react';
import { Delivery, Refund, Support } from '@/svg';

export const feature_data = [
  {
    icon: <Delivery />,
    title: 'Быстрая доставка',
    subtitle: 'До 7 дней'
  },
  {
    icon: <Refund />,
    title: 'Возврат',
    subtitle: 'Гарантия возврата средств'
  },
  {
    icon: <Support />,
    title: 'Поддержка 24/7',
    subtitle: 'На связи каждый день'
  },
]


const FeatureAreaTwo = () => {
  return (
    <section className={`tp-feature-area tp-feature-border-2 pt-70 pb-20 ml-200 pl-160`}>
      <div className="container">
        <div className="tp-feature-inner-2">
          <div className="row align-items-center">
            {feature_data.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4">
                <div className="tp-feature-item-2 d-flex align-items-start">
                  <div className="tp-feature-icon-2 mr-10">
                    <span>
                      {item.icon}
                    </span>
                  </div>
                  <div className="tp-feature-content-2">
                    <h3 className="tp-feature-title-2">{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureAreaTwo;
