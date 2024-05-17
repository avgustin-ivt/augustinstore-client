import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

const ContactArea = () => {
  return (
    <section className="tp-contact-area pb-90">
      <div className="container">

              <a href="https://t.me/ivt2020" target="_blank" title="Написать в Telegram" rel="noopener noreferrer">
                <div className="telegram-button">
                  <FontAwesomeIcon icon={faTelegram} />
                </div>
              </a>

      </div>

      {/* Стили для кнопки */}
      <style jsx>{`
        .tp-contact-area {
          position: relative;
        }

        .telegram-button {
          position: absolute;
          left: 50%;
          bottom: 20%;
          transform: translate(-50%, -50%);
          background: #0088cc; /* Цвет кнопки */
          border-radius: 50%;
          width: 55px; /* Ширина кнопки */
          height: 55px; /* Высота кнопки */
          color: #fff;
          text-align: center;
          line-height: 55px; /* Центровка иконки в кнопке */
          font-size: 24px; /* Размер иконки */
          z-index: 9999;
        }

        .telegram-button a {
          color: #fff;
        }

        .telegram-button:before,
        .telegram-button:after {
          content: " ";
          display: block;
          position: absolute;
          border: 50%;
          border: 1px solid #0088cc; /* Цвет анимированных волн от кнопки */
          left: -20px;
          right: -20px;
          top: -20px;
          bottom: -20px;
          border-radius: 50%;
          animation: animate 1.5s linear infinite;
          opacity: 0;
          backface-visibility: hidden; 
        }
        
        .telegram-button:after {
          animation-delay: .5s;
        }
        
        @keyframes animate {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactArea;
