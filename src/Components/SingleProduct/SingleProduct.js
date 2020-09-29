import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsDataBreakfast, {
  ProdcutsDataDinner,
  ProdcutsDataLunch,
} from "../../FakeData/Fakedata";
import "./singlepage.css";
import { CartContext } from "../../App";

const SingleProduct = () => {
  const { productId, productCategory } = useParams();

  const [singleData, setSingleData] = useState([]);

  const [cartCount, setCartCount] = useState(1);

  const [cart, setCart] = useContext(CartContext);

  useEffect(() => {
    if (productCategory === "Breakfast") {
      const single = ProductsDataBreakfast.filter(
        (item) => item.id === parseInt(productId)
      );

      setSingleData(single);
    } else if (productCategory === "Dinner") {
      const single = ProdcutsDataDinner.filter(
        (item) => item.id === parseInt(productId)
      );
      setSingleData(single);
    } else if (productCategory === "Lunch") {
      const single = ProdcutsDataLunch.filter(
        (item) => item.id === parseInt(productId)
      );
      setSingleData(single);
    }
  }, []);

  const handleCartBtn = (item, quantity) => {
    const newItem = { ...item, quantity };

    if (cart.length > 0) {
      const existItem = cart.filter((eItem) => eItem.id === newItem.id);
      const restItems = cart.filter((eItem) => eItem.id !== newItem.id);
      if (existItem.length > 0) {
        existItem[0].quantity = quantity;
        const newCart = [...restItems, ...existItem];
        setCart(newCart);
        console.log(cart);
      } else {
        const newCart = [...cart, newItem];
        setCart(newCart);
      }
    } else {
      console.log("new", newItem);
      setCart([newItem]);
    }
  };

  return (
    <div className="single-product">
      <div className="container">
        {singleData.map((item) => (
          <div className="row">
            <div className="col-md-6">
              <div className="product-info">
                <h1>{item.title}</h1>
                <p>{item.longDescription}</p>
                <h2 className="price">${item.price}</h2>
                <div className="count">
                  <button
                    className="count-btn"
                    onClick={() => {
                      if (cartCount > 1) {
                        setCartCount(cartCount - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    name="count-number"
                    id="countNumber"
                    value={cartCount}
                    className="count-number"
                  />
                  <button
                    className="count-btn"
                    onClick={() => setCartCount(cartCount + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn-color btn-add-cart"
                  onClick={() => handleCartBtn(item, cartCount)}
                >
                  Add Cart
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <img src={item.image} alt="" className="single-prod-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProduct;
