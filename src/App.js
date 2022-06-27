import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div className="loading">...Loading</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          exact
          path="/home"
          element={
            <Suspense fallback={<div className="loading">...Loading</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          exact
          path="/product"
          element={
            <Suspense fallback={<div className="loading">...Loading</div>}>
              <Product />
            </Suspense>
          }
        />
        <Route
          exact
          path="/cart"
          element={
            <Suspense fallback={<div className="loading">...Loading</div>}>
              <Cart />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
