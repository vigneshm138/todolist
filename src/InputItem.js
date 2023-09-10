import React from "react";
import "./inputAddItem.css";

const InputItem = ({
  addNewItem,
  setNewItem,
  addInputItem,
  searchSetItem,
  searchItem,
}) => {
  return (
    <div className="inputndSearch">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="inputBox">
          <input
            type="text"
            placeholder="add something u want?"
            value={addNewItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className="addItemBtn" onClick={addInputItem}>
            add
          </button>
        </div>
      </form>

      <form>
      
        <input
          placeholder="Search Item"
          className="searchBox"
          value={searchItem}
          onChange={(e) => {
            searchSetItem(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default InputItem;
