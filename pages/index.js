//home 3

import DesignTab1 from "../components/Home/DesignTab1";
import DesignTab2 from "../components/Home/DesignTab2";
import DesignTab3 from "../components/Home/DesignTab3";

import Banner from "../components/Home/Banner";
import HowItWorks from "../components/Common/HowItWorks";
import Feedback from '../components/Common/Feedback';
import EventsArea from "../components/Home/Event";
import Appattachment from "../components/Home/Appattachment";

import Footer from "../components/_App/Footer";
import DesignTabHeading from "../components/Home/DesignTabHeading";

import AppDownload from '../components/Common/AppDownload';
import Gallery from "../components/Home/Gallery";
import Features from "../components/Home/Features";

import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { useEffect } from "react";

const Index = () => {

  //heading 1 view point and animation hook
  const [mh_1_ref,mh_1_Inview] = useInView({threshold:0.1})
  const MH_1_animation = useAnimation();

  //heading 2 view point and animation hook
  const [mh_2_ref,mh_2_Inview] = useInView({threshold:0.1})
  const MH_2_animation = useAnimation();

  useEffect(()=>{

    //console.log("index:-", mh_1_Inview)

    //for heading - 1
    if(mh_1_Inview){
      MH_1_animation.start({
        opacity:1,
        y:'0',
        transition:{
          ease: "linear",
          duration:0.7
        }
      })
    }else{
      MH_1_animation.start({
        opacity:0,
        y:'20vh',
      })
    }

    //for heading 2
    if(mh_2_Inview){
      MH_2_animation.start({
        opacity:1,
        y:'0',
        transition:{
          ease: "linear",
          duration:0.7
        }
      })
    }else{
      MH_2_animation.start({
        opacity:0,
        y:'20vh',
      })
    }

  },[mh_1_Inview,mh_2_Inview])


  return (
    <>
      <Banner />

      <DesignTabHeading 
        title={'Feel like Home with '}
        span={"Zestos"}
        subtitle="Memories are encoded through repetition"
        reff={mh_1_ref}
        bool_reff={mh_1_Inview}
        animate={MH_1_animation}
        />

         <Gallery/>

       <DesignTabHeading 
        title={'The Dwelling Experience with'} span={"Zestos"}
        subtitle="Memories are encoded through repetition"
        reff={mh_2_ref}
        bool_reff={mh_2_Inview}
        animate={MH_2_animation}
        />
      <Features/>
     
     <EventsArea/>

      <Appattachment/>
      <AppDownload />
      
      <HowItWorks bgColor="bg-f9f9f9O" />
    
      <Feedback title={true} bgImage="bg-image" />

      <Footer />
    </>
  );
};

export default Index;
