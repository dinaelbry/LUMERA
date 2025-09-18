import React from "react";

const Contact = () => {
  return (
    <section className="contact-info">
      <div className="container">
        <div className="info text-center text-md-start">
          <h3 className="display-6 fw-bold mb-4 text-dark">
            Contact Information
          </h3>
          <p className="lead text-muted">
            Get in touch with LUMERA for all your makeup needs! Whether you have
            questions about our products, need help with an order, or want to
            collaborate, our team is here to assist you. Reach out today and
            let’s make beauty effortless.
          </p>
          <p className="lead text-muted">Our contact details:</p>
          <div className="contact-list">
            <div className="contact-item d-flex align-items-center gap-2 mb-3">
              <i className="fas fa-phone "></i>
              <p className="mb-0">01556663526</p>
            </div>

            <div className="contact-item d-flex align-items-center gap-2 mb-3">
              <i className="fas fa-envelope "></i>
              <p className="mb-0">Dinaelbry708@gmail.com</p>
            </div>

            <div className="contact-item d-flex align-items-center gap-2 mb-3">
              <i className="fas fa-map-marker-alt "></i>
              <p className="mb-0">Cairo, Egypt</p>
            </div>
          </div>
          <a
            href="mailto:dinaelbry708@gmail.com"
            className="btn btn-outline mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
