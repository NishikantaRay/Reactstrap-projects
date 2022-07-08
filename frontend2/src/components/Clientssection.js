import React from 'react'

export default function Clientssection() {
  return (
    <div>
        <section className="clients-section">
            <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-7.png)'}}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                        <div className="sec-title">
                            <span>Our Pertners</span>
                            <h2>We’re going to Became Partners for the Long Run.</h2>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 inner-column">
                        <div className="inner-box">
                            <ul className="clients-logo-list clearfix">
                                <li><figure className="clients-logo"><a href="index.html"><img src="assets/images/clients/clients-1.png" alt=""/></a></figure></li>
                                <li><figure className="clients-logo"><a href="index.html"><img src="assets/images/clients/clients-2.png" alt=""/></a></figure></li>
                                <li><figure className="clients-logo"><a href="index.html"><img src="assets/images/clients/clients-3.png" alt=""/></a></figure></li>
                                <li><figure className="clients-logo"><a href="index.html"><img src="assets/images/clients/clients-4.png" alt=""/></a></figure></li>
                                <li><figure className="clients-logo"><a href="index.html"><img src="assets/images/clients/clients-5.png" alt=""/></a></figure></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
