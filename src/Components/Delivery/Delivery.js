import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import deliveryBoy from "../../images/delivery-boy.png";
import raiderImg from "../../images/raider.png";
import DeliveryLocation from "../DeliveryLocation/DeliveryLocation";

import "./delivery.css";
const Delivery = () => {
  return (
    <div className="delivery">
      <Container>
        <div className="row">
          <div className="col-md-9 col-sm-6">
            <DeliveryLocation></DeliveryLocation>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="delivery-time">
              <div className="de-img">
                <img src={deliveryBoy} alt="deliveryBoy" />
              </div>
              <div className="location-distance">
                Your location to resturant
              </div>
              <div className="time">
                <h2>09:30</h2>
                <p>Estimated delivery time</p>
              </div>
              <div className="raider">
                <div className="row">
                  <div className="col-4">
                    <div className="raider-img">
                      <img src={raiderImg} alt="" />
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="raider-info">
                      <h5>Hamim</h5>
                      <p>Your raider</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="btn-full btn-color">Contact</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Delivery;
