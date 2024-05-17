import React, { useState } from 'react';
import ErrorMsg from '@/components/common/error-msg';
import { useGetProductTypeQuery } from '@/redux/features/productApi';
import ProductItem from './product-item';
import { HomeTwoPrdLoader } from '@/components/loader';

// tabs
const tabs = ["Футболки", "Шорты", "Худи", "Штаны"];

const ProductArea = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { data: products, isError, isLoading } =
    useGetProductTypeQuery({ type: 'fashion' });
  // handleActiveTab
  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  // decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <HomeTwoPrdLoader loading={isLoading} />
    );
  }
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    let product_items = products.data;
    if (activeTab === 'Футболки') {
      product_items = products.data.filter(p => p.category.name === 'Футболки')
    }
    else if (activeTab === 'Шорты') {
      product_items = products.data.filter(p => p.category.name === 'Шорты')
    } else if (activeTab === 'Худи') {
      product_items = products.data.filter(p => p.category.name === 'Худи')
    } else if (activeTab === 'Штаны') {
      product_items = products.data.filter(p => p.category.name === 'Штаны')
    } else {
      product_items = products.data;
    }
    content = <>
      <div className="row">
        <div className="col-xl-12">
          <div className="tp-product-tab-2 tp-tab mb-50 text-center">
            <nav>
              <div className="nav nav-tabs justify-content-center">
                {tabs.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => handleActiveTab(tab)}
                    className={`nav-link text-capitalize ${activeTab === tab ? "active" : ""}`}
                  >
                    {tab.split("-").join(" ")}
                    <span className="tp-product-tab-tooltip">{product_items.length}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="row">
        {product_items.map((prd) => (
          <div key={prd._id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <ProductItem product={prd} />
          </div>
        ))}
      </div>
    </>
  }
  return (
    <>
      <section className="tp-product-area pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title-wrapper-2 text-center mb-35">
                <span className="tp-section-title-pre-2">
                  Все великолепные товары
                </span>
                <h3 className="tp-section-title-2">По категориям</h3>
              </div>
            </div>
          </div>
          {content}
        </div>
      </section>
    </>
  );
};

export default ProductArea;