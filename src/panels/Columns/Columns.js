import React, { useEffect, useContext } from "react";
import { PanelHeaderBack, Gallery, PanelHeader } from "@vkontakte/vkui";
import Column from "../../components/Column/Column";
import CreateColumn from "../../components/CreateColumn/CreateColumn";
import { getColumns } from "../../actions/index";
import Context from "../../components/App/context";
import "@vkontakte/vkui/dist/vkui.css";
import "./Columns.css";

const Columns = () => {
  const { goToDesks, setColumns, columns, activeDesk } = useContext(Context);

  useEffect(() => {
    getColumns(activeDesk.id).then((columns) => setColumns(columns));
    //  .then(setColumns)
  }, [activeDesk.id, setColumns]);
  console.log(columns);
  return (
    <>
      <PanelHeader left={<PanelHeaderBack onClick={goToDesks} />}>
        <span className="Column_head">Доска - "{activeDesk.name}"</span>
      </PanelHeader>
      <Gallery slideWidth="90%" align="center" className="Column__list">
        {columns.map(({ id, name }) => (
          <Column key={id} name={name} id={id} />
        ))}
        <CreateColumn />
      </Gallery>
    </>
  );
};

export default Columns;
