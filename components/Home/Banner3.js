import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Banner = () => {
  return (
    <>
      <section className='banner-wrapper-area'>
        <div className='container'>
          <div className='banner-wrapper-content'>
            <h1 className='banner-three-heading' style={{"width":"auto"}}>
                
                <Swiper autoplay={{delay: 1500,pauseOnMouseEnter: false,}} modules={[Autoplay]}>

                  <SwiperSlide>
                    Find Nearby <span className="color-0ec6c6">Modern Shared Housing</span>
                  </SwiperSlide>

                  <SwiperSlide>
                    Find Nearby <span className="color-0ec6c6">Co-Living</span>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                    Find Nearby <span className="color-0ec6c6">Appartment</span>
                  </SwiperSlide>
                </Swiper>
            </h1>

            <p>Expolore top-rated PG's, Hostel and more...</p>
            
            <form>
              <div className='row m-0 align-items-center'>
                <div className='col-lg-4 col-md-12 p-0'>
                  <div className='form-group'>
                    <label>
                      <i className='flaticon-search'></i>
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='What are you looking for?'
                    />
                  </div>
                </div>

                <div className='col-lg-3 col-md-6 p-0'>
                  <div className='form-group'>
                    <label>
                      <i className='flaticon-pin'></i>
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Location'
                    />
                  </div>
                </div>

                <div className='col-lg-3 row-lg-5 col-md-6 p-0 '>
                  <div className='form-group category-select banner-three-select-custom'>
                    <select className='banner-form-select-two'>
                      <option>All Categories</option>
                      <option>PG</option>
                      <option>Hostel</option>
                      <option>Appartment</option>
                      <option>Modern student Housing</option>
                      <option>Professional co-living</option>
                    </select>
                  </div>
                </div>

                <div className='col-lg-2 col-md-12 p-0'>
                  <div className='submit-btn'>
                    <button type='submit'>Search Now</button>
                  </div>
                </div>
              </div>
            </form>
            
            <ul className='popular-search-list'>

              <li>Popular:</li>

              <li>
                <Link href='/grid-listings-with-map'>
                  <a>Banglore's PG</a>
                </Link>
              </li>

              <li>
                <Link href='/grid-listings-with-map'>
                  <a>Hostel</a>
                </Link>
              </li>

              <li>....</li>

            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
