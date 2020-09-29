import React from "react";
import "./footer.css";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="left m-sm-auto">
              <img
                src={logo}
                alt="logo-white"
                className="bottom-logo text-sm-right"
              />
            </div>
          </div>
          <div className="col-md-4">
            <ul className="footer-links ">
              <li>
                <a href="#">About Online food</a>
              </li>
              <li>
                <a href="#">Read our blog</a>
              </li>
              <li>
                <a href="#">Sign up to deliver</a>
              </li>
              <li>
                <a href="#">Add our resturent</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="footer-links">
              <li>
                <a href="#">Get Help</a>
              </li>
              <li>
                <a href="#">FaQ</a>
              </li>
              <li>
                <a href="#">Sign up to deliver</a>
              </li>
              <li>
                <a href="#">Add our resturent</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row pt-3">
          <div className="col-md-6">
            <p className="copywrite-text">Copyright &copy; 2020 online food</p>
          </div>

          <div className="col-md-6">
            <div className="footer-float">
              <ul className="d-inline d-flex footer-bottom-links text-sm-center text-lg-left float-sm-none">
                <li>
                  <a href="#">GPrivacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
