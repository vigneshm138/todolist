import React from "react";
import "./todoItem.css";
import { FaTrashAlt } from "react-icons/fa";

const Todolist = ({ todoItem, handleCheckBox, handleDeleteItem }) => {
  return (
    <div>
      {todoItem.length ? (
        <main className="mainLists">
          <ul>
            {todoItem.map((item) => (
              <li key={item.id}>
                <div>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    className="checkBox"
                    onChange={() => handleCheckBox(item.id)}
                  />
                  <p>{item.do}</p>
                </div>
                <div>
                  <FaTrashAlt
                    role="button"
                    onClick={() => handleDeleteItem(item.id)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </main>
      ) : (
        <p className="works">please add some todo</p>
      )}
    </div>
  );
};

export default Todolist;
