import React from 'react'

export default function AppDownload() {
  return (
    <div>
        <section className="download-section">
            <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-8.png)'}}></div>
            <div className="auto-container">
                <div className="row align-items-center clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                        <div className="image-box">
                            <figure className="image image-1"><img src="assets/images/resource/laptop-1.png" alt=""/></figure>
                            <figure className="image image-2 rotate-me"><img src="assets/images/resource/ball-1.png" alt=""/></figure>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                        <div className="content_block_1">
                            <div className="content-box">
                                <span className="upper-text">Download</span>
                                <h2>Download Our Android and IOS App for Experience</h2>
                                <div className="download-btn">
                                    <a href="index.html" className="app-store">
                                        <i className="icon-23"></i>
                                        <span>Download on</span>
                                        <h4>App Store</h4>
                                    </a>
                                    <a href="index.html" className="play-store">
                                        <i className="icon-24"></i>
                                        <span>Get It On</span>
                                        <h4>Google Play</h4>
                                    </a>
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
