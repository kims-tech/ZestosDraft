import React from "react";
import Link from "next/link";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";

const Blog3 = () => {
  return (
    <>
      <PageBanner pageTitle="Blog Grid (Full Width)" pageName="Blog" />

      <section className="blog-area ptb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/single-blog-3">
                    <a className="d-block">
                      <img src="images/blog/blog4.jpg" alt="image" />
                    </a>
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex align-items-center">
                    <li>
                      <div className="d-flex align-items-center">
                        <img src="images/user1.jpg" alt="image" />
                        <span>
                          <a href="#">Taylor</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> Aug 7, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link href="/single-blog-3">
                      <a>
                        10 Types of Social Proof & What Makes Them Effective
                      </a>
                    </Link>
                  </h3>
                  <Link href="/single-blog-3">
                    <a className="link-btn">
                      <i className="flaticon-right-arrow"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/single-blog-3">
                    <a className="d-block">
                      <img src="images/blog/blog5.jpg" alt="image" />
                    </a>
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex align-items-center">
                    <li>
                      <div className="d-flex align-items-center">
                        <img src="images/user2.jpg" alt="image" />
                        <span>
                          <a href="#">Sarah</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> Aug 6, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link href="/single-blog-3">
                      <a>Tech Products That Make It Easier to Stay Home</a>
                    </Link>
                  </h3>
                  <Link href="/single-blog-3">
                    <a className="link-btn">
                      <i className="flaticon-right-arrow"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/single-blog-3">
                    <a className="d-block">
                      <img src="images/blog/blog6.jpg" alt="image" />
                    </a>
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex align-items-center">
                    <li>
                      <div className="d-flex align-items-center">
                        <img src="images/user3.jpg" alt="image" />
                        <span>
                          <a href="#">Andy</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> Aug 5, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link href="/single-blog-3">
                      <a>13 Feel-Good Restaurant Stories from the Pandemic</a>
                    </Link>
                  </h3>
                  <Link href="/single-blog-3">
                    <a className="link-btn">
                      <i className="flaticon-right-arrow"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/single-blog-3">
                    <a className="d-block">
                      <img src="images/blog/blog7.jpg" alt="image" />
                    </a>
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex align-items-center">
                    <li>
                      <div className="d-flex align-items-center">
                        <img src="images/user1.jpg" alt="image" />
                        <span>
                          <a href="#">Taylor</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> Aug 4, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link href="/single-blog-3">
                      <a>5 Ways to Convert Customers Into Advocates Brand</a>
                    </Link>
                  </h3>
                  <Link href="/single-blog-3">
                    <a className="link-btn">
                      <i className="flaticon-right-arrow"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/single-blog-3">
                    <a className="d-block">
                      <img src="images/blog/blog8.jpg" alt="image" />
                    </a>
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex align-items-center">
                    <li>
                      <div className="d-flex align-items-center">
                        <img src="images/user2.jpg" alt="image" />
                        <span>
                          <a href="#">Sarah</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> Aug 3, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link href="/single-blog-3">
                      <a>Indice Tips To-Go: Getting Started With Analytics</a>
                    </Link>
                  </h3>
                  <Link href="/single-blog-3">
                    <a className="link-btn">
                      <i className="flaticon-right-arrow"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/single-blog-3">
                    <a className="d-block">
                      <img src="images/blog/blog9.jpg" alt="image" />
                    </a>
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex align-items-center">
                    <li>
                      <div className="d-flex align-items-center">
                        <img src="images/user3.jpg" alt="image" />
                        <span>
                          <a href="#">Andy</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> Aug 2, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link href="/single-blog-3">
                      <a>How to Beat the High Cost of Customer Questions</a>
                    </Link>
                  </h3>
                  <Link href="/single-blog-3">
                    <a className="link-btn">
                      <i className="flaticon-right-arrow"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/single-blog-3">
                    <a className="d-block">
                      <img src="images/blog/blog10.jpg" alt="image" />
                    </a>
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex align-items-center">
                    <li>
                      <div className="d-flex align-items-center">
                        <img src="images/user1.jpg" alt="image" />
                        <span>
                          <a href="#">Taylor</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> Aug 1, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link href="/single-blog-3">
                      <a>Tech Products That Make It Easier to Stay Home</a>
                    </Link>
                  </h3>
                  <Link href="/single-blog-3">
                    <a className="link-btn">
                      <i className="flaticon-right-arrow"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/single-blog-3">
                    <a className="d-block">
                      <img src="images/blog/blog11.jpg" alt="image" />
                    </a>
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta d-flex align-items-center">
                    <li>
                      <div className="d-flex align-items-center">
                        <img src="images/user2.jpg" alt="image" />
                        <span>
                          <a href="#">Sarah</a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <i className="flaticon-calendar"></i> Aug 5, 2020
                    </li>
                  </ul>
                  <h3>
                    <Link href="/single-blog-3">
                      <a>Necessity May Give Us a Virtual Court System</a>
                    </Link>
                  </h3>
                  <Link href="/single-blog-3">
                    <a className="link-btn">
                      <i className="flaticon-right-arrow"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="pagination-area text-center">
                <a href="#" className="prev page-numbers">
                  <i className="bx bx-chevrons-left"></i>
                </a>
                <span className="page-numbers current" aria-current="page">
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
      </section>

      <Subscribe />

      <Footer />
    </>
  );
};

export default Blog3;
