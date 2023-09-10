import { useState } from "react";
import "./App.css";
import Todolist from "./Todolist";
import InputItem from "./InputItem";
import { Route, Routes } from "react-router";
import Section from "./Section";
import Complete from "./Complete";

function App() {
  //Create Todolist Items
  const [todoItem, setToItem] = useState(
    JSON.parse(localStorage.getItem("todolists"))
  );

  //Add a new Item
  const [addNewItem, setNewItem] = useState("");
  // serach item
  const [searchItem, searchSetItem] = useState("");

  //change the check box
  function handleCheckBox(id) {
    const newCheckItem = todoItem.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setToItem(newCheckItem);
    localStorage.setItem("todolists", JSON.stringify(newCheckItem));
  }

  //delete the item
  function handleDeleteItem(id) {
    const deleteItem = todoItem.filter((item) => item.id !== id);
    setToItem(deleteItem);
    localStorage.setItem("todolists", JSON.stringify(deleteItem));
  }

  //add new Item
  function addInputItem() {
    const id = todoItem.length ? todoItem[todoItem.length - 1].id + 1 : 0;
    const newList = { id, checked: false, do: addNewItem };
    const newItemLists = [...todoItem, newList];
    setToItem(newItemLists);
    localStorage.setItem("todolists", JSON.stringify(newItemLists));
    setNewItem("");
  }

  return (
    <div className="App">
      <h1>todolist</h1>
      <InputItem
        addNewItem={addNewItem}
        setNewItem={setNewItem}
        addInputItem={addInputItem}
        searchItem={searchItem}
        searchSetItem={searchSetItem}
      />
      <Section />
      <Routes>
        <Route
          path="/"
          element={
            <Todolist
              todoItem={todoItem.filter((item) => {
                console.log(item.do.includes(searchItem));
                return item.do.toUpperCase().includes(searchItem.toUpperCase());
              })}
              handleCheckBox={handleCheckBox}
              handleDeleteItem={handleDeleteItem}
            />
          }
        />
        <Route
          path="/:status"
          element={
            <Complete
              todoItem={todoItem.filter((item) => {
                console.log(item.do.includes(searchItem));
                return item.do.toUpperCase().includes(searchItem.toUpperCase());
              })}
              handleCheckBox={handleCheckBox}
              handleDeleteItem={handleDeleteItem}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
