import React from "react";
import "./SubNavBar.css";

function SubNavbar({ activeCategory, setActiveCategory, searchInputValue, handleOnSearchInputChange }) {
  const categories = ["All", "Recent", "Celebration", "Thank You", "Inspiration"];

  return (
    // <div className "SubNavbar">
        <nav className="SubNavbar"> 
            <div className="content">
            <div className="row">
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
    {/* </div> */}

    <div className="row">
          <ul className="category-menu">
            {categories.map((cat) => (
              <li className={activeCategory === cat ? "is-active" : ""} key={cat}>
                <button onClick={() => setActiveCategory(cat)}>{cat}</button>
              </li>
            ))}
          </ul>
        </div>
    </div>
    </nav>
  );
}

export default SubNavbar;
