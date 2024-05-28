import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

// import SearchBar from '../searchBar/SearchBar'

const Navbar = () => {
  const currentUser = {
    id: 1,
    username: "John Due",
    isSeller: false,
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">Yappers</span>
          </Link>
        </div>
        <div className="links">
          <Link to="/category" className="link">
            <span>Category</span>
          </Link>
          <Link to="/gigs" className="link">
            <span>Gigs</span>
          </Link>
          <Link to="/orders" className="link">
            <span>Orders</span>
          </Link>
          <Link to="/About-us" className="link">
            <span>About Us</span>
          </Link>
          <Link to="/join-seller" className="link">
            {!currentUser?.isSeller && <span>Join Seller</span>}
          </Link>
        </div>
        <div className="sign">
          <div className="search-bar-container">
              <input type="text" name="" id="" placeholder="Search.."/>
              <button><img src="../../../img/search.png" alt="" /></button>
          </div>
          <Link to="/login" className="link">
            {!currentUser?.isSeller && <span>Sign-in</span>}
          </Link>
          {!currentUser?.isSeller && <button>Sign-up</button>}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
