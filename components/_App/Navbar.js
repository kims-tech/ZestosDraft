"use client";

import { useState, useEffect, useContext } from "react";
import { IndiceContext } from "../../contexts";
import AuthModal from "../Modal/AuthModal";
import { useAuthContext } from "../../contexts/authContext";
import Link from "next/link";

const Navbar = () => {
  const { toggleSideMenu } = useContext(IndiceContext);
  const [displayAuth, setDisplayAuth] = useState(false);
  const [displayMiniAuth, setDisplayMiniAuth] = useState(false);
  const [sticky, setSticky] = useState(false);
  const authContextData = useAuthContext();

  //sticky menu
  const showStickyMenu = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", showStickyMenu);
  }

  const toggleAuth = () => {
    setDisplayAuth(!displayAuth);
  };

  const toggleMiniAuth = () => {
    setDisplayMiniAuth(!displayMiniAuth);
  };

  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  useEffect(() => {
    let abortController = new AbortController();
    // your async action is here
    return () => {
      abortController.abort();
    };
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    authContextData.setUser(undefined);
    authContextData.setToken(undefined);
  };

  return (
    <>
      <div className={displayAuth ? "body_overlay open" : "body_overlay"}></div>
      <div className={sticky ? "is-sticky navbar-area " : "navbar-area "}>
        <div className="miran-responsive-nav">
          <div className="container">
            <div className="miran-responsive-menu">
              <div onClick={() => toggleMenu()} className="hamburger-menu ">
                {showMenu ? (
                  <i className="bx bx-x"></i>
                ) : (
                  <i className="bx bx-menu"></i>
                )}
              </div>
              <div
                className="responsive-burger-menu d-lg-none d-block"
                onClick={toggleSideMenu}
              >
                <span className="top-bar"></span>
                <span className="middle-bar"></span>
                <span className="bottom-bar"></span>
              </div>

              <div
                className="responsive-burger-menu d-lg-none d-block"
                onClick={toggleSideMenu}
              >
                <span className="top-bar"></span>
                <span className="middle-bar"></span>
                <span className="bottom-bar"></span>
              </div>

              <div className="logo">
                <Link href="/">
                  <a>
                    <img src="images/black-logo.png" alt="logo" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={showMenu ? "miran-nav show" : "miran-nav"}>
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img src="images/black-logo.png" alt="logo" />
                </a>
              </Link>
              <div className="collapse navbar-collapse mean-menu">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Listings
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          List Layout <i className="bx bx-chevron-right"></i>
                        </a>
                        <ul className="dropdown-menu">
                          {/* <li className="nav-item">
                            <Link
                              href="/vertical-listings-left-sidebar"
                              activeClassName="active"
                            >
                              <a className="nav-link">Left Sidebar</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/vertical-listings-right-sidebar"
                              activeClassName="active"
                            >
                              <a className="nav-link">Right Sidebar</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/vertical-listings-full-width"
                              activeClassName="active"
                            >
                              <a className="nav-link">Full Width</a>
                            </Link>
                          </li> */}

                          <li className="nav-item">
                            <Link
                              href="/vertical-listings-with-map"
                              activeClassName="active"
                            >
                              <a className="nav-link">Full Width + Map</a>
                            </Link>
                          </li>

                          {/* <li className="nav-item">
                            <Link
                              href="/vertical-listings-full-map"
                              activeClassName="active"
                            >
                              <a className="nav-link">Full Width + Full Map</a>
                            </Link>
                          </li> */}
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Grid Layout <i className="bx bx-chevron-right"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/grid-listings-with-left-sidebar"
                              activeClassName="active"
                            >
                              <a className="nav-link">Left Sidebar</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/grid-listings-with-right-sidebar"
                              activeClassName="active"
                            >
                              <a className="nav-link">Right Sidebar</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/grid-listings-full-width"
                              activeClassName="active"
                            >
                              <a className="nav-link">Full Width</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/grid-listings-with-map"
                              activeClassName="active"
                            >
                              <a className="nav-link">Full Width + Map</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/grid-listings-full-map"
                              activeClassName="active"
                            >
                              <a className="nav-link">Full Width + Full Map</a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="/single-listings" activeClassName="active">
                          <a className="nav-link">Listings Details</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/destinations" activeClassName="active">
                          <a className="nav-link">Top Place</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/categories" activeClassName="active">
                          <a className="nav-link">Categories</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/user-profile" activeClassName="active">
                          <a className="nav-link">Author Profile</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Shop
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/shop" activeClassName="active">
                          <a className="nav-link">Products List</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/cart" activeClassName="active">
                          <a className="nav-link">Cart</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/checkout" activeClassName="active">
                          <a className="nav-link">Checkout</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/product-details" activeClassName="active">
                          <a className="nav-link">Products Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/blog-1" activeClassName="active">
                          <a className="nav-link">Grid (2 in Row)</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog-2" activeClassName="active">
                          <a className="nav-link">Grid (3 in Row)</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog-3" activeClassName="active">
                          <a className="nav-link">Grid (Full Width)</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog-4" activeClassName="active">
                          <a className="nav-link">Right Sidebar</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/blog-5" activeClassName="active">
                          <a className="nav-link">Left Sidebar</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Single Post <i className="bx bx-chevron-right"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/single-blog-1"
                              activeClassName="active"
                            >
                              <a className="nav-link">Default</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/single-blog-2"
                              activeClassName="active"
                            >
                              <a className="nav-link">With Video</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/single-blog-3"
                              activeClassName="active"
                            >
                              <a className="nav-link">With Image Slider</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="dropdown-toggle nav-link">
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/about" activeClassName="active">
                          <a className="nav-link">About Us</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/how-it-works" activeClassName="active">
                          <a className="nav-link">How It Work</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/pricing" activeClassName="active">
                          <a className="nav-link">Pricing</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/gallery" activeClassName="active">
                          <a className="nav-link">Gallery</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Events <i className="bx bx-chevron-right"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/events" activeClassName="active">
                              <a className="nav-link">Events</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/single-events"
                              activeClassName="active"
                            >
                              <a className="nav-link">Events Details</a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="/testimonial" activeClassName="active">
                          <a className="nav-link">Testimonials</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/faq" activeClassName="active">
                          <a className="nav-link">FAQ</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/404" activeClassName="active">
                          <a className="nav-link">404 Error</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/coming-soon" activeClassName="active">
                          <a className="nav-link">Coming Soon</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/contact" activeClassName="active">
                          <a className="nav-link">Contact</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {authContextData?.user !== undefined ? (
                    authContextData?.user?.role === "admin" ? (
                      <li className="nav-item">
                        <a href="#" className="dropdown-toggle nav-link">
                          Admin Panel
                        </a>
                        <ul className="dropdown-menu">
                          {[
                            { path: "", name: "Dashboard" },
                            { path: "bookings", name: "Bookings" },
                            { path: "my-listing", name: "My Listings" },
                            { path: "reviews", name: "Reviews" },
                            { path: "bookings", name: "Booking" },
                            { path: "add-listing", name: "Add Listings" },
                            { path: "add-city", name: "Add City" },
                            { path: "add-room-type", name: "Add Room Type" },
                            { path: "add-aminities", name: "Add Aminities" },
                            { path: "profile", name: "My Profile" },
                          ].map(({ path, name }) => (
                            <li className="nav-item" key={name}>
                              <Link href={`/admin/${path}`}>
                                <a className="nav-link">{name}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li className="nav-item">
                        <a href="#" className="dropdown-toggle nav-link">
                          User Panel
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/dashboard" activeClassName="active">
                              <a className="nav-link">Dashboard</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/messages"
                              activeClassName="active"
                            >
                              <a className="nav-link">Messages</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/bookings"
                              activeClassName="active"
                            >
                              <a className="nav-link">Bookings</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/wallet"
                              activeClassName="active"
                            >
                              <a className="nav-link">Wallet</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/my-listing/active"
                              activeClassName="active"
                            >
                              <a className="nav-link">My Listings</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/reviews"
                              activeClassName="active"
                            >
                              <a className="nav-link">Reviews</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/bookmarks"
                              activeClassName="active"
                            >
                              <a className="nav-link">Bookmarks</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/add-listing"
                              activeClassName="active"
                            >
                              <a className="nav-link">Add Listings</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/profile"
                              activeClassName="active"
                            >
                              <a className="nav-link">My Profile</a>
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/dashboard/invoice"
                              activeClassName="active"
                            >
                              <a className="nav-link">Invoice</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    )
                  ) : (
                    <></>
                  )}
                </ul>

                {/* {
                  <div className="others-option d-flex align-items-center">
                    <div className="option-item">
                      <span
                        data-toggle="modal"
                        onClick={toggleAuth}
                        className="auth-one"
                      >
                        <i className="flaticon-user"></i> Login / Register
                      </span>
                    </div>
                  </div>
                } */}
                <div className="others-option d-flex align-items-center">
                  <div className="option-item">
                    {authContextData?.user &&
                    (authContextData?.user?.role === "user" ||
                      authContextData?.user?.role === "admin") ? (
                      <span
                        data-toggle="modal"
                        className="auth-one"
                        onClick={handleLogout}
                      >
                        <i className="flaticon-user"></i> Logout
                      </span>
                    ) : (
                      <span
                        data-toggle="modal"
                        onClick={toggleAuth}
                        className="auth-one"
                      >
                        <i className="flaticon-user"></i> Login / Register
                      </span>
                    )}
                  </div>

                  {/* <div className="option-item">
                    <Link
                      href="/dashboard/add-listing"
                      activeClassName="active"
                    >
                      {userRole ? (
                        <a className="default-btn button-one">
                          <i className="flaticon-more"></i> Add Listing
                        </a>
                      ) : (
                        <a
                          onClick={(e) => {
                            toast.error("Please login to add listings.");
                          }}
                          className="default-btn button-one"
                        >
                          <i className="flaticon-more"></i> Add Listing
                        </a>
                      )}
                    </Link>
                  </div> */}
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="others-option-for-responsive">
          <div className="container">
            <div className="dot-menu" onClick={toggleMiniAuth}>
              <div className="inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>

            <div className={displayMiniAuth ? "container active" : "container"}>
              <div className="option-inner">
                <div className="others-option">
                  <div className="option-item">
                    {authContextData?.user &&
                    (authContextData?.user?.role === "user" ||
                      authContextData?.user?.role === "admin") ? (
                      <span onClick={handleLogout}>
                        <i className="flaticon-user"></i> Logout
                      </span>
                    ) : (
                      <span onClick={toggleAuth}>
                        <i className="flaticon-user"></i> Login / Register
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ Auth Modal ------- */}
      <AuthModal displayAuth={displayAuth} toggleAuth={toggleAuth} />
    </>
  );
};

export default Navbar;
