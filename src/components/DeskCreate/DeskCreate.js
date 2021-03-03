import React, { useContext } from "react";
import "../DeskItem/DeskItem.css";
import CreateForm from "../CreateForm/CreateForm";
import { createDesk } from "../../actions/index";
import Context from "../App/context";

const DeskCreate = () => {
  const { addDesk } = useContext(Context);
  const deskCreate = (name) => {
    return createDesk(name)
      .then((doc) => addDesk({ id: doc.id, ...doc.data() }))
      .catch(console.error);
  };

  return (
    <CreateForm
      onSubmit={deskCreate}
      placeholder="Ведите название доски"
      actionTitle="Создать доску"
    />
  );
};

export default DeskCreate;
