import React, { useContext } from "react";
import "../DeskItem/DeskItem.css";
import { createCard } from "../../actions/index";
import Context from "../App/context";
import CardCreateForm from "./CardCreateForm";

const CardCreate = ({ columnId }) => {
  const { addCard } = useContext(Context);

  const createItem = (name) => {
    return createCard(name, columnId)
      .then((doc) => addCard({ id: doc.id, ...doc.data() }))
      .catch(console.error);
  };

  return <CardCreateForm onSubmit={createItem} />;
};

export default CardCreate;
