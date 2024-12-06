import React from 'react';
import "./SortBy.css"

const SortBy = ({ onSortByChange }) => {
  const handleSortChange = (event) => {
    onSortByChange(event.target.value);
  };

  return (
    <div className="sort-by">
      <label htmlFor="sort-by">Sort By:</label>
      <select id="sort-by" onChange={handleSortChange}>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
        <option value="new-arrivals">New Arrivals</option>
      </select>
    </div>
  );
};

export default SortBy;
