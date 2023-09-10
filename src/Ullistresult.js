import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Ullistresult = ({
  finallist,
  handleCheckBox,
  handleDeleteItem,
  status,
  todoItem,
}) => {
  return (
    <div>
      {finallist.length ? (
        <main className="mainLists">
          <ul>
            {finallist.map((item) => (
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
      ) : todoItem.length ? (
        status === "complete" ? (
          <p className="works">please complete the bending works</p>
        ) : (
          <p className="works">you complete all works</p>
        )
      ) : (
        <p className="works">please add some todo </p>
      )}
    </div>
  );
};

export default Ullistresult;
