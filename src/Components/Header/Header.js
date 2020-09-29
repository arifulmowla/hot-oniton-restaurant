import React, { useContext } from "react";
import logo from "../../images/logo2.png";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { CartContext } from "../../App";
import { OverlayTrigger } from "react-bootstrap";
import { Popover } from "react-bootstrap";
import { UserContext } from "../../App";
import { Dropdown } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

const Header = () => {
  const [cart, setCart] = useContext(CartContext);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const deleteCartItem = (item) => {
    const newCart = cart.filter((c) => c.id !== item.id);
    setCart(newCart);
  };

  const popover = (
    <Popover id="popover-basic" className="cart-popover">
      <Popover.Title as="h3">Cart</Popover.Title>
      <Popover.Content>
        {!cart.length > 0 && (
          <p className="text-center">No items has been added!</p>
        )}

        {cart.length > 0 && (
          <div className="cart-items">
            <ul className="m-0 p-0">
              {cart.map((item) => (
                <li className="d-flex justify-content-between">
                  <p>
                    {item.title} <Badge variant="dark">{item.quantity}</Badge>
                  </p>
                  <div className="price-btn">
                    <span className="mr-3">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <Button
                      varient="danger"
                      onClick={() => deleteCartItem(item)}
                      className="cart-x"
                    >
                      X
                    </Button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <h5 className="">
                Total Price: $
                {cart
                  .reduce((totalPrice, item) => {
                    console.log(item);
                    return totalPrice + item.price * item.quantity;
                  }, 0)
                  .toFixed(2)}
              </h5>
              <Link to="/checkout" style={{ textDecoration: "none" }}>
                <Button className="btn-checkout btn-color my-3">
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Popover.Content>
    </Popover>
  );
  return (
    <div className="header">
      <Navbar className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} className="logo" alt="logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <OverlayTrigger
                delay={{ show: 250, hide: 2000 }}
                placement="bottom"
                overlay={popover}
              >
                <div className="nav-item nav-link">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="cart-icon"
                  />
                  {cart.length > 0 && (
                    <Badge pill variant="info" className="cart-badge">
                      {cart.length}
                    </Badge>
                  )}
                </div>
              </OverlayTrigger>
              {/* <a className="nav-item nav-link cart-icon" href="#"></a> */}

              {!loggedInUser.isAuthenticated && (
                <>
                  <Link to="/login" className="nav-item nav-link">
                    <Button className="btn btn-white">Login</Button>
                  </Link>
                  <Link to="/register" className="nav-item nav-link">
                    <Button className="btn btn-color">Sign up</Button>
                  </Link>
                </>
              )}
              {loggedInUser.isAuthenticated && (
                <>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="user-dropdown"
                    >
                      {loggedInUser.name}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-2">Log out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
