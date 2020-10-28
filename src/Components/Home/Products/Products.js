import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./products.css";
import Product from "./Product/Product";
import ProductsDataBreakfast, {
  ProdcutsDataLunch,
  ProdcutsDataDinner,
} from "../../../FakeData/Fakedata";
import { Button } from "react-bootstrap";
import { CartContext } from "../../../App";
import { NONAME } from "dns";
import { getBreakfast } from "../../../Store/Store";

const Products = () => {
  const [products, setProducts] = useState(ProductsDataBreakfast);

  const [category, setCategory] = useState("Breakfast");

  // Breakfast data
  let breakfastData = getBreakfast();
  console.log(breakfastData);
  breakfastData.then((data) => console.log(data));
  console.log(breakfastData);
  const [cart, setCart] = useContext(CartContext);
  let checkoutStatus = "disabled";
  if (cart.length > 0) {
    checkoutStatus = "";
  }

  const toggleSection = (value, e) => {
    setCategory(value);
    if (value === "Breakfast") {
      const Breakfast = ProductsDataBreakfast;
      setProducts(Breakfast);
    } else if (value === "Lunch") {
      const Lunch = ProdcutsDataLunch;
      setProducts(Lunch);
    } else if (value === "Dinner") {
      const dinner = ProdcutsDataDinner;
      setProducts(dinner);
    }
  };

  return (
    <div className="products">
      <div className="section-links">
        <div>
          <a onClick={() => toggleSection("Breakfast")}>
            <span>Breakfast</span>
          </a>
        </div>
        <div>
          <a onClick={() => toggleSection("Lunch")}>Lunch</a>
        </div>
        <div>
          <a onClick={() => toggleSection("Dinner")}>Dinner</a>
        </div>
      </div>

      <div className="product-cards container">
        <div className="row">
          {products.map((item) => (
            <div className="col-md-4" key={item.id}>
              <Link
                to={"product/" + category + "/" + item.id}
                className="text-normal"
              >
                <Product product={item}></Product>
              </Link>
            </div>
          ))}
        </div>
        <Link to="/checkout" style={{ textDecoration: "none", color: "white" }}>
          {cart.length > 0 && (
            <button className="text-center btn btn-checkout ">
              Checkout Your Food
            </button>
          )}

          {!cart.length > 0 && (
            <button className="text-center btn btn-checkout" disabled>
              Checkout Your Food
            </button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Products;
