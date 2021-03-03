import React, { useContext } from "react";
import { Card, Div, Button } from "@vkontakte/vkui";
import "./DeskItem.css";
import { deleteDesk } from "../../actions/index";
import Context from "../App/context";
import "./DeskItem.css";

const DeskItem = ({ id, children }) => {
  const { removeDesk, goToColumns } = useContext(Context);
  const goToColumnPanel = () => {
    goToColumns(id);
  };

  const deleteItem = (event) => {
    event.stopPropagation();

    return deleteDesk(id)
      .then(() => removeDesk(id))
      .catch(console.error);
  };

  return (
    <>
      <Card className="calc" onClick={goToColumnPanel}>
        <Div className="DeskItem_content">
          <div className="Desk_name">{children}</div>
          <Button mode="destructive" onClick={deleteItem}>
            Delete
          </Button>
        </Div>
      </Card>
    </>
  );
};

export default DeskItem;
