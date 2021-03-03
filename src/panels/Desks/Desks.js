import React from "react";
import { PanelHeader, Div } from "@vkontakte/vkui";
import DeskList from "../../components/DeskList/DeskList";
import DeskCreate from "../../components/DeskCreate/DeskCreate";
import '@vkontakte/vkui/dist/vkui.css';
import "./Desks.css";

const Desks = () => {
  return (
    <>
      <PanelHeader className="Head_desk">Мои доски</PanelHeader>
      <Div>
        <DeskCreate />
      </Div>
      <DeskList />
    </>
  );
};

export default Desks;
