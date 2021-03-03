import React from "react";
import { View, Panel } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Desks from "../../panels/Desks/Desks";
import Columns from "../../panels/Columns/Columns";
import { panel } from "./constants";
import Context from "./context";
import { useAppState } from "./hooks";
import "../Column/Column.css";
import "./App.css";

const App = () => {
  const state = useAppState();
  return (
    <Context.Provider value={state}>
      <div className="Columns_app">
      <View activePanel={state.activePanel} popout={state.popout} >
        <Panel id={panel.desks}>
          <Desks />
        </Panel>
        <Panel id={panel.columns}>
          {state.activeDesk && <Columns />}
        </Panel>
      </View>
      </div>
    </Context.Provider>
  );
};

export default App;
