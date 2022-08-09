import React from "react";
import { Button, ButtonGroup, Tooltip, Grow} from "@mui/material";
import { AiFillDelete, AiOutlineCheck, AiFillEdit } from "react-icons/ai";
import deleteItem from "./actions/deleteItem";

function TableItems(props) {
    const {items , editClicked, setEditClicked} = props;
    return (
        <>
        {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.cost}</td>
              <td>{item.stock}</td>
              <td className="actions">
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Tooltip title="Delete" placement="top">
                    <Button
                      variant="contained"
                      id={item._id}
                      onClick={(event) => {
                        deleteItem(event);
                      }}
                    >
                      <AiFillDelete/>
                    </Button>
                  </Tooltip>
                  <Tooltip title="Edit" placement="top">
                    <Button
                      variant="contained"
                      onClick={() =>
                        setEditClicked((prevValue) => !prevValue)
                      }
                    >
                      <AiFillEdit />
                    </Button>
                  </Tooltip>
                  {editClicked && (
                    <Grow in={editClicked}>
                    <Tooltip title="Save Changes" placement="top">
                      <Button variant="contained">
                        <AiOutlineCheck />
                      </Button>
                    </Tooltip>
                    </Grow>
                  )}
                </ButtonGroup>
              </td>
            </tr> 
          ))}
          </>
    )
}

export default TableItems;