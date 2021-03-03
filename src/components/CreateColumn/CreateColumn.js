import React, { useContext } from "react";
import "../DeskItem/DeskItem.css";
import CreateForm from "../CreateForm/CreateForm";
import { createColumn } from "../../actions/index";
import Context from "../App/context";

const CreateColumn = () => {
  const { addColumn, activeDesk } = useContext(Context);

  const createItem = (name) => {
    return createColumn(name, activeDesk.id)
      .then((doc) => addColumn({ id: doc.id, ...doc.data() }))
      .catch(console.error);
  };

  return (
    <CreateForm
      onSubmit={createItem}
      placeholder="Ведите название колонки"
      actionTitle="Создать колонку"
    />
  );
};

export default CreateColumn;
