import React from 'react';
import Link from 'next/link';

const RelatedProducts = () => {
  return (
    <>
      <div className='products-area pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>Related Products</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-products-box'>
                <div className='products-image'>
                  <Link href='/product-details'>
                    <a>
                      <img
                        src='images/products/products-img1.jpg'
                        className='main-image'
                        alt='image'
                      />
                    </a>
                  </Link>
                </div>

                <div className='products-content'>
                  <h3>
                    <Link href='/product-details'>
                      <a>Note Book Mockup</a>
                    </Link>
                  </h3>
                  <div className='price'>
                    <span className='old-price me-2'>$321</span>
                    <span className='new-price'>$250</span>
                  </div>
                  <a href='#' className='add-to-cart'>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-products-box'>
                <div className='products-image'>
                  <Link href='/product-details'>
                    <a>
                      <img
                        src='images/products/products-img2.jpg'
                        className='main-image'
                        alt='image'
                      />
                    </a>
                  </Link>

                  <div className='sale-tag'>Sale!</div>
                </div>

                <div className='products-content'>
                  <h3>
                    <Link href='/product-details'>
                      <a>Motivational Book Cover</a>
                    </Link>
                  </h3>
                  <div className='price'>
                    <span className='old-price me-2'>$210</span>
                    <span className='new-price'>$200</span>
                  </div>
                  <a href='#' className='add-to-cart'>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3'>
              <div className='single-products-box'>
                <div className='products-image'>
                  <Link href='/product-details'>
                    <a>
                      <img
                        src='images/products/products-img3.jpg'
                        className='main-image'
                        alt='image'
                      />
                    </a>
                  </Link>
                </div>

                <div className='products-content'>
                  <h3>
                    <Link href='/product-details'>
                      <a>Book Cover Softcover</a>
                    </Link>
                  </h3>
                  <div className='price'>
                    <span className='old-price me-2'>$210</span>
                    <span className='new-price'>$200</span>
                  </div>
                  <a href='#' className='add-to-cart'>
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RelatedProducts;