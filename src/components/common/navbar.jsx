import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">
        Video Penco
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <NavLink class="nav-item nav-link " to="/movies">
            Movies
          </NavLink>
          <NavLink class="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink class="nav-item nav-link " to="/rentals">
            Rentals
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
