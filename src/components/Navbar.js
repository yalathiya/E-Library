import React from "react";

const navbar = ({ filterItem, bookList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {bookList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;
