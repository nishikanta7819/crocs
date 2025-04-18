import React from "react";
import "../css/footer.css";
import fblogo from "../assets/facebook.png";
import instalogo from "../assets/instagram.png"
import xlogo from "../assets/twitter.png"

const Footer = () => {
  return (
    <>
      <div className="crocs-footer-banner">
        <div className="banner-cards">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5466/5466012.png"
            alt=""
          />
          <p className="text1">Free Shipping</p>
          <p className="text2">Free shipping on all orders</p>
        </div>
        <div className="banner-cards">
          <img
            src="https://cdn-icons-png.flaticon.com/128/12463/12463424.png"
            alt=""
          />
          <p className="text1">Easy Returns</p>
          <p className="text2">
            Change your mind? No problem. Our free returns process makes it
            easy.
          </p>
        </div>
        <div className="banner-cards">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5733/5733207.png"
            alt=""
          />
          <p className="text1">Crocs Gurantee</p>
          <p className="text2">
            Crocs™ products are covered by a 90-day warranty
          </p>
        </div>
        <div className="banner-cards">
          <img
            src="https://cdn-icons-png.flaticon.com/128/483/483408.png"
            alt=""
          />
          <p className="text1">Your information is Secure</p>
          <p className="text2">
            100% secured transaction using SSL encrypted connection.
          </p>
        </div>
      </div>
      <div className="crocs-footer-feedback">
        <div className="crocs-footer-feedback-text">
          <p>We'd love to hear from you!</p>
        </div>
        <div className="crocs-footer-feedback-btn">
          <span>Leave Feedback</span>
        </div>
      </div>
      <hr />
      <div className="crocs-footer-main">
        <div className="crocs-footer-main-left">
          <div className="account">
            <span>My Account</span>
            <p>Order Status</p>
            <p>Sign in/Register</p>
            <p>Returns</p>
          </div>
          <div className="shop">
            <span>Shop</span>
            <p>Women</p>
            <p>Men</p>
            <p>Little Kids Ages 1-5</p>
            <p>Big Kids Ages +5</p>
          </div>
          <div className="help">
            <span>Help</span>
            <p>FAQs</p>
            <p>Delivery Acceptance Policy</p>
            <p>Return Policy</p>
            <p>Refund Policy</p>
            <p>Size Chart</p>
            <p>Caring for your Crocs</p>
            <p>Crocs Lovers Contest</p>
          </div>
          <div className="company">
            <span>Company</span>
            <p>About CROCS</p>
            <p>Store Locator</p>
            <p>Compliance Imformation</p>
          </div>
        </div>
        <div className="crocs-footer-main-right">
          <div className="first-text">
            <p>For online order & delivery related queries</p>
          </div>
          <div className="second-text">
            <p>Customer Service Email: support-in@crocs.in</p>
            <p>
              Toll-Free Customer Service Number: 000-800-919-1686 (Use "000"
              while dialing)
            </p>
            <p>Monday - Friday: 9:00 AM - 7:00 PM IST</p>
          </div>
          <hr />
          <div className="third-text">
            <p>
              Get the latest scoop on new arrivals, sales, special offers and
              receive 15% off on your first order.
            </p>
            <p className="signup">SIGN UP NOW</p>
          </div>
          <div className="fourth-text">
            <p>Stay connected</p>
            <img src={fblogo} alt="" />
            <img src={instalogo} alt="" />
            <img src={xlogo} alt="" />
          </div>
        </div>
      </div>
      <hr />
      <div className="crocs-footer-copyright">
        <p>crocs, Inc. All rights reserved.</p>
        <p>Privacy Policy</p>
      </div>
    </>
  );
};

export default Footer;
