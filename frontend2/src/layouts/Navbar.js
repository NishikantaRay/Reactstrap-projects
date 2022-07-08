import React from "react";

function Navbar() {
  return (
    <div>
      <header className="main-header">
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <a href="index.html">
                    <img src="assets/images/logo.png" alt="" />
                  </a>
                </figure>
              </div>

              <div className="menu-area">
                <div
                  className="mobile-nav-toggler"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="#navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu  navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li className="current dropdown">
                        <a href="index.html">Home</a>
                        <ul>
                          <li>
                            <a href="index.html">Home Page 01</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home Page 02</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home Page 03</a>
                          </li>
                          <li>
                            <a href="index-4.html">Home Page 04</a>
                          </li>
                          <li>
                            <a href="index-5.html">Home Page 05</a>
                          </li>
                          <li>
                            <a href="index-6.html">Home Page 06</a>
                          </li>
                          <li>
                            <a href="index-onepage.html">OnePage Home</a>
                          </li>
                          <li>
                            <a href="index-rtl.html">RTL Home</a>
                          </li>
                          <li className="dropdown">
                            <a href="index.html">Header Style</a>
                            <ul>
                              <li>
                                <a href="index.html">Header Style 01</a>
                              </li>
                              <li>
                                <a href="index-2.html">Header Style 02</a>
                              </li>
                              <li>
                                <a href="index-3.html">Header Style 03</a>
                              </li>
                              <li>
                                <a href="index-4.html">Header Style 04</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="index.html">Categories</a>
                        <ul>
                          <li>
                            <a href="category.html">All Category</a>
                          </li>
                          <li>
                            <a href="category-details.html">Category Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="index.html">Browse Ads</a>
                        <ul>
                          <li>
                            <a href="browse-ads-1.html">Browse Ads Grid</a>
                          </li>
                          <li>
                            <a href="browse-ads-2.html">Browse Ads List</a>
                          </li>
                          <li>
                            <a href="browse-ads-3.html">Grid Half</a>
                          </li>
                          <li>
                            <a href="browse-ads-4.html">List Half</a>
                          </li>
                          <li>
                            <a href="browse-ads-details.html">
                              Browse Ads Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="index.html">Pages</a>
                        <ul>
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="stores.html">Our Stores</a>
                          </li>
                          <li>
                            <a href="stores-details.html">Stores Details</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq'S</a>
                          </li>
                          <li>
                            <a href="pricing.html">Pricing Table</a>
                          </li>
                          <li>
                            <a href="login.html">Login Page</a>
                          </li>
                          <li>
                            <a href="signup.html">Signup Page</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                          <li>
                            <a href="error.html">404</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="index.html">Elements</a>
                        <div className="megamenu">
                          <div className="row clearfix">
                            <div className="col-xl-6 column">
                              <ul>
                                <li>
                                  <h4>Elements 1</h4>
                                </li>
                                <li>
                                  <a href="about-element.html">About Block</a>
                                </li>
                                <li>
                                  <a href="category-element-1.html">
                                    Category Block 01
                                  </a>
                                </li>
                                <li>
                                  <a href="category-element-2.html">
                                    Category Block 02
                                  </a>
                                </li>
                                <li>
                                  <a href="category-element-3.html">
                                    Category Block 03
                                  </a>
                                </li>
                                <li>
                                  <a href="place-element-1.html">
                                    Place Block 01
                                  </a>
                                </li>
                                <li>
                                  <a href="place-element-2.html">
                                    Place Block 02
                                  </a>
                                </li>
                                <li>
                                  <a href="news-element-1.html">
                                    News Block 01
                                  </a>
                                </li>
                                <li>
                                  <a href="news-element-2.html">
                                    News Block 02
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-xl-6 column">
                              <ul>
                                <li>
                                  <h4>Elements 2</h4>
                                </li>
                                <li>
                                  <a href="feature-element-1.html">
                                    Feature Block 01
                                  </a>
                                </li>
                                <li>
                                  <a href="feature-element-2.html">
                                    Feature Block 02
                                  </a>
                                </li>
                                <li>
                                  <a href="Process-element-1.html">
                                    Process Block 01
                                  </a>
                                </li>
                                <li>
                                  <a href="Process-element-2.html">
                                    Process Block 02
                                  </a>
                                </li>
                                <li>
                                  <a href="testimonial-element.html">
                                    Testimonial Block
                                  </a>
                                </li>
                                <li>
                                  <a href="clients-element.html">
                                    Clients Block
                                  </a>
                                </li>
                                <li>
                                  <a href="newsletter-element.html">
                                    Newsletter Block
                                  </a>
                                </li>
                                <li>
                                  <a href="chooseus-element.html">
                                    Chooseus Block
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown">
                        <a href="index.html">Blog</a>
                        <ul>
                          <li>
                            <a href="blog.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-2.html">Blog Standard</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="btn-box">
                <a href="browse-ads-details.html" className="theme-btn-one">
                  <i className="icon-1"></i>Submit Ads
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box">
              <div className="logo-box">
                <figure className="logo">
                  <a href="index.html">
                    <img src="assets/images/logo.png" alt="" />
                  </a>
                </figure>
              </div>
              <div className="menu-area">
                <nav className="main-menu clearfix"></nav>
              </div>
              <div className="btn-box">
                <a href="browse-ads-details.html" className="theme-btn-one">
                  <i className="icon-1"></i>Submit Ads
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn">
          <i className="fas fa-times"></i>
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <a href="index.html">
              <img src="assets/images/logo-2.png" alt="" title="" />
            </a>
          </div>
          <div className="menu-outer"></div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Chicago 12, Melborne City, USA</li>
              <li>
                <a href="tel:+8801682648101">+88 01682648101</a>
              </li>
              <li>
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <a href="index.html">
                  <span className="fab fa-twitter"></span>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <span className="fab fa-facebook-square"></span>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <span className="fab fa-pinterest-p"></span>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <span className="fab fa-instagram"></span>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <span className="fab fa-youtube"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
