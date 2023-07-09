import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import cart from "../../../assets/Frame 67.png";
import headphone from "../../../assets/headphones-svgrepo-com 1.svg";
import heart from "../../../assets/heart.svg";
import user from "../../../assets/user.svg";
import logo from "../../../assets/winlogobrand.png";
import "./TopHeader.css";

function TopHeader() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const categories = [
    "All categories",
    "Category 1",
    "Category 2",
    "Category 3",
  ]; // Replace with your actual categories

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search or filtering logic here based on the searchTerm and selectedCategory
    console.log("Search Term:", searchTerm);
    console.log("Selected Category:", selectedCategory);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <div className="top-container">
        <div className="brand">
          <img src={logo} alt="brand-logo" />
          <form onSubmit={handleSearch}>
            <select value={selectedCategory} onChange={handleCategoryChange}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for products"
            />
            <button type="submit">
              <FiSearch />
            </button>
          </form>
          <div className="space"></div>
          <div className="rightTop">
            <div className="contact">
              <small>Call Us Now</small>
              <div className="number">
                <img src={headphone} alt="" />
                <span>+011 5827918</span>
              </div>
              <p>Sign In</p>
            </div>
            <div className="cart">
              <img src={user} alt="" />
              <img src={heart} alt="" />
              <div>
                <img src={cart} alt="" />
                Cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
