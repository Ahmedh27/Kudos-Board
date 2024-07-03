import React from "react";
import "./SubNavBar.css";

function SubNavbar({ activeCategory, setActiveCategory, searchInputValue, handleOnSearchInputChange }) {
  const categories = ["All", "Recent", "Celebration", "Thank You", "Inspiration"];

  return (
    <div className="Navybar">
      <nav className="SubNavbar"> 
        <div className="content">
          <div className="row">
            <ul className="category-menu">
              {categories.map((cat) => (
                <li className={activeCategory === cat ? "is-active" : ""} key={cat}>
                  <button onClick={() => setActiveCategory(cat)}>{cat}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="search-bar">
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={searchInputValue}
              onChange={handleOnSearchInputChange}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SubNavbar;
