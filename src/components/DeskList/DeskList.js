import React, { useEffect, useContext } from "react";
import { CardGrid } from "@vkontakte/vkui";
import DeskItem from "../DeskItem/DeskItem";
import { getDesks } from "../../actions/index";
import Context from "../App/context";
import "./DeskList.css";

const DeskList = () => {
  const { desks, setDesks } = useContext(Context);
  useEffect(() => {
    getDesks().then((desks) => setDesks(desks));
  }, [desks, setDesks]);

  return (
    <>
      <CardGrid className="cardGrid">
        {desks.map(({ name, id }) => (
          <DeskItem key={id + name} id={id}>
            {name}
          </DeskItem>
        ))}
      </CardGrid>
    </>
  );
};

export default DeskList;
