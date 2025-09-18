import React from "react";

function Footer() {
  return (
    <footer className="footer text-center pt-3 pb-2">
      <div className="container">
        <p>
          All rights reserved &copy; 2025 For{" "}
          <span className="fw-bold">LUMERA</span> | built with
          <span className="fw-bold"> &hearts; </span> by {"  "}
          <span className="fw-bold ">ENG. Dina Elbry </span>
        </p>

        <div className="links mt-2">
          <a
            href="https://www.facebook.com/share/17CKtTmtse/"
            target="_blank"
            rel="noreferrer"
            className="me-3"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/dinaelbry03?igsh=MWhiMnl0OTB2NW84bw=="
            target="_blank"
            rel="noreferrer"
            className="me-3"
          >
            Instagram
          </a>
          <a
            href="https://x.com/dandana_21?t=bDnI_8CcV3u8dPeM-u6TkQ&s=09"
            target="_blank"
            rel="noreferrer"
            className="me-3"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
