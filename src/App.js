import React, { createContext, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Checkout from "./Components/Checkout/Checkout";
import Register from "./Components/Register/Register";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Delivery from "./Components/Delivery/Delivery";

export const CartContext = createContext();
export const UserContext = createContext();

function App() {
  const [cart, setCart] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <CartContext.Provider value={[cart, setCart]}>
        <div>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/product/:productCategory/:productId">
                <SingleProduct></SingleProduct>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/register">
                <Register></Register>
              </Route>

              {/* Protective router */}
              <PrivateRoute path="/checkout">
                <Checkout />
              </PrivateRoute>
              <PrivateRoute path="/delivery">
                <Delivery />
              </PrivateRoute>
            </Switch>
            <Footer></Footer>
          </Router>
        </div>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
