import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import logo from '@assets/img/logo/logo.svg';
import { Email, Location } from '@/svg';

const Footer = ({ style_2 = false, style_3 = false,primary_style=false }) => {
  return (
    <footer>
      <div className={`tp-footer-area ${primary_style?'tp-footer-style-2 tp-footer-style-primary tp-footer-style-6':''} ${style_2 ?'tp-footer-style-2':style_3 ? 'tp-footer-style-2 tp-footer-style-3': ''}`}
        data-bg-color={`${style_2 ? 'footer-bg-white' : 'footer-bg-grey'}`}>
        <div className="tp-footer-top pt-50 pl-80">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="tp-footer-widget footer-col-1 ">
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>
                    <p className="tp-footer-desc">Стильная Мужская и Женская одежда для Ваших прекрасных образов!</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="tp-footer-widget footer-col-3 mb-50">
                  <h4 className="tp-footer-widget-title">Информация</h4>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li><a href="#">Вакансии</a></li>
                      <li><a href="#">Стать партнёром</a></li>
                      <li><a href="#">Доставка</a></li>
                      <li><a href="#">Оплата</a></li>
                      <li><a href="#">Частые вопросы</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="tp-footer-widget footer-col-4 mb-50">
                  <h4 className="tp-footer-widget-title">Контакты</h4>
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-talk mb-20">
                      <span>Появился вопрос? Звоните</span>
                      <h4><a href="tel:7-812-426-14-55">+7 (812) 426 14 55</a></h4>
                    </div>
                    <div className="tp-footer-contact">
                      <div className="tp-footer-contact-item d-flex align-items-start">
                        <div className="tp-footer-contact-icon">
                          <span>
                            <Email />
                          </span>
                        </div>
                        <div className="tp-footer-contact-content">
                          <p><a href="mailto:avgustin.ivt@gmail.com">avgustin.ivt@gmail.com</a></p>
                        </div>
                      </div>
                      <div className="tp-footer-contact-item d-flex align-items-start">
                        <div className="tp-footer-contact-icon">
                          <span>
                            <Location />
                          </span>
                        </div>
                        <div className="tp-footer-contact-content">
                          <p><a href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.319767%2C59.934411&mode=whatshere&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=30.319767%2C59.934411&whatshere%5Bzoom%5D=17.23&z=17.03" target="_blank">Набережная реки Мойки, 48-50-52 <br /> Санкт‑Петербург</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-footer-bottom">
          <div className="container">
            <div className="tp-footer-bottom-wrapper">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="tp-footer-copyright text-center">
                    <p>© {new Date().getFullYear()} augustin | Мужская и Женская Одежда
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;