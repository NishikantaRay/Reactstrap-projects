import React from 'react'

export default function Category() {
    const categoryData=[{
        id:1,
        datawowdelay:"00ms",
        iconname:"icon-6",
        title:"Property",
        datainnumber:"52"
    }
    ,{
        id:2,
        datawowdelay:"100ms",
        iconname:"icon-7",
        title:"Home Appliances",
        datainnumber:"20;/0p;juu"
    }
];
  return (
    <div>
        <section className="category-section centred sec-pad">
            <div className="auto-container">
                <div className="sec-title">
                    <span>Categories</span>
                    <h2>Explore by Category</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmod tempor incididunt labore <br />dolore magna aliqua enim.</p>
                </div>
                <div className="inner-content clearfix">
                    <div className="category-block-one wow fadeInDown animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape">
                                <div className="shape-1" style={{backgroundImage: 'url("assets/images/shape/shape-1.png")',}}></div>
                                <div className="shape-2" style={{backgroundImage: 'url("assets/images/shape/shape-2.png")',}}></div>
                            </div>
                            <div className="icon-box"><i className="icon-6"></i></div>
                            <h5>Property</h5>
                            <span>52</span>
                        </div>
                    </div>
                    <div className="category-block-one wow fadeInDown animated animated" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape">
                            <div className="shape-1" style={{backgroundImage: 'url("assets/images/shape/shape-1.png")',}}></div>
                                <div className="shape-2" style={{backgroundImage: 'url("assets/images/shape/shape-2.png")',}}></div>
                            </div>
                            <div className="icon-box"><i className="icon-7"></i></div>
                            <h5>Home Appliances</h5>
                            <span>20</span>
                        </div>
                    </div>
                    <div className="category-block-one wow fadeInDown animated animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape">
                            <div className="shape-1" style={{backgroundImage: 'url("assets/images/shape/shape-1.png")',}}></div>
                                <div className="shape-2" style={{backgroundImage: 'url("assets/images/shape/shape-2.png")',}}></div>
                            </div>
                            <div className="icon-box"><i className="icon-8"></i></div>
                            <h5>Electronics</h5>
                            <span>35</span>
                        </div>
                    </div>
                    <div className="category-block-one wow fadeInDown animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape">
                            <div className="shape-1" style={{backgroundImage: 'url("assets/images/shape/shape-1.png")',}}></div>
                                <div className="shape-2" style={{backgroundImage: 'url("assets/images/shape/shape-2.png")',}}></div>
                            </div>
                            <div className="icon-box"><i className="icon-9"></i></div>
                            <h5>Health & Beauty</h5>
                            <span>10</span>
                        </div>
                    </div>

                    <div className="category-block-one wow fadeInDown animated animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape">
                            <div className="shape-1" style={{backgroundImage: 'url("assets/images/shape/shape-1.png")',}}></div>
                                <div className="shape-2" style={{backgroundImage: 'url("assets/images/shape/shape-2.png")',}}></div>
                            </div>
                            <div className="icon-box"><i className="icon-10"></i></div>
                            <h5>Automotive</h5>
                            <span>27</span>
                        </div>
                    </div>
                    <div className="category-block-one wow fadeInUp animated animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape">
                            <div className="shape-1" style={{backgroundImage: 'url("assets/images/shape/shape-1.png")',}}></div>
                                <div className="shape-2" style={{backgroundImage: 'url("assets/images/shape/shape-2.png")',}}></div>
                            </div>
                            <div className="icon-box"><i className="icon-11"></i></div>
                            <h5>Furnitures</h5>
                            <span>52</span>
                        </div>
                    </div>
                    <div className="category-block-one wow fadeInUp animated animated" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape">
                            <div className="shape-1" style={{backgroundImage: 'url("assets/images/shape/shape-1.png")',}}></div>
                                <div className="shape-2" style={{backgroundImage: 'url("assets/images/shape/shape-2.png")',}}></div>
                            </div>
                            <div className="icon-box"><i className="icon-12"></i></div>
                            <h5>Real Estate</h5>
                            <span>20</span>
                        </div>
                    </div>
                    <div className="category-block-one wow fadeInUp animated animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape">
                            <div className="shape-1" style={{backgroundImage: 'url("assets/images/shape/shape-1.png")',}}></div>
                                <div className="shape-2" style={{backgroundImage: 'url("assets/images/shape/shape-2.png")',}}></div>
                            </div>
                            <div className="icon-box"><i className="icon-13"></i></div>
                            <h5>Jobs</h5>
                            <span>35</span>
                        </div>
                    </div>
                    <div className="category-block-one wow fadeInUp animated animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape">
                            <div className="shape-1" style={{backgroundImage: 'url("assets/images/shape/shape-1.png")',}}></div>
                                <div className="shape-2" style={{backgroundImage: 'url("assets/images/shape/shape-2.png")',}}></div>
                            </div>
                            <div className="icon-box"><i className="icon-14"></i></div>
                            <h5>Restaurants</h5>
                            <span>10</span>
                        </div>
                    </div>
                    <div className="category-block-one wow fadeInUp animated animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <div className="shape">
                            <div className="shape-1" style={{backgroundImage: 'url("assets/images/shape/shape-1.png")',}}></div>
                                <div className="shape-2" style={{backgroundImage: 'url("assets/images/shape/shape-2.png")',}}></div>
                            </div>
                            <div className="icon-box"><i className="icon-15"></i></div>
                            <h5>Others</h5>
                            <span>27</span>
                        </div>
                    </div>
                </div>
                <div className="more-btn"><a href="index.html" className="theme-btn-one">All Categories</a></div>
            </div>
        </section>
    </div>
  )
}
