import React, { useContext } from "react";

import {
  Div,
  Card,
  Header,
  Button,
  ActionSheet,
  ActionSheetItem,
} from "@vkontakte/vkui";
import "../../panels/Columns/Columns.css";
import Cards from "../Cards/Cards";
import { deleteColumn } from "../../actions/index";
import Context from "../App/context";
import { Icon16MoreHorizontal } from "@vkontakte/icons";
import "./Column.css";

const Column = ({ name, id }) => {
  const { removeColumn, setPopout } = useContext(Context);

  const deleteItem = () => {
    return deleteColumn(id)
      .then(() => removeColumn(id))
      .catch(console.error);
  };
  const showColumnPopout = () => {
    setPopout(
      <ActionSheet
        onClose={() => setPopout(null)}
        iosCloseItem={
          <ActionSheetItem autoclose mode="cancel">
            Отменить
          </ActionSheetItem>
        }
      >
        <ActionSheetItem autoclose>Отменить</ActionSheetItem>
        <ActionSheetItem autoclose mode="destructive" onClick={deleteItem}>
          Удалить
        </ActionSheetItem>
      </ActionSheet>
    );
  };
  return (
    <>
      <Div className="Column_div">
        <div className="Column_header">
          <Header className="Head_card">{name}</Header>
          <Button
            className="Btn__header"
            mode="outline"
            onClick={showColumnPopout}
          >
            <Icon16MoreHorizontal />
          </Button>
        </div>
        <Card className="Columns">
          <Cards columnId={id} />
        </Card>
      </Div>
    </>
  );
};

export default Column;
