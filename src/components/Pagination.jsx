import React, { useState } from "react";

const itemsPerPage = 10;

const PaginationComponent = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToDisplay = items.slice(startIndex, endIndex);

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
        <h1>PAGINATION</h1>
      <ul>
        {itemsToDisplay.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={handlePrevClick} disabled={currentPage === 1}>
          {"<"}
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button onClick={handleNextClick} disabled={currentPage === totalPages}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
