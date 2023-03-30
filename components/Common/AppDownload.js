import React, { useEffect } from 'react';
import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

const AppDownload = () => {

  //heading 3 view point and animation hook
  const [mh_3_ref,mh_3_Inview] = useInView({threshold:0.1})
  const MH_3_animation = useAnimation();

  //img view point & img animation hook
  const [imgRef,imgInView] = useInView({threshold:0.1})
  const IManimation = useAnimation()

  useEffect(()=>{

    // //for heading 3
    if(mh_3_Inview){
      MH_3_animation.start({
        opacity:1,
        y:'0',
        transition:{
          ease: "linear",
          duration:0.7
        }
      })
    }else{
      MH_3_animation.start({
        opacity:0,
        y:'20vh',
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
        x:'70vw',
        opacity:0
      })
    }

  },[mh_3_Inview,imgInView])





  return (
    <>
      <section className='app-download-area bg-main-color'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5 col-md-12'>
              <div className='app-download-content'>

                <motion.h2 animate={MH_3_animation} ref={mh_3_ref}>
                  One Tap Solution For <span id='adas'>Zestos</span>
                </motion.h2>
                
                {/* <p>Now available in</p> */}

                <div className='btn-box'>
                  <a href='#' className='playstore-btn'>
                    <img src='images/play-store.png' alt='image' />
                    GET IT ON
                    <span>Google Play</span>
                  </a>

                  <a href='#' className='applestore-btn'>
                    <img src='images/apple-store.png' alt='image' />
                    Download on the
                    <span>Apple Store</span>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-7 col-md-12'>
              <div className='app-download-image'>
                <motion.img src='images/app-download.png' alt='image' ref={imgRef} animate={IManimation}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDownload;
