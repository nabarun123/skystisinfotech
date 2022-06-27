import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { getAllCategories } from "../api/category";

function Home() {
  const [categories, setCategories] = useState();

  const init = async () => {
    const result = await getAllCategories();
    setCategories(result.data);
    console.log(result.data);
  };
  console.log(categories);

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <Header />
      <div className="display-5 text-center m-3">All Products</div>

      <div className="row my-5">
        {categories?.map((category) => (
          <div className="col">
            {console.log(category.id)}
            <div className="card bg-warning m-3" key={category.id}>
              <Link
                to="/product"
                style={{
                  textDecoration: "none",
                  color: "black",
                  textAlign: "center",
                }}
              >
                <h3 className="p-5">{category.name}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
