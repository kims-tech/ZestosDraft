import React, { useEffect } from 'react'
import {motion} from 'framer-motion'


export default function Gallery() {

  const data = [
    {
      title:'Laundry',
      para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.',
      img:'https://cozystay.app/static/home_app/assets_new/cozyhome/cm1.png'
    },
    {
      title:'Homely Food',
      para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.',
      img:'https://cozystay.app/static/home_app/assets_new/cozyhome/cm3.png'
    },
    {
      title:'House keeping',
      para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.',
      img:'https://cozystay.app/static/home_app/assets_new/cozyhome/cm4.png'
    },
    {
      title:'Common Dinning',
      para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.',
      img:'https://cozystay.app/static/home_app/assets_new/cozyhome/cm2.png'
    }]

  return (
    <section style={{"width":"100%","height":"70%","overflow":"hidden"}}>
      <div class="containerd">
        {
            data.map((item,index)=>{
              return(
                
                  <motion.div class="box">
                    <div class="imgBx">
                      <img src={item.img}/>
                    </div>
                    <div class="content">
                      <div>
                        <h2>{item.title}</h2>
                        {/* <p>{item.para}</p> */}
                      </div>
                    </div>
                  </motion.div>
              )
            })
        }

      </div>
    </section>
  );
}

