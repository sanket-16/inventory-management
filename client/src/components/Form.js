import React from "react";
import { Button ,Grow} from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";
import addItem from './actions/addItem';

function Form(props) {
  const {data, setClicked, setData, clicked} = props;
  
  function handleSubmit(event) {
    event.preventDefault();
    addItem(data, setData);
    setClicked(prevValue => !prevValue);
  }

  function handleChange(event) {
    const newData = { ...data };
    newData[event.target.id] = event.target.value;
    setData(newData);
    console.log(newData);
  }

  return (
    <Grow in={clicked}>
    <form className="inputs" onSubmit={handleSubmit}>
      <input
        placeholder="name"
        id="name"
        type="text"
        value={data.name}
        onChange={handleChange}
      />
      <input
        placeholder="cost"
        id="cost"
        type="number"
        value={data.cost}
        onChange={handleChange}
      />
      <input
        placeholder="stock"
        id="stock"
        type="number"
        value={data.stock}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        size="large"
        type="submit"
      >
        <AiOutlinePlus />
        Add
      </Button>
    </form>
    </Grow>
  );
}

export default Form;
