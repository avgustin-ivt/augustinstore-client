import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from '@/layout/headers/header-2';
import FashionBanner from '@/components/banner/fashion-banner';
import PopularProducts from '@/components/products/fashion/popular-products';
import ProductArea from '@/components/products/fashion/product-area';
import FashionTestimonial from '@/components/testimonial/fashion-testimonial';
import FeatureAreaTwo from '@/components/features/feature-area-2';
import Footer from '@/layout/footers/footer';

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle='Главная'/>
      <HeaderTwo/>
      <FashionBanner/>
      <PopularProducts/>
      <ProductArea/>
      <FashionTestimonial/>
      <FeatureAreaTwo/>
      <Footer style_2={true} />
    </Wrapper>
  )
}
