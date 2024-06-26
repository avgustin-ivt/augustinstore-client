import React from 'react';
import SEO from '@/components/seo';
import HeaderTwo from '@/layout/headers/header-2';
import Footer from '@/layout/footers/footer';
import Wrapper from '@/layout/wrapper';
import RegisterArea from '@/components/login-register/register-area';

const RegisterPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Вход" />
      <HeaderTwo style_2={true} />
      <RegisterArea />
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default RegisterPage;