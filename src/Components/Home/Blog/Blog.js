import React from "react";
import "./blog.css";

import image1 from "../../../images/adult-blur-blurred-background-687824.png";
import image2 from "../../../images/chef-cook-food-33614.png";
import image3 from "../../../images/architecture-building-city-2047397.png";

import imgFastDelivery from "../../../images/ICON/Fast-delivery.png";
import bell from "../../../images/ICON/bell.png";
import car from "../../../images/ICON/car.png";

const Blog = () => {
  return (
    <div className="blog container">
      <h1 className="heading">Why you choose us</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
        accusantium eaque cumque ut soluta debitis molestiae placeat dolor
      </p>
      <br />
      <br />

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={image1} alt="fast delivery" className="blog-img" />
            <div className="flex-card-intro">
              <img
                src={imgFastDelivery}
                alt="fast delivery"
                className="card-icon"
              />
              <div>
                <h5>Fast Delivery</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  soluta debitis nam. Repellendus dolore pariatur officiis
                  similique Modi et odit repellendus explicabo.
                </p>
                <div className="inline-flex">
                  <a href="#">See More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={image2} alt="fast delivery" className="blog-img" />
            <div className="flex-card-intro">
              <img src={bell} alt="fast delivery" className="card-icon" />
              <div>
                <h5>A Good Auto Responder</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  soluta debitis nam. Repellendus dolore pariatur officiis
                  similique Modi et odit repellendus explicabo.
                </p>
                <div className="inline-flex">
                  <a href="#">See More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={image3} alt="fast delivery" className="blog-img" />
            <div className="flex-card-intro">
              <img src={car} alt="fast delivery" className="card-icon" />
              <div>
                <h5>Home Delivery</h5>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  soluta debitis nam. Repellendus dolore pariatur officiis
                  similique Modi et odit repellendus explicabo.
                </p>
                <div className="inline-flex">
                  <a href="#">See More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
