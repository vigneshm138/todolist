import React from "react";
import { useParams } from "react-router";
import Ullistresult from "./Ullistresult";

const Complete = ({ todoItem, handleCheckBox, handleDeleteItem }) => {
  const { status } = useParams();

  //other way to create
  // const result = () => {
  //   if (status === "complete") {
  //     const com = todoItem.filter((item) => item.checked === true);
  //     return (
  //       <Ullistresult
  //         finallist={com}
  //         handleCheckBox={handleCheckBox}
  //         handleDeleteItem={handleDeleteItem}
  //       />
  //     );
  //   } else if (status === "notcomplete") {
  //     const not = todoItem.filter((item) => item.checked === false);
  //     return (
  //       <Ullistresult
  //         finallist={not}
  //         handleCheckBox={handleCheckBox}
  //         handleDeleteItem={handleDeleteItem}
  //       />
  //     );
  //   }
  //   return result;
  // };

  let result = [];
  if (status === "complete") {
    result.splice();
    result = todoItem.filter((item) => item.checked === true);
  } else if (status === "notcomplete") {
    result.splice();
    result = todoItem.filter((item) => item.checked === false);
  }

  return (
    <div>
      {
        <Ullistresult
          todoItem={todoItem}
          finallist={result}
          handleCheckBox={handleCheckBox}
          handleDeleteItem={handleDeleteItem}
          status={status}
        />
      }
    </div>
  );
};

export default Complete;
