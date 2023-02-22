import React, { useState } from "react";

const SortingComponent = ({ items }) => {
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedItems = items.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <div>
        <h1>SORTING</h1>
      <label>
        Sort by:
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </label>
      {sortedItems.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  );
};

export default SortingComponent;
