import React from "react";
import { Link } from "react-router-dom";
import Clock from "./Clock";

function Header() {
  let date = new Date().getHours();
  console.log(date);
  let dateMsg = " ";

  if (date < 12 && date >= 6) {
    dateMsg = "Good Morning!";
  } else if (date >= 12 && date <= 17) {
    dateMsg = "Good Afternoon!";
  } else {
    dateMsg = "Good Evening!";
  }

  return (
    <nav class="navbar navbar-expand-lg bg-primary ">
      <div class="container-fluid text-light">
        <a class="navbar-brand text-light" href="#">
          EXOMMERCE
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/home" style={{ textDecoration: "none" }}>
              <li class="nav-item">
                <a
                  class="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
            </Link>

            <Link to="/product" style={{ textDecoration: "none" }}>
              <li class="nav-item">
                <a
                  class="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Product
                </a>
              </li>
            </Link>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <li class="nav-item">
                <a
                  class="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Cart
                </a>
              </li>
            </Link>
          </ul>
          <span className="px-3">
            <Clock />
          </span>

          <form class="d-flex" role="search">
            <div class="container-fluid">
              <div class="navbar-brand mb-0 h1">Hi, User. {dateMsg}</div>
            </div>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link to="/">
              <button class="btn btn-danger" type="submit">
                Logout
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
