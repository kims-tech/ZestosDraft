import React from 'react'
import Link from 'next/link'


export default function DesignTab2() {
  return (
    <>
        <section className="design-tab2">

            <h1 className="bg-text">Zestos</h1>

            <div className="text-section">

                
                    <div className="box">
                        <div className="bg-box"></div>
                        <span>The</span> 
                        {/* <p>Zestos</p> */}
                    </div>
                    
               
                <h2>Promise</h2>

                <h4>What you should expect at every Zolo</h4>

                <p>
                    At Zolo we thrive to make your stay as hassle-free as possible. 
                    We've got yummy food, dedicated support team, free maintenance 
                    and fun-filled Zo-Tribe events.
                </p>
            </div>

            <div className="tiles-section">

                <div className="tile-row">

                    <div className="tile">
                        <div className="logo">
                            <img src='images/category/category1.jpg' alt='image' />
                            <i className='flaticon-cooking'></i>
                        </div>
                        <p>Pg's</p>
                    </div>
                    <div className="tile">
                        <div className="logo">
                            <img src='images/category/category1.jpg' alt='image' />
                            <i className='flaticon-cooking'></i>
                        </div>
                        <p>Single share</p>
                    </div>
                    <div className="tile">
                        <div className="logo">
                            <img src='images/category/category1.jpg' alt='image' />
                            <i className='flaticon-cooking'></i>
                        </div>
                        <p>Double share</p>
                    </div>

                </div>

                <div className="tile-row">

                    <div className="tile">
                        <div className="logo">
                            <img src='images/category/category1.jpg' alt='image' />
                            <i className='flaticon-cooking'></i>
                        </div>
                        <p>Appartment</p>
                    </div>
                    <div className="tile">
                        <div className="logo">
                            <img src='images/category/category1.jpg' alt='image' />
                            <i className='flaticon-cooking'></i>
                        </div>
                        <p>Hostel</p>
                    </div>
                    <div className="tile">
                        <div className="logo">
                            <img src='images/category/category1.jpg' alt='image' />
                            <i className='flaticon-cooking'></i>
                        </div>
                        <p>Hostel</p>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}
