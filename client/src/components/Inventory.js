import React, { useState, useEffect } from "react";
import {AiOutlinePlus} from "react-icons/ai";
import {Button} from "@mui/material";
import Form from "./Form";
import TableItems from './TableItems';
import fetchItems from "./actions/fetchItems";

function Inventory() {
  const [items, setItems] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [editClicked, setEditClicked] = useState(false);
  const [data, setData] = useState({ name: "", cost: 0, stock: 0 });

  useEffect(() => {
    fetchItems(setItems);
  }, [handleClick]);

  function handleClick() {
    setClicked((prevValue) => !prevValue);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
          <tbody>
            <TableItems items={items} editClicked={editClicked} setEditClicked={setEditClicked} />
          </tbody>
      </table>
      {clicked ? (
        <Form 
        data={data} 
        setData={setData} 
        clicked = {clicked}
        setClicked={setClicked}
        />
      ) : (
        <div className="add-button">
          <Button variant="contained" size="large" onClick={handleClick}>
            <AiOutlinePlus />
            Add Another
          </Button>
        </div>
      )}
    </div>
  );
}

export default Inventory;
