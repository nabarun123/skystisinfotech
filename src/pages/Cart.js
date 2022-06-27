import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";

function Cart() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="text-center display-6 my-5">
          All Products Added Here
        </div>
        <Link to="/home">
          <button className="btn btn-danger">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
