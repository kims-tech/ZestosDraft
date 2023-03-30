import React from 'react';
import Link from 'next/link';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import ProductDetailsContent from '../components/ProductDetails/ProductDetailsContent';
import RelatedProducts from '../components/ProductDetails/RelatedProducts';
import Footer from '../components/_App/Footer';

const ProductDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle='Products Details' pageName='Products Details' />

      <ProductDetailsContent />
      
      <RelatedProducts />
      
      <Subscribe />

      <Footer />
    </>
  );
};

export default ProductDetails;
