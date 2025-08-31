import React from "react";
import aboutImage from "../assets/home4.jpg"; // import

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-md-6 text-center px-5 ">
            <img
              src={aboutImage}
              alt="About Us"
              className="img-fluid rounded shadow-sm"
            />
          </div>

          <div className="col-md-6 text-center px-5 ">
            <div className="info">
              <h3 className="display-6 fw-bold mb-4 text-dark">Who We Are?</h3>
              <p className="lead text-muted">
                LUMERA is a leading makeup brand with over 10 years of expertise
                in creating premium beauty products. We are dedicated to
                empowering individuals with high-quality cosmetics that enhance
                natural beauty. From everyday essentials to glamorous looks, our
                products are crafted with passion and innovation to suit all
                skin types and tones.
              </p>

              <div className="service d-flex align-items-center mb-3">
                <i className="fa-brands fa-envira me-3"></i>
                <p className="mb-0">We use eco-friendly ingredients.</p>
              </div>

              <div className="service d-flex align-items-center mb-3">
                <i className="fa-solid fa-users me-3"></i>
                <p className="mb-0">
                  Trusted by thousands of beauty enthusiasts.
                </p>
              </div>

              <div className="service d-flex align-items-center mb-3">
                <i className="fa-solid fa-heart me-3"></i>
                <p className="mb-0">
                  Loved by beauty influencers and makeup artists.
                </p>
              </div>

              <div className="service d-flex align-items-center mb-3">
                <i className="fa-solid fa-check me-3"></i>
                <p className="mb-0">Our products are cruelty-free and vegan.</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
