import React, { useEffect } from 'react';
import Link from  'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

const Banner = () => {

  //Heading view point & Heading animation hook
  const [headingRef, headingInView] = useInView({threshold:0.1});
  const Hanimation = useAnimation();

  //img view point & img animation hook
  const [imgRef,imgInView] = useInView({threshold:0.1})
  const IManimation = useAnimation()

  //search box view point & animation hook
  const [sref,sInview]  =useInView({threshold:0.01})
  const SRanimation = useAnimation()

  useEffect(()=>{

    // console.log("banner:-",imgInView)

    //heading animation
    if(headingInView){
      Hanimation.start({
        opacity:1,
        y:'0',
        transition:{
          ease: "linear",
          duration:0.8
        }
      })
    }else{
      Hanimation.start({
        opacity:0,
        y:'-20vh'
      })
    }


    //img animation
    if(imgInView){
        IManimation.start({
          x:'0',
          opacity:1,
          transition:{
            ease: "linear",
            duration:1
          }
        })
    }else{
      IManimation.start({
        x:'10vw',
        opacity:0
      })
    }

    //search box animation
    if(sInview){
      SRanimation.start({
        y:'0',
        opacity:1,
        transition:{
          delay:0.7,
          ease:"linear"
        }
      })
    }else{
      SRanimation.start({
        y:'-10vh',
        opacity:0
      })
    }

  },[headingInView,imgInView,sInview])

  return (
    <>
      <section className='banner-area'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-8 col-md-12'>
              <div className='banner-content'>

                <motion.h1 className="banner-two-heading" ref={headingRef} animate={Hanimation}>
                  Find Nearby

                  <Swiper
                    className='banner-swiper'
                    autoplay={{
                      delay: 1500,
                      pauseOnMouseEnter: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                  >
                    <SwiperSlide>
                      <span className="color-0ec6c6">Pgs</span>
                    </SwiperSlide>

                    <SwiperSlide>
                      <span className="color-0ec6c6">Rooms</span>
                    </SwiperSlide>

                    {/* <SwiperSlide>
                      Find Nearby <span className="color-0ec6c6">Apartments</span>
                    </SwiperSlide> */}
                  </Swiper>
                  
                </motion.h1>
                
                {/* <p>Expolore top-rated attractions, activities and more...</p> */}

                <motion.form ref={sref} animate={SRanimation}>
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

                    <div className='col-lg-3 col-md-6 p-0'>
                      <div className='form-group category-select'>
                        <label className='category-icon'>
                          <i className='flaticon-category'></i>
                        </label>
                        <select className="banner-form-select-two">
                          <option>All Categories</option>
                          <option>Restaurants</option>
                          <option>Events</option>
                          <option>Clothing</option>
                          <option>Bank</option>
                          <option>Fitness</option>
                          <option>Bookstore</option>
                          <option>Shopping</option>
                          <option>Hotels</option>
                          <option>Hospitals</option>
                          <option>Culture</option>
                          <option>Beauty</option>
                        </select>
                      </div>
                    </div>

                    <div className='col-lg-2 col-md-12 p-0'>
                      <div className='submit-btn'>
                        <button type='submit'>Search Now</button>
                      </div>
                    </div>
                  </div>
                </motion.form>

                {/* <ul className='popular-search-list'>
                  <li>Popular:</li>
                  <li>
                    <Link href="/grid-listings-with-map">
                      <a>Pg's</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/grid-listings-with-map">
                      <a>Hotels</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/grid-listings-with-map">
                      <a>Apartments</a>
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>

            <div className='col-lg-4 col-md-12'>
              <motion.div className='banner-image' >
                <motion.img src='images/banner-img1.png' alt='image' ref={imgRef} animate={IManimation}/>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

