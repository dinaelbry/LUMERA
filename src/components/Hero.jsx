import React from "react";
import { Link } from "react-router-dom";

// import الصور صح
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";

function Hero() {
  return (
    <div className="home-section">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={home1} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img src={home2} className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item" data-bs-interval="3000">
            <img src={home3} className="d-block w-100" alt="..." />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
          aria-label="Previous"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
          aria-label="Next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>

      <div className="content-overlay text-center">
        <div className="container text-center py-5">
          <div className="row justify-content-center py-4">
            <div className="col-12 col-md-8">
              <h1 className="display-4 fw-bold text-white">
                welcome to LUMERA site
              </h1>
              <p className="lead">
                Contact US for the best makeup solutions:{" "}
                <Link to="/contact" className="btn btn-outline">
                  Click Here
                </Link>
              </p>
              <p className="lead">
                Explore our amazing products:{" "}
                <Link to="/products" className="btn btn-outline">
                  Show me
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
