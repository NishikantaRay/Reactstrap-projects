import React from 'react'

export default function NewsSection() {
  return (
    <div>
     <section className="news-section sec-pad">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span>News & Article</span>
                    <h2>Stay Update with Docpro</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/news/news-1.jpg" alt=""/>
                                    <a href="blog-details.html"><i className="fas fa-link"></i></a>
                                </figure>
                                <div className="lower-content">
                                    <figure className="admin-thumb"><img src="assets/images/news/admin-1.png" alt=""/></figure>
                                    <span className="category">Electronics</span>
                                    <h3><a href="blog-details.html">Including animation in your design system</a></h3>
                                    <p>Lorem ipsum dolor sit amet consectur adipisicing sed do eiusmod tempor incididunt labore.</p>
                                    <span className="post-info">By <a href="blog-details.html">Eva Green</a> - October 13, 2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInDown animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/news/news-2.jpg" alt=""/>
                                    <a href="blog-details.html"><i className="fas fa-link"></i></a>
                                </figure>
                                <div className="lower-content">
                                    <figure className="admin-thumb"><img src="assets/images/news/admin-2.png" alt=""/></figure>
                                    <span className="category">Electronics</span>
                                    <h3><a href="blog-details.html">A digital prescription for the industry.</a></h3>
                                    <p>Lorem ipsum dolor sit amet consectur adipisicing sed do eiusmod tempor incididunt labore.</p>
                                    <span className="post-info">By <a href="blog-details.html">Eva Green</a> - October 13, 2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box">
                                    <img src="assets/images/news/news-3.jpg" alt=""/>
                                    <a href="blog-details.html"><i className="fas fa-link"></i></a>
                                </figure>
                                <div className="lower-content">
                                    <figure className="admin-thumb"><img src="assets/images/news/admin-3.png" alt=""/></figure>
                                    <span className="category">Electronics</span>
                                    <h3><a href="blog-details.html">Strategic & commercial approach with issues.</a></h3>
                                    <p>Lorem ipsum dolor sit amet consectur adipisicing sed do eiusmod tempor incididunt labore.</p>
                                    <span className="post-info">By <a href="blog-details.html">Eva Green</a> - October 13, 2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
    </div>
  )
}
