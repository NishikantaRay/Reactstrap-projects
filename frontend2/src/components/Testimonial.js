import React from 'react'

export default function Testimonial() {
  return (
    <div>
        <section className="testimonial-section bg-color-1 sec-pad">
            {/* <figure className="image-layer"><img src="assets/images/resource/testimonial-image-1.png" alt=""/></figure> */}
            <div className="anim-icon">
                <div className="icon anim-icon-1 rotate-me" style={{backgroundImage: 'url(assets/images/icons/anim-icon-1.png)'}}></div>
                <div className="icon anim-icon-2 rotate-me" style={{backgroundImage: 'url(assets/images/icons/anim-icon-2.png)'}}></div>
                <div className="icon anim-icon-3 rotate-me" style={{backgroundImage: 'url(assets/images/icons/anim-icon-2.png)'}}></div>
                <div className="icon anim-icon-4 rotate-me" style={{backgroundImage: 'url(assets/images/icons/anim-icon-1.png)'}}></div>
            </div>
            <div className="pattern-layer">
                <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-4.png)'}}></div>
                <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-5.png)'}}></div>
                <div className="pattern-3" style={{backgroundImage: 'url(assets/images/shape/shape-6.png)'}}></div>
            </div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-xl-6 col-lg-12 col-md-12 inner-column">
                        <div className="inner-box">
                            <div className="sec-title light">
                                <span>Testimonials</span>
                                <h2>What client’s say?</h2>
                            </div>
                            <div className="testimonial-content">
                                    <div className="text">
                                        <p>“ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim  minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip consequat aute ux irure dolor in reprehen.”</p>
                                    </div>
                                    <div className="author-box">
                                        <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                        <h3>Amelia Anna</h3>
                                        <span className="designation">Senior Martketer</span>
                                    </div>
                            </div>
                            <div className="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                                <div className="testimonial-content">
                                    <div className="text">
                                        <p>“ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim  minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip consequat aute ux irure dolor in reprehen.”</p>
                                    </div>
                                    <div className="author-box">
                                        <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                        <h3>Amelia Anna</h3>
                                        <span className="designation">Senior Martketer</span>
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <div className="text">
                                        <p>“ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim  minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip consequat aute ux irure dolor in reprehen.”</p>
                                    </div>
                                    <div className="author-box">
                                        <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                        <h3>Amelia Anna</h3>
                                        <span className="designation">Senior Martketer</span>
                                    </div>
                                </div>
                                <div className="testimonial-content">
                                    <div className="text">
                                        <p>“ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim  minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip consequat aute ux irure dolor in reprehen.”</p>
                                    </div>
                                    <div className="author-box">
                                        <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                        <h3>Amelia Anna</h3>
                                        <span className="designation">Senior Martketer</span>
                                    </div>
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
