import React, { useContext } from "react";
import { Card, Div, Button } from "@vkontakte/vkui";
import "../ColumnCard/ColumnCard.css";
import { deleteCard } from "../../actions/index";
import Context from "../App/context";
import "./ColumnCard.css";

const ColumnCard = ({ children, id }) => {
  const { removeCard } = useContext(Context);

  const deleteItem = () => {
    deleteCard(id)
      .then(() => removeCard(id))
      .catch(console.error);
  };
  return (
    <>
      <Card className="Card_columns">
        <Div className="ColumnCard_wrapper">
          <span className="Card_name">{children}</span>
          <Button mode="destructive" onClick={deleteItem}>
            Удалить
          </Button>
        </Div>
      </Card>
    </>
  );
};

export default ColumnCard;
