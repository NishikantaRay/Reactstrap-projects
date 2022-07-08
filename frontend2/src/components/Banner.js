import React from "react";
let sectionStyle = {
  backgroundImage: "url(assets/images/banner/banner-1.jpg)",
};
function Banner() {
  return (
    <div>
      <section className="banner-section centred" style={sectionStyle}>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-10 col-md-12 col-sm-12 offset-lg-1 content-column">
              <div className="content-box">
                <h1>
                  Buy, Sell, Rent & Exchange <br />
                  in one Click
                </h1>
                <p>Amet consectetur adipisicing elit sed do eiusmod.</p>
                <div className="form-inner">
                  <form action="index.html" method="post">                     
                    <div className="input-inner clearfix">
                      <div className="form-group">
                        <i className="icon-2"></i>
                        <input
                          type="search"
                          name="name"
                          placeholder="Search Keyword..."
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <i className="icon-3"></i>
                        <select className="wide">
                          <option data-display="Select Location">
                            Select Location
                          </option>
                          <option value="1">California</option>
                          <option value="2">New York</option>
                          <option value="3">Sun Francis</option>
                          <option value="4">Shicago</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <i className="icon-4"></i>
                        <select className="wide">
                          <option data-display="Select Category">
                            Select Category
                          </option>
                          <option value="1">Education</option>
                          <option value="2">Restaurant</option>
                          <option value="3">Real Estate</option>
                          <option value="4">Home Appliances</option>
                        </select>
                      </div>
                      <div className="btn-box">
                        <button type="submit">
                          <i className="icon-2"></i>Search
                        </button>
                      </div>
                    </div>
                  </form>
                  <ul className="radio-select-box clearfix">
                    <li>
                      <div className="single-checkbox">
                        <input
                          type="radio"
                          name="check-box"
                          id="check1"
                          
                        />
                        <label htmlFor="check1">
                          <span></span>All
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-checkbox">
                        <input type="radio" name="check-box" id="check2" />
                        <label htmlFor="check2">
                          <span></span>Education
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-checkbox">
                        <input type="radio" name="check-box" id="check3" />
                        <label htmlFor="check3">
                          <span></span>Restaurant
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-checkbox">
                        <input type="radio" name="check-box" id="check4" />
                        <label htmlFor="check4">
                          <span></span>Real Estate
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
