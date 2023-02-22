import React, { useState } from "react";

const FilteringComponent = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterClick = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // console.log(filteredItems)
    setFilteredItems(filteredItems);
  };

  return (
    <div>
        <h1>FILTERING</h1>
      <input
        type="text"
        placeholder="Search by category..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleFilterClick}>Filter</button>
      {filteredItems.length > 0
        ? filteredItems.map((item) => <li key={item.id}>{item.title}</li>)
        : items.map((item) => <li key={item.id}>{item.title}</li>)}
    </div>
  );
};

export default FilteringComponent;
