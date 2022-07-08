import React from 'react'

export default function SubscribeSection() {
  return (
    <div>
        <section className="subscribe-section">
            <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-9.png)'}}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                        <div className="text">
                            <div className="icon-box"><i className="icon-25"></i></div>
                            <h2>Subscribe to Newsletter</h2>
                            <p>and receive new ads in inbox</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-column">
                        <form action="contact.html" method="post" className="subscribe-form">
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Inout your email address" required=""/>
                                <button type="submit" className="theme-btn-one">Subscribe Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
