import React from 'react';

const ContactMap = () => {
  return (
    <>
      <section className="tp-map-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-map-wrapper"> 
                <div className="tp-map-iframe">
                  <div className="map-container">
                    <a href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.319767%2C59.934411&mode=whatshere&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=30.319767%2C59.934411&whatshere%5Bzoom%5D=17.23&z=17.03" className="map-link">Санкт‑Петербург, набережная реки Мойки, 48-50-52 — Яндекс Карты</a>
                    <iframe src="https://yandex.ru/map-widget/v1/?ll=30.319767%2C59.934411&mode=whatshere&whatshere%5Bpoint%5D=30.319767%2C59.934411&whatshere%5Bzoom%5D=17.23&z=17.03" width="100%" height="800" frameborder="1" allowfullscreen="true" style={{ width: '100%', height: '400px' }}></iframe>                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;
