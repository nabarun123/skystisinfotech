import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { getAllProducts } from "../api/products";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Product() {
  const [products, setProducts] = useState();

  const init = async () => {
    const result = await getAllProducts();
    setProducts(result.data);
    console.log(result.data);
  };
  console.log(products);

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="text-center display-6 my-5">
          All Products Listed Here
        </div>

        <div className="row d-flex justify-content-evenly align-items-center flex-wrap">
          {products?.map((products) => (
            <Card style={{ width: "18rem" }} className="bg-warning m-3">
              <Card.Body>
                <Card.Title>{products.name}</Card.Title>
                <Card.Text>
                  <em>{products.description}</em>
                </Card.Text>
                <Card.Text>
                  <b>₹ {products.cost}</b>
                </Card.Text>
                <Link to="/cart">
                  <Button variant="primary">Add to cart</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
