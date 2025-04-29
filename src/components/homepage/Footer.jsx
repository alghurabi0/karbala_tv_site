import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <img
          src="/images/footer_doodle.svg"
          alt="Footer Doodle"
          className="footer-doodle"
        />
        <div className="footer-content">
          <div className="qr-code">
            <img
              src="/images/qr.svg"
              alt="QR Code"
              width={100}
              height={100}
              className="qr-image"
            />
          </div>
          <div className="copyright">
            <p>© All Right Reserved 2024</p>
          </div>
          <div className="website">
            <p>www.karbala-tv.iq</p>
          </div>
          <div className="contact-phone">
            <p>+9647602002200</p>
          </div>
          <div className="contact-email">
            <p>info@karbala-tv.iq</p>
          </div>
          <div></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
