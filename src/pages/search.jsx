import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import ErrorMsg from "@/components/common/error-msg";
import SearchPrdLoader from "@/components/loader/search-prd-loader";
import ProductItem from "@/components/products/fashion/product-item";
import SEO from "@/components/seo";
import ShopTopLeft from "@/components/shop/shop-top-left";
import Footer from "@/layout/footers/footer";
import HeaderTwo from "@/layout/headers/header-2";
import Wrapper from "@/layout/wrapper";
import { useGetAllProductsQuery } from "@/redux/features/productApi";
import NiceSelect from "@/ui/nice-select";
import { useState } from "react";
// internal

export default function SearchPage({ query }) {
  const { searchText, productType } = query;
  const { data: products, isError, isLoading } = useGetAllProductsQuery();
  const [shortValue, setShortValue] = useState("");
  const perView = 8;
  const [next, setNext] = useState(perView);

  // selectShortHandler
  const shortHandler = (e) => {
    setShortValue(e.value);
  };

  //   handleLoadMore
  const handleLoadMore = () => {
    setNext((value) => value + 4);
  };

  // decide what to render
  let content = null;
  if (isLoading) {
    content = <SearchPrdLoader loading={isLoading} />;
  }

  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }

  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No products found!" />;
  }

  if (!isLoading && !isError && products?.data?.length > 0) {
    let all_products = products.data;
    let product_items = all_products;

    if (searchText && !productType) {
      product_items = all_products.filter((prd) =>
        prd.title?.toLowerCase().includes(searchText?.toLowerCase())
      );
    }
    if (searchText && productType) {
      product_items = all_products.filter(
        (prd) => prd.productType?.toLowerCase() === productType?.toLowerCase()
      ).filter(p => p?.title?.toLowerCase().includes(searchText?.toLowerCase()));
    }
     // Price low to high
     if (shortValue === "Price low to high") {
      product_items = product_items
        .slice()
        .sort((a, b) => Number(a.price) - Number(b.price));
    }
    // Price high to low
    if (shortValue === "Price high to low") {
      product_items = product_items
        .slice()
        .sort((a, b) => Number(b.price) - Number(a.price));
    }
    if (product_items.length === 0) {
      content = (
        <div className="text-center pt-40 pb-200">
          <h3>Простите, по запросу <span style={{color:'#78ba52'}}>{searchText}</span> ничего не найдено :(</h3>
        </div>
      );
    }

    else {
      content = ( 
        <>
          <section className="tp-shop-area pb-120">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="tp-shop-main-wrapper">
                    <div className="tp-shop-top mb-45">
                      <div className="row">
                        <div className="col-xl-6">

                          <div className="tp-shop-top-left d-flex align-items-center ">
                            <div className="tp-shop-top-result">
                              <p>Показано 1–{product_items.length} из {all_products.length} вещей</p>
                            </div>
                          </div>

                        </div>
                        <div className="col-xl-6">
                          <div className="tp-shop-top-right d-sm-flex align-items-center justify-content-xl-end">
                            <div className="tp-shop-top-select">
                              <NiceSelect
                                options={[
                                  { value: "Short By Price", text: "Сортировка по цене" },
                                  { value: "Price low to high", text: "Сначала дешевле" },
                                  { value: "Price high to low", text: "Сначала дороже" },
                                ]}
                                defaultCurrent={0}
                                onChange={shortHandler}
                                name="Short By Price"
                              />
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                    
                      <div className="tp-shop-items-wrapper tp-shop-item-primary">
                        <div className="row">
                          {product_items
                            .slice(0, next)
                            ?.map((item) => (
                              <div
                                key={item._id}
                                className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                              >
                                <ProductItem product={item} />
                              </div>
                            ))}
                        </div>
                      </div>

                    {/* load more btn start */}
                    {next < product_items?.length && (
                      <div className="load-more-btn text-center pt-50">
                        <button onClick={handleLoadMore} className="tp-btn tp-btn-2 tp-btn-blue">
                          Load More
                        </button>
                      </div>
                    )}
                    {/* load more btn end */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
  }

  return (
    <Wrapper>
      <SEO pageTitle="Поиск Товаров" />
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb title="Поиск Товаров" subtitle="Search Products" />
      {content}
      <Footer primary_style={true} />
    </Wrapper>
  );
}

export const getServerSideProps = async (context) => {
  const { query } = context;

  return {
    props: {
      query,
    },
  };
};
