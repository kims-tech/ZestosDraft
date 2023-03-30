/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import Navbar from "../components/_App/Navbar";
import PopularPlacesFilter from "../components/Common/PopularPlacesFilter";
import Footer from "../components/_App/Footer";
import { useState } from "react";

const VerticalListingsWihMap = () => {
  //card data list
  //obj schema
  // {
  //     Oname:"",
  //     Oimg_src:"",
  //     img_src:"",
  //     isOpen:true,
  //     name:"",
  //     stars:5,
  //     price:"",
  //     amenities:[""],
  //     address:""
  //   }

  var [cardData, setCardData] = useState([
    {
      Oname: "James",
      Oimg_src: "images/user3.jpg",
      img_src: "images/listings/listings9.jpg",
      isOpen: true,
      name: "The Mad Made Grill",
      stars: 5,
      price: "121",
      amenities: ["Restaurant"],
      address: "New York, USA",
    },
    {
      Oname: "Sarah",
      Oimg_src: "images/user2.jpg",
      img_src: "images/listings/listings10.jpg",
      isOpen: false,
      name: "The Beverly Hills Hotel",
      stars: 5,
      price: "200",
      amenities: ["Hotel"],
      address: "Los Angeles,USA",
    },
  ]);

  return (
    <>
      <PopularPlacesFilter />

      <section className="listings-area ptb-100">
        <div className="container-fluid">
          <div className="row m-0">
            <div className="col-xl-8 col-lg-12 col-md-12 p-0">
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <aside className="listings-widget-area">
                    <section className="widget widget_filters">
                      <h3 className="widget-title">Filters</h3>

                      <ul>
                        <li>
                          <button type="button">$</button>
                        </li>
                        <li>
                          <button type="button">$$</button>
                        </li>
                        <li>
                          <button type="button">$$$</button>
                        </li>
                        <li>
                          <button type="button">$$$$</button>
                        </li>
                      </ul>
                    </section>

                    <section className="widget widget_categories">
                      <h3 className="widget-title">Categories</h3>
                      <ul>
                        {/* none hide list */}
                        {[
                          "Restaurant",
                          "Hotel",
                          "Beauty & Spa",
                          "Fitness",
                          "Shopping",
                        ].map((elm, index) => (
                          <li key={index}>
                            <input id="categories1" type="checkbox" />
                            <label htmlFor="categories1">{elm}</label>
                          </li>
                        ))}

                        {/* hide list */}
                        {["Hospital", "Events", "Clothing"].map(
                          (elm, index) => (
                            <li className="hide" key={index}>
                              <input id="categories6" type="checkbox" />
                              <label htmlFor="categories6">{elm}</label>
                            </li>
                          )
                        )}
                        <li className="see-all-btn">
                          <span>See All</span>
                        </li>
                      </ul>
                    </section>

                    <section className="widget widget_features">
                      <h3 className="widget-title">Features</h3>

                      <ul>
                        {/* none hide list */}
                        {[
                          "Restaurant",
                          "Hotel",
                          "Beauty & Spa",
                          "Fitness",
                          "Shopping",
                        ].map((elm, index) => (
                          <li key={index}>
                            <input id="categories1" type="checkbox" key={elm} />
                            <label htmlFor="categories1">{elm}</label>
                          </li>
                        ))}

                        {/* hide list */}
                        {["Hospital", "Events", "Clothing"].map(
                          (elm, index) => (
                            <li className="hide" key={elm}>
                              <input id="categories6" type="checkbox" />
                              <label htmlFor="categories6">{elm}</label>
                            </li>
                          )
                        )}
                        <li className="see-all-btn">
                          <span>See All</span>
                        </li>
                      </ul>
                    </section>

                    <section className="widget widget_distance">
                      <h3 className="widget-title">Distance</h3>

                      <ul>
                        {/* none hide list */}
                        {[
                          "Driving (5 mi.)",
                          "Walking (1 mi.)",
                          "Biking (2 mi.)",
                          "Within 4 blocks",
                          "Bicycle (6 mi.)",
                        ].map((elm) => (
                          <li key={elm}>
                            <input id="distance1" type="checkbox" />
                            <label htmlFor="distance1">{elm}</label>
                          </li>
                        ))}

                        {/* hide list */}
                        {["Driving (10 mi.)", "Walking (11 mi.)"].map((elm) => (
                          <li className="hide" key={elm}>
                            <input id="distance6" type="checkbox" />
                            <label htmlFor="distance6">{elm}</label>
                          </li>
                        ))}
                        <li className="see-all-btn">
                          <span>See All</span>
                        </li>
                      </ul>
                    </section>
                  </aside>
                </div>

                <div className="col-lg-8 col-md-12">
                  <div className="all-listings-list">
                    <div className="listings-grid-sorting row align-items-center">
                      <div className="col-lg-5 col-md-6 result-count">
                        <p>
                          <span className="count">9</span> Results
                        </p>
                      </div>

                      <div className="col-lg-7 col-md-6 ordering">
                        <div className="d-flex justify-content-end">
                          <div className="select-box">
                            <label>Sort By:</label>
                            <select className="blog-select">
                              {[
                                "Recommended",
                                "Default",
                                "Latest",
                                "Price: low to high",
                                "Price: high to low",
                              ].map((elm) => (
                                <option key={elm}>{elm}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      {/* ..........................................CARD LIST.............................................. */}

                      {cardData.map((obj, index) => {
                        return (
                          <div key={index} className="col-lg-12 col-md-12">
                            <div className="single-listings-item">
                              <div className="row m-0">
                                <div className="col-lg-4 col-md-4 p-0">
                                  <div className="listings-image bg-img5">
                                    <img src={obj.img_src} alt="image" />
                                    <a href="#" className="bookmark-save">
                                      <i className="flaticon-heart"></i>
                                    </a>
                                    <a href="#" className="category">
                                      <i className="flaticon-cooking"></i>
                                    </a>

                                    <Link href="/single-listings">
                                      <a className="link-btn"></a>
                                    </Link>

                                    <div className="author">
                                      <div className="d-flex align-items-center">
                                        <img src={obj.Oimg_src} alt="image" />
                                        <span>{obj.Oname}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-8 col-md-8 p-0">
                                  <div className="listings-content">
                                    {obj.isOpen ? (
                                      <span className="status">
                                        <i className="flaticon-save"></i> Open
                                        Now
                                      </span>
                                    ) : (
                                      <span className="status status-close">
                                        <i className="flaticon-save"></i> Close
                                        Now
                                      </span>
                                    )}

                                    <h3>
                                      <Link href="/single-listings">
                                        <a>{obj.name}</a>
                                      </Link>
                                    </h3>
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="rating">
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <span className="count">(55)</span>
                                      </div>
                                      <div className="price">
                                        Start From <span>${obj.price}</span>
                                      </div>
                                    </div>
                                    <ul className="listings-meta">
                                      {obj.amenities.map((amenity, index) => {
                                        return (
                                          <li key={index}>
                                            <a href="#">
                                              <i className="flaticon-shopping-bags"></i>{" "}
                                              {amenity}
                                            </a>
                                          </li>
                                        );
                                      })}
                                      <li>
                                        <a href="#">
                                          <i className="flaticon-pin"></i>{" "}
                                          {obj.address}
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      {/*....................................page no.........................................*/}

                      <div className="col-lg-12 col-md-12">
                        <div className="pagination-area text-center">
                          <a href="#" className="prev page-numbers">
                            <i className="bx bx-chevrons-left"></i>
                          </a>
                          <span
                            className="page-numbers current"
                            aria-current="page"
                          >
                            1
                          </span>
                          <a href="#" className="page-numbers">
                            2
                          </a>
                          <a href="#" className="page-numbers">
                            3
                          </a>
                          <a href="#" className="page-numbers">
                            4
                          </a>
                          <a href="#" className="next page-numbers">
                            <i className="bx bx-chevrons-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-12 col-md-12 p-0">
              <div className="map-container fw-map side-full-map">
                <div id="main-full-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer bgColor="bg-f5f5f5" />
    </>
  );
};

export default VerticalListingsWihMap;
