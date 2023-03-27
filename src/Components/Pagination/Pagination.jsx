import React, { useState } from "react";
import "./Pagination.css";

const PAGE_SIZE = 12;
const TOTAL_ITEMS = 36;
const items = [
  "The cat sat lazily in the sunbeam.",
  "A storm cloud loomed ominously on the horizon.",
  "She sipped her coffee slowly, lost in thought.",
  "The orchestra played a beautiful melody.",
  "His eyes twinkled mischievously as he told the joke.",
  "The snowflakes fell softly on the ground outside.",
  "The old man shuffled slowly down the street.",
  "The smell of freshly baked bread filled the air.",
  "She twirled in her dress, feeling like a princess.",
  "The waves crashed against the rocks with a deafening roar.",
  "The airplane soared high above the clouds.",
  "The children giggled as they played hide-and-seek.",
  "The wind howled through the trees, a mournful sound.",
  "The water in the lake was crystal clear.",
  "The teacher scribbled notes on the blackboard.",
  "The fire crackled merrily in the fireplace.",
  "The bird sang a sweet melody in the morning.",
  "The flower bloomed in the warm spring sunshine.",
  "he flower bloomed in the warm spring sunshine.",
  "The clock ticked loudly in the silent room.",
  "The scent of lavender filled the air.",
  "The waves crashed against the rocks with a deafening roar.",
  "The airplane soared high above the clouds.",
  "The children giggled as they played hide-and-seek.",
  "The wind howled through the trees, a mournful sound.",
  "The water in the lake was crystal clear.",
  "The teacher scribbled notes on the blackboard.",
  "The fire crackled merrily in the fireplace.",
  "The bird sang a sweet melody in the morning.",
  "The flower bloomed in the warm spring sunshine.",
  "he flower bloomed in the warm spring sunshine.",
  "The clock ticked loudly in the silent room.",
  "The scent of lavender filled the air.",
  "The cat sat lazily in the sunbeam.",
  "A storm cloud loomed ominously on the horizon.",
  "She sipped her coffee slowly, lost in thought.",
];

const Paginating = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const pageCount = Math.ceil(TOTAL_ITEMS / PAGE_SIZE);

  const handleClick = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(
        <button
          className={i === currentPage ? "iter-button" : "iter-button-2"}
          style={{ marginLeft: "10px" }}
          key={i}
          onClick={() => handleClick(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = Math.min(startIndex + PAGE_SIZE, TOTAL_ITEMS);
  const itemsToDisplay = items.slice(startIndex, endIndex);

  return (
    <div>
      <div>
        <div className="head-pag">
          <h4 className="head-title">
            We have generated 1,023 slogans for "cozy"{" "}
          </h4>
          <button className="btn down-btn">Download All</button>
        </div>

        <div>
          <div className="head-div">
            {itemsToDisplay.map((item) => (
              <div key={item} className="headtitle">
                <h5 className="text-pagination">{item}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="paginate-hr" />
      <div>
        <div className="pagination">
          <div className="button-div-render">{renderPageNumbers()}</div>
          <button
            class="btn next-btn"
            disabled={currentPage === pageCount}
            onClick={() => handleClick(currentPage + 1)}
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paginating;
