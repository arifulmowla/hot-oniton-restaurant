import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./checkout.css";
import { CartContext } from "../../App";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [cart, setCart] = useContext(CartContext);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  let subTotal =
    parseFloat(
      cart
        .reduce((totalPrice, item) => {
          console.log(item);
          return totalPrice + item.price * item.quantity;
        }, 0)
        .toFixed(2)
    ) || 0;

  const tax = parseFloat((subTotal * 0.05).toFixed(2)) || 0;
  const Dcharge = 5.0;

  const GTotal = parseFloat(tax + subTotal + Dcharge) || 0;
  return (
    <div className="checkout">
      <Container>
        <div className="row justify-content-between my-5">
          <div className="col-md-6">
            <h4>Edit Delivery details</h4>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <div className="form-group">
                  <input
                    name="name"
                    ref={register({ required: true })}
                    className="form-control"
                    placeholder="Full Name"
                  />
                  {errors.name && <span>This field is required</span>}
                </div>
                <input
                  name="address"
                  ref={register({ required: true })}
                  className="form-control"
                  placeholder="Address"
                />
                {errors.address && <span>This field is required</span>}
              </div>
              <div className="form-group">
                <input
                  name="addressone"
                  ref={register({ required: true })}
                  className="form-control"
                  placeholder="Address (optional)"
                />
                {errors.addressone && <span>This field is required</span>}
              </div>

              <div className="form-group">
                <textarea
                  name="delivery"
                  ref={register({ required: true })}
                  className="form-control"
                  placeholder="Add delivery instructor"
                ></textarea>
                {errors.delivery && <span>This field is required</span>}
              </div>

              <input type="submit" className="btn-full btn-color" />
            </form>
          </div>
          <div className="col-md-6">
            <p>
              From <b>Gulshan Plaza Restaura GPR</b>
            </p>
            <p> Arriving in 20-30 min</p>
            <p>107 Rd no 8</p>

            <div className="small-cart">
              {cart &&
                cart.map((item) => (
                  <div className="child-cart">
                    <div className="row">
                      <div className="col-3">
                        <img src={item.image} alt="cartimage" />
                      </div>
                      <div className="col-6">
                        <h6>{item.title}</h6>
                        <h5 style={{ color: "red" }}>${item.price}</h5>
                        <p style={{ color: "lightgray", marginBottom: "0" }}>
                          Express delivery
                        </p>
                      </div>
                      <div className="col-3 d-flex float-right py-3">
                        <button className="increment-sign">-</button>
                        <input
                          type="text"
                          className="cart-quantity"
                          id="cart-quantity"
                          value={item.quantity}
                        />
                        <button className="increment-sign">+</button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="calculation p-5 bold">
              <div
                style={{ fontWeight: "bold" }}
                className="d-flex justify-content-between "
              >
                <p>
                  <bold>Subtotal: </bold>
                </p>
                <p>
                  <bold>${subTotal}</bold>
                </p>
              </div>
              <div className="d-flex justify-content-between ">
                <p>
                  <bold>tax (5%): </bold>
                </p>
                <p>
                  <bold>${tax}</bold>
                </p>
              </div>
              <div className="d-flex justify-content-between ">
                <p>
                  <bold>Delivery Charge: </bold>
                </p>
                <p>
                  <bold>${Dcharge}</bold>
                </p>
              </div>
              <div className="d-flex justify-content-between ">
                <p>
                  <bold>Grand Total: </bold>
                </p>
                <p>
                  <bold>${GTotal.toFixed(2)}</bold>
                </p>
              </div>
            </div>

            <Link to="/delivery">
              <Button className="btn-full btn-color">Proceed Checkout</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
